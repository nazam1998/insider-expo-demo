import {
  ConfigPlugin,
  withDangerousMod,
  withInfoPlist,
  withXcodeProject,
} from "@expo/config-plugins";
import {mergeContents} from "@expo/config-plugins/build/utils/generateCode";
import fs from "fs";

const IPHONEOS_DEPLOYMENT_TARGET = "13.0";
const TARGETED_DEVICE_FAMILY = `"1,2"`;

const NSE_TARGET_NAME = "NotificationExtensionService";
const NSE_SOURCE_FILE = "NotificationService.m";
const NSE_EXT_FILES = [
  "NotificationService.h",
  `${NSE_TARGET_NAME}.entitlements`,
  `${NSE_TARGET_NAME}-Info.plist`,
];

const NCE_TARGET_NAME = "NotificationExtensionContent";
const NCE_SOURCE_FILE = "NotificationViewController.m";
const NCE_EXT_FILES = [
  "NotificationViewController.h",
  `${NCE_TARGET_NAME}-Info.plist`,
  `Base.lproj/MainInterface.storyboard`,
];

export const withAddNotificationExtension: ConfigPlugin<{
  appName: string;
}> = (config, {appName}) => {
  config = withXcodeProject(config, (newConfig) => {
    const xcodeProject = newConfig.modResults;

    const extGroup = xcodeProject.addPbxGroup(
      [...NSE_EXT_FILES, NSE_SOURCE_FILE],
      NSE_TARGET_NAME,
      NSE_TARGET_NAME,
    );

    const extContentGroup = xcodeProject.addPbxGroup(
      [...NCE_EXT_FILES, NCE_SOURCE_FILE],
      NCE_TARGET_NAME,
      NCE_TARGET_NAME,
    );
    const groups = xcodeProject.hash.project.objects["PBXGroup"];
    Object.keys(groups).forEach(function (key) {
      if (groups[key].name === undefined && groups[key].path === undefined) {
        xcodeProject.addToPbxGroup(extGroup.uuid, key);
        xcodeProject.addToPbxGroup(extContentGroup.uuid, key);
      }
    });

    const projObjects = xcodeProject.hash.project.objects;
    projObjects["PBXTargetDependency"] =
      projObjects["PBXTargetDependency"] || {};
    projObjects["PBXContainerItemProxy"] =
      projObjects["PBXTargetDependency"] || {};

    if (!!xcodeProject.pbxTargetByName(NSE_TARGET_NAME)) {
      return newConfig;
    }

    const nseTarget = xcodeProject.addTarget(
      NSE_TARGET_NAME,
      "app_extension",
      NSE_TARGET_NAME,
      `${config.ios?.bundleIdentifier}.${NSE_TARGET_NAME}`,
    );

    const nceTarget = xcodeProject.addTarget(
      NCE_TARGET_NAME,
      "app_extension",
      NCE_TARGET_NAME,
      `${config.ios?.bundleIdentifier}.${NCE_TARGET_NAME}`,
    );
    xcodeProject.addFramework("UserNotificationsUI");
    xcodeProject.addFramework("UserNotifications");
    xcodeProject.addBuildPhase(
      ["NotificationService.m"],
      "PBXSourcesBuildPhase",
      "Sources",
      nseTarget.uuid,
    );
    xcodeProject.addBuildPhase(
      [],
      "PBXResourcesBuildPhase",
      "Resources",
      nseTarget.uuid,
    );

    xcodeProject.addBuildPhase(
      [],
      "PBXFrameworksBuildPhase",
      "Frameworks",
      nseTarget.uuid,
    );

    xcodeProject.addBuildPhase(
      ["NotificationViewController.m"],
      "PBXSourcesBuildPhase",
      "Sources",
      nceTarget.uuid,
    );
    xcodeProject.addBuildPhase(
      ["Base.lproj/MainInterface.storyboard"],
      "PBXResourcesBuildPhase",
      "Resources",
      nceTarget.uuid,
    );

    xcodeProject.addBuildPhase(
      ["UserNotifications.framework", "UserNotificationsUI.framework"],
      "PBXFrameworksBuildPhase",
      "Frameworks",
      nceTarget.uuid,
    );

    const configurations = xcodeProject.pbxXCBuildConfigurationSection();
    for (const key in configurations) {
      if (typeof configurations[key].buildSettings === "undefined") continue;
      if (
        configurations[key].buildSettings.PRODUCT_NAME == `"${NSE_TARGET_NAME}"`
      ) {
        const buildSettingsObj = configurations[key].buildSettings;
        buildSettingsObj.DEVELOPMENT_TEAM = "3C8L4YL3S8";
        buildSettingsObj.IPHONEOS_DEPLOYMENT_TARGET =
          IPHONEOS_DEPLOYMENT_TARGET;
        buildSettingsObj.TARGETED_DEVICE_FAMILY = TARGETED_DEVICE_FAMILY;
        buildSettingsObj.CODE_SIGN_ENTITLEMENTS = `${NSE_TARGET_NAME}/${NSE_TARGET_NAME}.entitlements`;
        buildSettingsObj.CODE_SIGN_STYLE = "Automatic";
      } else if (
        configurations[key].buildSettings.PRODUCT_NAME == `"${NCE_TARGET_NAME}"`
      ) {
        const buildSettingsObj = configurations[key].buildSettings;
        buildSettingsObj.DEVELOPMENT_TEAM = "3C8L4YL3S8";
        buildSettingsObj.IPHONEOS_DEPLOYMENT_TARGET =
          IPHONEOS_DEPLOYMENT_TARGET;
        buildSettingsObj.TARGETED_DEVICE_FAMILY = TARGETED_DEVICE_FAMILY;
        buildSettingsObj.CODE_SIGN_ENTITLEMENTS = `${NCE_TARGET_NAME}/${NCE_TARGET_NAME}.entitlements`;
        buildSettingsObj.CODE_SIGN_STYLE = "Automatic";
      }
    }

    xcodeProject.addTargetAttribute("DevelopmentTeam", "3C8L4YL3S8", nseTarget);
    xcodeProject.addTargetAttribute("DevelopmentTeam", "3C8L4YL3S8", nceTarget);
    xcodeProject.addTargetAttribute("DevelopmentTeam", "3C8L4YL3S8");
    return newConfig;
  });

  config = withDangerousMod(config, [
    "ios",
    async (config) => {
      const projectRootAsset =
        config.modRequest.projectRoot + "/plugins/assets";
      const notificationServiceFolder =
        config.modRequest.platformProjectRoot + "/NotificationExtensionService";

      await fs.promises.mkdir(notificationServiceFolder);

      await fs.promises.copyFile(
        projectRootAsset + `/${NSE_TARGET_NAME}/${NSE_TARGET_NAME}-Info.plist`,
        notificationServiceFolder + `/${NSE_TARGET_NAME}-Info.plist`,
      );

      await fs.promises.copyFile(
        projectRootAsset +
          "/NotificationExtensionService/NotificationExtensionService.entitlements",
        notificationServiceFolder + "/NotificationExtensionService.entitlements",
      );

      await fs.promises.copyFile(
        projectRootAsset + "/NotificationExtensionService/NotificationService.h",
        notificationServiceFolder + "/NotificationService.h",
      );

      await fs.promises.copyFile(
        projectRootAsset + "/NotificationExtensionService/NotificationService.m",
        notificationServiceFolder + "/NotificationService.m",
      );

      return config;
    },
  ]);

  config = withDangerousMod(config, [
    "ios",
    async (config) => {
      const projectRootAsset =
        config.modRequest.projectRoot + "/plugins/assets";
      const notificationContentFolder =
        config.modRequest.platformProjectRoot + "/NotificationExtensionContent";

      await fs.promises.mkdir(notificationContentFolder);

      await fs.promises.copyFile(
        projectRootAsset +
          "/NotificationExtensionContent/NotificationExtensionContent-Info.plist",
        notificationContentFolder + `/${NCE_TARGET_NAME}-Info.plist`,
      );

      await fs.promises.copyFile(
        projectRootAsset +
          "/NotificationExtensionContent/NotificationExtensionContent.entitlements",
        notificationContentFolder + "/NotificationExtensionContent.entitlements",
      );

      await fs.promises.copyFile(
        projectRootAsset +
          "/NotificationExtensionContent/NotificationViewController.h",
        notificationContentFolder + "/NotificationViewController.h",
      );

      await fs.promises.copyFile(
        projectRootAsset +
          "/NotificationExtensionContent/NotificationViewController.m",
        notificationContentFolder + "/NotificationViewController.m",
      );

      if (!fs.existsSync(notificationContentFolder + "/Base.lproj")) {
        await fs.promises.mkdir(notificationContentFolder + "/Base.lproj");
      }

      await fs.promises.copyFile(
        projectRootAsset +
          "/NotificationExtensionContent/MainInterface.storyboard",
        notificationContentFolder + "/Base.lproj/MainInterface.storyboard",
      );

      return config;
    },
  ]);

  
  return config;
};
