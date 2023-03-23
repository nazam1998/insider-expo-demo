import {
  ConfigPlugin,
  withDangerousMod,
  withEntitlementsPlist,
  withInfoPlist,
  withXcodeProject,
} from "@expo/config-plugins";
import {mergeContents} from "@expo/config-plugins/build/utils/generateCode";
import fs from "fs";

import cloneDeep = require("lodash.clonedeep");

function insertPBXBuildFile(PBXBuildFileObj: any) {
  //step 1
  PBXBuildFileObj.D5FE4994297539790022AAB4 = {
    isa: "PBXBuildFile",
    fileRef: "D5FE4993297539790022AAB4",
    fileRef_comment: "NotificationService.m",
  };
  PBXBuildFileObj.D5FE4994297539790022AAB4_comment =
    "NotificationService.m in Sources";

  PBXBuildFileObj.D5FE4998297539790022AAB4 = {
    isa: "PBXBuildFile",
    fileRef: "D5FE4990297539790022AAB4",
    fileRef_comment: "InsiderNotificationService.appex",
    settings: {ATTRIBUTES: ["RemoveHeadersOnCopy"]},
  };
  PBXBuildFileObj.D5FE4998297539790022AAB4_comment =
    "InsiderNotificationService.appex in Embed App Extensions";

  //step 2
  PBXBuildFileObj.D5FE49AC29753A460022AAB4 = {
    isa: "PBXBuildFile",
    fileRef: "D5FE49AA29753A460022AAB4",
    fileRef_comment: "MainInterface.storyboard",
  };
  PBXBuildFileObj.D5FE49AC29753A460022AAB4_comment =
    "MainInterface.storyboard in Resources";

  PBXBuildFileObj.D5FE49A329753A460022AAB4 = {
    isa: "PBXBuildFile",
    fileRef: "D5FE49A229753A460022AAB4",
    fileRef_comment: "UserNotifications.framework",
  };
  PBXBuildFileObj.D5FE49A329753A460022AAB4_comment =
    "UserNotifications.framework in Frameworks";

  PBXBuildFileObj.D5FE49B029753A460022AAB4 = {
    isa: "PBXBuildFile",
    fileRef: "D5FE49A129753A460022AAB4",
    fileRef_comment: "InsiderNotificationContent.appex",
    settings: {ATTRIBUTES: ["RemoveHeadersOnCopy"]},
  };
  PBXBuildFileObj.D5FE49B029753A460022AAB4_comment =
    "InsiderNotificationContent.appex in Embed App Extensions";

  PBXBuildFileObj.D5FE49A529753A460022AAB4 = {
    isa: "PBXBuildFile",
    fileRef: "D5FE49A429753A460022AAB4",
    fileRef_comment: "UserNotificationsUI.framework",
  };
  PBXBuildFileObj.D5FE49A529753A460022AAB4_comment =
    "UserNotificationsUI.framework in Frameworks";

  PBXBuildFileObj.D5FE49A929753A460022AAB4 = {
    isa: "PBXBuildFile",
    fileRef: "D5FE49A829753A460022AAB4",
    fileRef_comment: "NotificationViewController.m",
  };
  PBXBuildFileObj.D5FE49A929753A460022AAB4_comment =
    "NotificationViewController.m in Sources";

  PBXBuildFileObj["4C4307F2D76C4510984903A0"] = {
    isa: "PBXBuildFile",
    fileRef: "B1045945063F42229B1C4DA5",
    fileRef_comment: "AdSupport.framework",
    settings: {ATTRIBUTES: ["Weak"]},
  };
  PBXBuildFileObj["4C4307F2D76C4510984903A0_comment"] =
    "AdSupport.framework in Frameworks";

  PBXBuildFileObj.C2183F8F619843FD8316388B = {
    isa: "PBXBuildFile",
    fileRef: "34FC82DED3204ACDA54B30EC",
    fileRef_comment: "StoreKit.framework",
    settings: {ATTRIBUTES: ["Weak"]},
  };
  PBXBuildFileObj.C2183F8F619843FD8316388B_comment =
    "StoreKit.framework in Frameworks";

  PBXBuildFileObj.FA3FA2B65DFF463D87AC05FE = {
    isa: "PBXBuildFile",
    fileRef: "05E06BAAE4DE4727AB68B14E",
    fileRef_comment: "AdServices.framework",
    settings: {ATTRIBUTES: ["Weak"]},
  };

  PBXBuildFileObj.FA3FA2B65DFF463D87AC05FE_comment =
    "AdServices.framework in Frameworks";

  PBXBuildFileObj["13780AA6EEA94B23B9B62E38"] = {
    isa: "PBXBuildFile",
    fileRef: "532DB2F3309A47B6901931F2",
    fileRef_comment: "iAd.framework",
    settings: {ATTRIBUTES: ["Weak"]},
  };
  PBXBuildFileObj["13780AA6EEA94B23B9B62E38_comment"] =
    "iAd.framework in Frameworks";

  PBXBuildFileObj["8188265BC6BE402F9A8CA0E6"] = {
    isa: "PBXBuildFile",
    fileRef: "004E0C322953406EA8694175",
    fileRef_comment: "AppTrackingTransparency.framework",
    settings: {ATTRIBUTES: ["Weak"]},
  };
  PBXBuildFileObj["8188265BC6BE402F9A8CA0E6_comment"] =
    "AppTrackingTransparency.framework in Frameworks";

  PBXBuildFileObj.C21CA008EE82419EA2549322 = {
    isa: "PBXBuildFile",
    fileRef: "3935FCD706C946C899E2DDC3",
    fileRef_comment: "GoogleService-Info.plist",
  };
  PBXBuildFileObj.C21CA008EE82419EA2549322_comment =
    "GoogleService-Info.plist in Resources";
}

function insertPBXFileReference(PBXFileReference: any, appTitle: string) {
  PBXFileReference["004E0C322953406EA8694175"] = {
    sourceTree: "SDKROOT",
    isa: "PBXFileReference",
    includeInIndex: "0",
    explicitFileType: "undefined",
    lastKnownFileType: "wrapper.framework",
    path: "System/Library/Frameworks/AppTrackingTransparency.framework",
    name: "AppTrackingTransparency.framework",
    fileEncoding: "9",
  };

  PBXFileReference["004E0C322953406EA8694175_comment"] =
    "AppTrackingTransparency.framework";

  PBXFileReference.D5FE4990297539790022AAB4 = {
    path: "InsiderNotificationService.appex",
    isa: "PBXFileReference",
    includeInIndex: "0",
    explicitFileType: '"wrapper.app-extension"',
    sourceTree: "BUILT_PRODUCTS_DIR",
  };
  PBXFileReference.D5FE4990297539790022AAB4_comment =
    "InsiderNotificationService.appex";

  PBXFileReference.D5FE4995297539790022AAB4 = {
    path: "Info.plist",
    isa: "PBXFileReference",
    lastKnownFileType: "text.plist.xml",
    sourceTree: '"<group>"',
  };
  PBXFileReference.D5FE4995297539790022AAB4_comment = "Info.plist";

  // PBXFileReference["20C77DDDD8A947BF977DB6E4"] = {
  //   sourceTree: '"<group>"',
  //   isa: "PBXFileReference",
  //   includeInIndex: "0",
  //   explicitFileType: "undefined",
  //   lastKnownFileType: "sourcecode.c.h",
  //   path: `"${appTitle}/${appTitle}-Bridging-Header.h"`,
  //   name: `"${appTitle}-Bridging-Header.h"`,
  //   fileEncoding: "4",
  // };
  // PBXFileReference[
  //   "20C77DDDD8A947BF977DB6E4_comment"
  // ] = `"${appTitle}-Bridging-Header.h"`;

  PBXFileReference.D5FE49AD29753A460022AAB4 = {
    path: "Info.plist",
    isa: "PBXFileReference",
    lastKnownFileType: "text.plist.xml",
    sourceTree: '"<group>"',
  };
  //@CHECK : multiple info.plist ??
  PBXFileReference["D5FE49AD29753A460022AAB4_comment"] = "Info.plist";

  PBXFileReference.D5FE49B529753B710022AAB4 = {
    path: "InsiderNotificationContent.entitlements",
    isa: "PBXFileReference",
    lastKnownFileType: "text.plist.entitlements",
    sourceTree: '"<group>"',
  };
  PBXFileReference.D5FE49B529753B710022AAB4_comment =
    "InsiderNotificationContent.entitlements";

  PBXFileReference["05E06BAAE4DE4727AB68B14E"] = {
    sourceTree: "SDKROOT",
    isa: "PBXFileReference",
    includeInIndex: "0",
    explicitFileType: "undefined",
    lastKnownFileType: "wrapper.framework",
    path: "System/Library/Frameworks/AdServices.framework",
    name: "AdServices.framework",
    fileEncoding: "9",
  };
  PBXFileReference["05E06BAAE4DE4727AB68B14E_comment"] = "AdServices.framework";

  PBXFileReference.D5FE49A429753A460022AAB4 = {
    path: "System/Library/Frameworks/UserNotificationsUI.framework",
    isa: "PBXFileReference",
    name: "UserNotificationsUI.framework",
    lastKnownFileType: "wrapper.framework",
    sourceTree: "SDKROOT",
  };
  PBXFileReference.D5FE49A429753A460022AAB4_comment =
    "UserNotificationsUI.framework";

  PBXFileReference["532DB2F3309A47B6901931F2"] = {
    sourceTree: "SDKROOT",
    isa: "PBXFileReference",
    includeInIndex: "0",
    explicitFileType: "undefined",
    lastKnownFileType: "wrapper.framework",
    path: "System/Library/Frameworks/iAd.framework",
    name: "iAd.framework",
    fileEncoding: "9",
  };

  PBXFileReference["532DB2F3309A47B6901931F2_comment"] = "iAd.framework";

  PBXFileReference.D5FE49AB29753A460022AAB4 = {
    path: "Base.lproj/MainInterface.storyboard",
    isa: "PBXFileReference",
    name: "Base",
    lastKnownFileType: "file.storyboard",
    sourceTree: '"<group>"',
  };
  PBXFileReference.D5FE49AB29753A460022AAB4_comment = "Base";

  PBXFileReference.D5FE49A229753A460022AAB4 = {
    path: "System/Library/Frameworks/UserNotifications.framework",
    isa: "PBXFileReference",
    name: "UserNotifications.framework",
    lastKnownFileType: "wrapper.framework",
    sourceTree: "SDKROOT",
  };

  PBXFileReference.D5FE49A229753A460022AAB4_comment =
    "UserNotifications.framework";

  PBXFileReference.D5FE49A129753A460022AAB4 = {
    path: "InsiderNotificationContent.appex",
    isa: "PBXFileReference",
    includeInIndex: "0",
    explicitFileType: '"wrapper.app-extension"',
    sourceTree: "BUILT_PRODUCTS_DIR",
  };

  PBXFileReference.D5FE49A129753A460022AAB4_comment =
    "InsiderNotificationContent.appex";

  PBXFileReference.D5FE4993297539790022AAB4 = {
    path: "NotificationService.m",
    isa: "PBXFileReference",
    lastKnownFileType: "sourcecode.c.objc",
    sourceTree: '"<group>"',
  };
  PBXFileReference.D5FE4993297539790022AAB4_comment = "NotificationService.m";

  PBXFileReference.D5FE49B429753B6C0022AAB4 = {
    path: "InsiderNotificationService.entitlements",
    isa: "PBXFileReference",
    lastKnownFileType: "text.plist.entitlements",
    sourceTree: '"<group>"',
  };
  PBXFileReference.D5FE49B429753B6C0022AAB4_comment =
    "InsiderNotificationService.entitlements";

  PBXFileReference.D5FE4992297539790022AAB4 = {
    path: "NotificationService.h",
    isa: "PBXFileReference",
    lastKnownFileType: "sourcecode.c.h",
    sourceTree: '"<group>"',
  };

  PBXFileReference.D5FE4992297539790022AAB4_comment = "NotificationService.h";

  PBXFileReference.B1045945063F42229B1C4DA5 = {
    sourceTree: "SDKROOT",
    isa: "PBXFileReference",
    includeInIndex: "0",
    explicitFileType: "undefined",
    lastKnownFileType: "wrapper.framework",
    path: "System/Library/Frameworks/AdSupport.framework",
    name: "AdSupport.framework",
    fileEncoding: "9",
  };
  PBXFileReference.B1045945063F42229B1C4DA5_comment = "AdSupport.framework";

  PBXFileReference["3935FCD706C946C899E2DDC3"] = {
    sourceTree: '"<group>"',
    isa: "PBXFileReference",
    includeInIndex: "0",
    explicitFileType: "undefined",
    lastKnownFileType: "text.plist.xml",
    path: `"${appTitle}/GoogleService-Info.plist"`,
    name: '"GoogleService-Info.plist"',
    fileEncoding: "4",
  };
  PBXFileReference["3935FCD706C946C899E2DDC3_comment"] =
    "GoogleService-Info.plist";

  PBXFileReference.D5FE49A829753A460022AAB4 = {
    path: "NotificationViewController.m",
    isa: "PBXFileReference",
    lastKnownFileType: "sourcecode.c.objc",
    sourceTree: '"<group>"',
  };
  PBXFileReference.D5FE49A829753A460022AAB4_comment =
    "NotificationViewController.m";

  PBXFileReference.D5FE49A729753A460022AAB4 = {
    path: "NotificationViewController.h",
    isa: "PBXFileReference",
    lastKnownFileType: "sourcecode.c.h",
    sourceTree: '"<group>"',
  };
  PBXFileReference.D5FE49A729753A460022AAB4_comment =
    "NotificationViewController.h";

  PBXFileReference["34FC82DED3204ACDA54B30EC"] = {
    sourceTree: "SDKROOT",
    isa: "PBXFileReference",
    includeInIndex: "0",
    explicitFileType: "undefined",
    lastKnownFileType: "wrapper.framework",
    path: "System/Library/Frameworks/StoreKit.framework",
    name: "StoreKit.framework",
    fileEncoding: "9",
  };

  PBXFileReference["34FC82DED3204ACDA54B30EC_comment"] = "StoreKit.framework";

  PBXFileReference.AD72A5247BD54CDDBEA34315 = {
    sourceTree: '"<group>"',
    isa: "PBXFileReference",
    includeInIndex: "0",
    explicitFileType: "undefined",
    lastKnownFileType: "sourcecode.swift",
    path: `\"${appTitle}/noop-file.swift\"`,
    name: '"noop-file.swift"',
    fileEncoding: "4",
  };
  PBXFileReference.AD72A5247BD54CDDBEA34315_comment = "noop-file.swift";
}

function insertPBXContainerItemProxy(PBXContainerItemProxy: any) {
  PBXContainerItemProxy.D5FE4996297539790022AAB4 = {
    isa: "PBXContainerItemProxy",
    containerPortal: "83CBB9F71A601CBA00E9B192",
    remoteGlobalIDString: "D5FE498F297539790022AAB4",
    remoteInfo: "InsiderNotificationService",
    proxyType: "1",
  };
  PBXContainerItemProxy.D5FE4996297539790022AAB4_comment =
    "PBXContainerItemProxy";

  PBXContainerItemProxy.D5FE49AE29753A460022AAB4 = {
    isa: "PBXContainerItemProxy",
    containerPortal: "83CBB9F71A601CBA00E9B192",
    remoteGlobalIDString: "D5FE49A029753A460022AAB4",
    remoteInfo: "InsiderNotificationContent",
    proxyType: "1",
  };

  PBXContainerItemProxy.D5FE49AE29753A460022AAB4_comment =
    "PBXContainerItemProxy";
}

function insertPBXCopyFilesBuildPhase(PBXCopyFilesBuildPhase: any) {
  PBXCopyFilesBuildPhase["D5FE4999297539790022AAB4"] = {
    buildActionMask: "2147483647",
    dstSubfolderSpec: "13",
    isa: "PBXCopyFilesBuildPhase",
    runOnlyForDeploymentPostprocessing: "0",
    dstPath: '""',
    files: [
      {
        value: "D5FE49B029753A460022AAB4",
        comment: "InsiderNotificationContent.appex in Embed App Extensions",
      },
      {
        value: "D5FE4998297539790022AAB4",
        comment: "InsiderNotificationService.appex in Embed App Extensions",
      },
    ],
    name: '"Embed App Extensions"',
  };

  PBXCopyFilesBuildPhase["D5FE4999297539790022AAB4_comment"] =
    "Embed App Extensions";
}

function insertPBXFrameworksBuildPhase(PBXFrameworksBuildPhase: any) {
  // modification
  const clone = cloneDeep(PBXFrameworksBuildPhase["13B07F8C1A680F5B00A75B9A"]);

  clone.files.push(
    {
      value: "8188265BC6BE402F9A8CA0E6",
      comment: "AppTrackingTransparency.framework in Frameworks",
    },
    {
      value: "C2183F8F619843FD8316388B",
      comment: "StoreKit.framework in Frameworks",
    },
    {
      value: "4C4307F2D76C4510984903A0",
      comment: "AdSupport.framework in Frameworks",
    },
    {
      value: "FA3FA2B65DFF463D87AC05FE",
      comment: "AdServices.framework in Frameworks",
    },
    {
      value: "13780AA6EEA94B23B9B62E38",
      comment: "iAd.framework in Frameworks",
    },
  );

  PBXFrameworksBuildPhase["13B07F8C1A680F5B00A75B9A"] = clone;

  //insertion...
  PBXFrameworksBuildPhase.D5FE498D297539790022AAB4 = {
    isa: "PBXFrameworksBuildPhase",
    buildActionMask: "2147483647",
    files: [],
    runOnlyForDeploymentPostprocessing: "0",
  };
  PBXFrameworksBuildPhase.D5FE498D297539790022AAB4_comment = "Frameworks";

  PBXFrameworksBuildPhase.D5FE499E29753A460022AAB4 = {
    isa: "PBXFrameworksBuildPhase",
    buildActionMask: "2147483647",
    files: [
      {
        value: "D5FE49A529753A460022AAB4",
        comment: "UserNotificationsUI.framework in Frameworks",
      },
      {
        value: "D5FE49A329753A460022AAB4",
        comment: "UserNotifications.framework in Frameworks",
      },
    ],
    runOnlyForDeploymentPostprocessing: "0",
  };
  PBXFrameworksBuildPhase.D5FE499E29753A460022AAB4_comment = "Frameworks";
}

function insertPBXGroup(PBXGroup: any, appTitle: string) {
  //modification
  let clone = cloneDeep(PBXGroup["83CBB9F61A601CBA00E9B192"]);

  clone.children.push(
    {
      value: "D5FE4991297539790022AAB4",
      comment: "InsiderNotificationService",
    },
    {
      value: "D5FE49A629753A460022AAB4",
      comment: "InsiderNotificationContent",
    },
  );

  PBXGroup["83CBB9F61A601CBA00E9B192"] = clone;

  clone = cloneDeep(PBXGroup["83CBBA001A601CBA00E9B192"]);

  clone.children.push(
    {
      value: "D5FE4990297539790022AAB4",
      comment: "InsiderNotificationService.appex",
    },
    {
      value: "D5FE49A129753A460022AAB4",
      comment: "InsiderNotificationContent.appex",
    },
  );

  PBXGroup["83CBBA001A601CBA00E9B192"] = clone;

  clone = cloneDeep(PBXGroup["13B07FAE1A68108700A75B9A"]);

  clone.children.push(
    // {
    //   value: "20C77DDDD8A947BF977DB6E4",
    //   comment: `${appTitle}-Bridging-Header.h`,
    // },
    {
      value: "3935FCD706C946C899E2DDC3",
      comment: "GoogleService-Info.plist",
    },
  );

  PBXGroup["13B07FAE1A68108700A75B9A"] = clone;

  // creation
  PBXGroup.D5FE49A629753A460022AAB4 = {
    path: "InsiderNotificationContent",
    isa: "PBXGroup",
    children: [
      {
        value: "D5FE49B529753B710022AAB4",
        comment: "InsiderNotificationContent.entitlements",
      },
      {
        value: "D5FE49A729753A460022AAB4",
        comment: "NotificationViewController.h",
      },
      {
        value: "D5FE49A829753A460022AAB4",
        comment: "NotificationViewController.m",
      },
      {
        value: "D5FE49AA29753A460022AAB4",
        comment: "MainInterface.storyboard",
      },
      {value: "D5FE49AD29753A460022AAB4", comment: "Info.plist"},
    ],
    sourceTree: '"<group>"',
  };

  PBXGroup.D5FE49A629753A460022AAB4_comment = "InsiderNotificationContent";

  // creation
  PBXGroup["D5FE4991297539790022AAB4"] = {
    path: "InsiderNotificationService",
    isa: "PBXGroup",
    children: [
      {
        value: "D5FE49B429753B6C0022AAB4",
        comment: "InsiderNotificationService.entitlements",
      },
      {
        value: "D5FE4992297539790022AAB4",
        comment: "NotificationService.h",
      },
      {
        value: "D5FE4993297539790022AAB4",
        comment: "NotificationService.m",
      },
      {value: "D5FE4995297539790022AAB4", comment: "Info.plist"},
    ],
    sourceTree: '"<group>"',
  };

  // modifying
  clone = cloneDeep(PBXGroup["2D16E6871FA4F8E400B85C8A"]);
  // console.log('clone = ', clone);
  clone.children.push(
    {
      value: "004E0C322953406EA8694175",
      comment: "AppTrackingTransparency.framework",
    },
    {value: "34FC82DED3204ACDA54B30EC", comment: "StoreKit.framework"},
    {value: "B1045945063F42229B1C4DA5", comment: "AdSupport.framework"},
    {value: "05E06BAAE4DE4727AB68B14E", comment: "AdServices.framework"},
    {value: "532DB2F3309A47B6901931F2", comment: "iAd.framework"},
    {
      value: "D5FE49A229753A460022AAB4",
      comment: "UserNotifications.framework",
    },
    {
      value: "D5FE49A429753A460022AAB4",
      comment: "UserNotificationsUI.framework",
    },
  );

  PBXGroup["2D16E6871FA4F8E400B85C8A"] = clone;
}

function insertPBXNativeTarget(PBXNativeTarget: any) {
  let clone = cloneDeep(PBXNativeTarget["13B07F861A680F5B00A75B9A"]);
  // console.log('clone = ', clone);

  clone.buildPhases.push(
    {
      value: "DC472EC216F57D81F6C58204",
      comment: "[CP] Embed Pods Frameworks",
    },
    {
      value: "5C9E7B6816CFEDF5CB63D078",
      comment: "[CP-User] [RNFB] Core Configuration",
    },
    {
      value: "396515533734361A66B6583C",
      comment: "[CP-User] [RNFB] Crashlytics Configuration",
    },
    {
      value: "D5FE4999297539790022AAB4",
      comment: "Embed App Extensions",
    },
  );

  clone.dependencies.push(
    "D5FE4997297539790022AAB4",
    "D5FE49AF29753A460022AAB4",
  );

  PBXNativeTarget["13B07F861A680F5B00A75B9A"] = clone;

  // adding 2 targets
  PBXNativeTarget.D5FE49A029753A460022AAB4 = {
    buildConfigurationList: "D5FE49B129753A460022AAB4",
    productReference: "D5FE49A129753A460022AAB4",
    productType: '"com.apple.product-type.app-extension"',
    productName: "InsiderNotificationContent",
    isa: "PBXNativeTarget",
    buildPhases: [
      {
        value: "D5FE499D29753A460022AAB4",
        comment: "Sources",
      },
      {
        value: "D5FE499E29753A460022AAB4",
        comment: "Frameworks",
      },
      {
        value: "D5FE499F29753A460022AAB4",
        comment: "Resources",
      },
    ],
    dependencies: [],
    name: "InsiderNotificationContent",
    buildRules: [],
  };

  PBXNativeTarget.D5FE498F297539790022AAB4 = {
    buildConfigurationList: "D5FE499C297539790022AAB4",
    productReference: "D5FE4990297539790022AAB4",
    productType: '"com.apple.product-type.app-extension"',
    productName: "InsiderNotificationService",
    isa: "PBXNativeTarget",
    buildPhases: [
      {
        value: "D5FE498C297539790022AAB4",
        comment: "Sources",
      },
      {
        value: "D5FE498D297539790022AAB4",
        comment: "Frameworks",
      },
      {
        value: "D5FE498E297539790022AAB4",
        comment: "Resources",
      },
    ],
    dependencies: [],
    name: "InsiderNotificationService",
    buildRules: [],
  };
}

function insertPBXProject(PBXProject: any) {
  let clone = cloneDeep(PBXProject["83CBB9F71A601CBA00E9B192"]);

  clone.targets.push(
    {
      value: "D5FE498F297539790022AAB4",
      comment: "InsiderNotificationService",
    },
    {
      value: "D5FE49A029753A460022AAB4",
      comment: "InsiderNotificationContent",
    },
  );

  const targetAttributes = clone.attributes.TargetAttributes;

  targetAttributes.D5FE498F297539790022AAB4 = {
    CreatedOnToolsVersion: "13.2.1",
    ProvisioningStyle: "Automatic",
    DevelopmentTeam: "3C8L4YL3S8",
  };

  targetAttributes.D5FE49A029753A460022AAB4 = {
    CreatedOnToolsVersion: "13.2.1",
    ProvisioningStyle: "Automatic",
    DevelopmentTeam: "3C8L4YL3S8",
  };

  PBXProject["83CBB9F71A601CBA00E9B192"] = clone;
}

function insertPBXResourcesBuildPhase(PBXResourcesBuildPhase: any) {
  //ajout
  PBXResourcesBuildPhase.D5FE499F29753A460022AAB4 = {
    isa: "PBXResourcesBuildPhase",
    buildActionMask: "2147483647",
    files: [
      {
        value: "D5FE49AC29753A460022AAB4",
        comment: "MainInterface.storyboard in Resources",
      },
    ],
    runOnlyForDeploymentPostprocessing: "0",
  };

  PBXResourcesBuildPhase.D5FE498E297539790022AAB4 = {
    isa: "PBXResourcesBuildPhase",
    buildActionMask: "2147483647",
    files: [],
    runOnlyForDeploymentPostprocessing: "0",
  };

  // modifying
  let clone = cloneDeep(PBXResourcesBuildPhase["13B07F8E1A680F5B00A75B9A"]);

  clone.files.push({
    value: "C21CA008EE82419EA2549322",
    comment: "GoogleService-Info.plist in Resources",
  });

  PBXResourcesBuildPhase["13B07F8E1A680F5B00A75B9A"] = clone;
}

function insertPBXShellScriptBuildPhase(
  PBXShellScriptBuildPhase: any,
  appTitle: any,
) {
  // adding

  PBXShellScriptBuildPhase["396515533734361A66B6583C"] = {
    inputPaths: [
      '"${DWARF_DSYM_FOLDER_PATH}/${DWARF_DSYM_FILE_NAME}/Contents/Resources/DWARF/${TARGET_NAME}"',
      '"$(SRCROOT)/$(BUILT_PRODUCTS_DIR)/$(INFOPLIST_PATH)"',
    ],
    shellPath: "/bin/sh",
    buildActionMask: "2147483647",
    isa: "PBXShellScriptBuildPhase",
    runOnlyForDeploymentPostprocessing: "0",
    shellScript:
      "\"#!/usr/bin/env bash\\n#\\n# Copyright (c) 2016-present Invertase Limited & Contributors\\n#\\n# Licensed under the Apache License, Version 2.0 (the 'License');\\n# you may not use this library except in compliance with the License.\\n# You may obtain a copy of the License at\\n#\\n#   http://www.apache.org/licenses/LICENSE-2.0\\n#\\n# Unless required by applicable law or agreed to in writing, software\\n# distributed under the License is distributed on an 'AS IS' BASIS,\\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n# See the License for the specific language governing permissions and\\n# limitations under the License.\\n#\\nset -e\\n\\nif [[ ${PODS_ROOT} ]]; then\\n  echo 'info: Exec FirebaseCrashlytics Run from Pods'\\n  '${PODS_ROOT}/FirebaseCrashlytics/run'\\nelse\\n  echo 'info: Exec FirebaseCrashlytics Run from framework'\\n  '${PROJECT_DIR}/FirebaseCrashlytics.framework/run'\\nfi\\n\"",
    files: [],
    name: '"[CP-User] [RNFB] Crashlytics Configuration"',
  };

  PBXShellScriptBuildPhase.DC472EC216F57D81F6C58204 = {
    inputPaths: [
      '"${PODS_ROOT}/Target Support Files/Pods-' +
        appTitle +
        "/Pods-" +
        appTitle +
        '-frameworks.sh"',
      '"${PODS_ROOT}/hermes-engine/destroot/Library/Frameworks/iphoneos/hermes.framework"',
      '"${PODS_XCFRAMEWORKS_BUILD_DIR}/FBAEMKit/FBAEMKit.framework/FBAEMKit"',
      '"${PODS_XCFRAMEWORKS_BUILD_DIR}/FBSDKCoreKit/FBSDKCoreKit.framework/FBSDKCoreKit"',
      '"${PODS_XCFRAMEWORKS_BUILD_DIR}/FBSDKCoreKit_Basics/FBSDKCoreKit_Basics.framework/FBSDKCoreKit_Basics"',
      '"${PODS_XCFRAMEWORKS_BUILD_DIR}/FBSDKGamingServicesKit/FBSDKGamingServicesKit.framework/FBSDKGamingServicesKit"',
      '"${PODS_XCFRAMEWORKS_BUILD_DIR}/FBSDKLoginKit/FBSDKLoginKit.framework/FBSDKLoginKit"',
      '"${PODS_XCFRAMEWORKS_BUILD_DIR}/FBSDKShareKit/FBSDKShareKit.framework/FBSDKShareKit"',
      '"${PODS_XCFRAMEWORKS_BUILD_DIR}/InsiderHybrid/InsiderHybrid.framework/InsiderHybrid"',
      '"${PODS_XCFRAMEWORKS_BUILD_DIR}/InsiderMobile/InsiderMobile.framework/InsiderMobile"',
    ],
    buildActionMask: "2147483647",
    shellPath: "/bin/sh",
    showEnvVarsInLog: "0",
    isa: "PBXShellScriptBuildPhase",
    runOnlyForDeploymentPostprocessing: "0",
    outputPaths: [
      '"${TARGET_BUILD_DIR}/${FRAMEWORKS_FOLDER_PATH}/hermes.framework"',
      '"${TARGET_BUILD_DIR}/${FRAMEWORKS_FOLDER_PATH}/FBAEMKit.framework"',
      '"${TARGET_BUILD_DIR}/${FRAMEWORKS_FOLDER_PATH}/FBSDKCoreKit.framework"',
      '"${TARGET_BUILD_DIR}/${FRAMEWORKS_FOLDER_PATH}/FBSDKCoreKit_Basics.framework"',
      '"${TARGET_BUILD_DIR}/${FRAMEWORKS_FOLDER_PATH}/FBSDKGamingServicesKit.framework"',
      '"${TARGET_BUILD_DIR}/${FRAMEWORKS_FOLDER_PATH}/FBSDKLoginKit.framework"',
      '"${TARGET_BUILD_DIR}/${FRAMEWORKS_FOLDER_PATH}/FBSDKShareKit.framework"',
      '"${TARGET_BUILD_DIR}/${FRAMEWORKS_FOLDER_PATH}/InsiderHybrid.framework"',
      '"${TARGET_BUILD_DIR}/${FRAMEWORKS_FOLDER_PATH}/InsiderMobile.framework"',
    ],
    shellScript:
      '"${PODS_ROOT}/Target Support Files/Pods-' +
      appTitle +
      "/Pods-" +
      appTitle +
      '-frameworks.sh"',
    files: [],
    name: '"[CP] Embed Pods Frameworks"',
  };

  PBXShellScriptBuildPhase["5C9E7B6816CFEDF5CB63D078"] = {
    inputPaths: ['"$(BUILT_PRODUCTS_DIR)/$(INFOPLIST_PATH)"'],
    shellPath: "/bin/sh",
    buildActionMask: "2147483647",
    isa: "PBXShellScriptBuildPhase",
    runOnlyForDeploymentPostprocessing: "0",
    shellScript:
      "\"#!/usr/bin/env bash\\n#\\n# Copyright (c) 2016-present Invertase Limited & Contributors\\n#\\n# Licensed under the Apache License, Version 2.0 (the 'License');\\n# you may not use this library except in compliance with the License.\\n# You may obtain a copy of the License at\\n#\\n#   http://www.apache.org/licenses/LICENSE-2.0\\n#\\n# Unless required by applicable law or agreed to in writing, software\\n# distributed under the License is distributed on an 'AS IS' BASIS,\\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n# See the License for the specific language governing permissions and\\n# limitations under the License.\\n#\\nset -e\\n\\n_MAX_LOOKUPS=2;\\n_SEARCH_RESULT='\\n_RN_ROOT_EXISTS='\\n_CURRENT_LOOKUPS=1\\n_JSON_ROOT='react-native'\\n_JSON_FILE_NAME='firebase.json'\\n_JSON_OUTPUT_BASE64='e30=' # { }\\n_CURRENT_SEARCH_DIR=${PROJECT_DIR}\\n_PLIST_BUDDY=/usr/libexec/PlistBuddy\\n_TARGET_PLIST='${BUILT_PRODUCTS_DIR}/${INFOPLIST_PATH}'\\n_DSYM_PLIST='${DWARF_DSYM_FOLDER_PATH}/${DWARF_DSYM_FILE_NAME}/Contents/Info.plist'\\n\\n# plist arrays\\n_PLIST_ENTRY_KEYS=()\\n_PLIST_ENTRY_TYPES=()\\n_PLIST_ENTRY_VALUES=()\\n\\nfunction setPlistValue {\\n  echo 'info:      setting plist entry '$1' of type '$2' in file '$4'\\n  ${_PLIST_BUDDY} -c 'Add :$1 $2 '$3' $4 || echo 'info:      '$1' already exists'\\n}\\n\\nfunction getFirebaseJsonKeyValue () {\\n  if [[ ${_RN_ROOT_EXISTS} ]]; then\\n    ruby -e 'require 'rubygems';require 'json'; output=JSON.parse('$1'); puts output[$_JSON_ROOT]['$2']'\\n  else\\n    echo '\\n  fi;\\n}\\n\\nfunction jsonBoolToYesNo () {\\n  if [[ $1 == 'false' ]]; then\\n    echo 'NO'\\n  elif [[ $1 == 'true' ]]; then\\n    echo 'YES'\\n  else echo 'NO'\\n  fi\\n}\\n\\necho 'info: -> RNFB build script started'\\necho 'info: 1) Locating ${_JSON_FILE_NAME} file:'\\n\\nif [[ -z ${_CURRENT_SEARCH_DIR} ]]; then\\n  _CURRENT_SEARCH_DIR=$(pwd)\\nfi;\\n\\nwhile true; do\\n  _CURRENT_SEARCH_DIR=$(dirname '$_CURRENT_SEARCH_DIR')\\n  if [[ '$_CURRENT_SEARCH_DIR' == '/' ]] || [[ ${_CURRENT_LOOKUPS} -gt ${_MAX_LOOKUPS} ]]; then break; fi;\\n  echo 'info:      ($_CURRENT_LOOKUPS of $_MAX_LOOKUPS) Searching in '$_CURRENT_SEARCH_DIR' for a ${_JSON_FILE_NAME} file.'\\n  _SEARCH_RESULT=$(find '$_CURRENT_SEARCH_DIR' -maxdepth 2 -name ${_JSON_FILE_NAME} -print | /usr/bin/head -n 1)\\n  if [[ ${_SEARCH_RESULT} ]]; then\\n    echo 'info:      ${_JSON_FILE_NAME} found at $_SEARCH_RESULT'\\n    break;\\n  fi;\\n  _CURRENT_LOOKUPS=$((_CURRENT_LOOKUPS+1))\\ndone\\n\\nif [[ ${_SEARCH_RESULT} ]]; then\\n  _JSON_OUTPUT_RAW=$(cat '${_SEARCH_RESULT}')\\n  _RN_ROOT_EXISTS=$(ruby -e 'require 'rubygems';require 'json'; output=JSON.parse('$_JSON_OUTPUT_RAW'); puts output[$_JSON_ROOT]' || echo ')\\n\\n  if [[ ${_RN_ROOT_EXISTS} ]]; then\\n    if ! python3 --version >/dev/null 2>&1; then echo 'python3 not found, firebase.json file processing error.' && exit 1; fi\\n    _JSON_OUTPUT_BASE64=$(python3 -c 'import json,sys,base64;print(base64.b64encode(bytes(json.dumps(json.loads(open('${_SEARCH_RESULT}', 'rb').read())['${_JSON_ROOT}']), 'utf-8')).decode())' || echo 'e30=')\\n  fi\\n\\n  _PLIST_ENTRY_KEYS+=('firebase_json_raw')\\n  _PLIST_ENTRY_TYPES+=('string')\\n  _PLIST_ENTRY_VALUES+=('$_JSON_OUTPUT_BASE64')\\n\\n  # config.app_data_collection_default_enabled\\n  _APP_DATA_COLLECTION_ENABLED=$(getFirebaseJsonKeyValue '$_JSON_OUTPUT_RAW' 'app_data_collection_default_enabled')\\n  if [[ $_APP_DATA_COLLECTION_ENABLED ]]; then\\n    _PLIST_ENTRY_KEYS+=('FirebaseDataCollectionDefaultEnabled')\\n    _PLIST_ENTRY_TYPES+=('bool')\\n    _PLIST_ENTRY_VALUES+=('$(jsonBoolToYesNo '$_APP_DATA_COLLECTION_ENABLED')')\\n  fi\\n\\n  # config.analytics_auto_collection_enabled\\n  _ANALYTICS_AUTO_COLLECTION=$(getFirebaseJsonKeyValue '$_JSON_OUTPUT_RAW' 'analytics_auto_collection_enabled')\\n  if [[ $_ANALYTICS_AUTO_COLLECTION ]]; then\\n    _PLIST_ENTRY_KEYS+=('FIREBASE_ANALYTICS_COLLECTION_ENABLED')\\n    _PLIST_ENTRY_TYPES+=('bool')\\n    _PLIST_ENTRY_VALUES+=('$(jsonBoolToYesNo '$_ANALYTICS_AUTO_COLLECTION')')\\n  fi\\n\\n  # config.analytics_collection_deactivated\\n  _ANALYTICS_DEACTIVATED=$(getFirebaseJsonKeyValue '$_JSON_OUTPUT_RAW' 'analytics_collection_deactivated')\\n  if [[ $_ANALYTICS_DEACTIVATED ]]; then\\n    _PLIST_ENTRY_KEYS+=('FIREBASE_ANALYTICS_COLLECTION_DEACTIVATED')\\n    _PLIST_ENTRY_TYPES+=('bool')\\n    _PLIST_ENTRY_VALUES+=('$(jsonBoolToYesNo '$_ANALYTICS_DEACTIVATED')')\\n  fi\\n\\n  # config.analytics_idfv_collection_enabled\\n  _ANALYTICS_IDFV_COLLECTION=$(getFirebaseJsonKeyValue '$_JSON_OUTPUT_RAW' 'analytics_idfv_collection_enabled')\\n  if [[ $_ANALYTICS_IDFV_COLLECTION ]]; then\\n    _PLIST_ENTRY_KEYS+=('GOOGLE_ANALYTICS_IDFV_COLLECTION_ENABLED')\\n    _PLIST_ENTRY_TYPES+=('bool')\\n    _PLIST_ENTRY_VALUES+=('$(jsonBoolToYesNo '$_ANALYTICS_IDFV_COLLECTION')')\\n  fi\\n\\n  # config.analytics_default_allow_ad_personalization_signals\\n  _ANALYTICS_PERSONALIZATION=$(getFirebaseJsonKeyValue '$_JSON_OUTPUT_RAW' 'analytics_default_allow_ad_personalization_signals')\\n  if [[ $_ANALYTICS_PERSONALIZATION ]]; then\\n    _PLIST_ENTRY_KEYS+=('GOOGLE_ANALYTICS_DEFAULT_ALLOW_AD_PERSONALIZATION_SIGNALS')\\n    _PLIST_ENTRY_TYPES+=('bool')\\n    _PLIST_ENTRY_VALUES+=('$(jsonBoolToYesNo '$_ANALYTICS_PERSONALIZATION')')\\n  fi\\n\\n  # config.google_analytics_automatic_screen_reporting_enabled\\n  _ANALYTICS_AUTO_SCREEN_REPORTING=$(getFirebaseJsonKeyValue '$_JSON_OUTPUT_RAW' 'google_analytics_automatic_screen_reporting_enabled')\\n  if [[ $_ANALYTICS_AUTO_SCREEN_REPORTING ]]; then\\n    _PLIST_ENTRY_KEYS+=('FirebaseAutomaticScreenReportingEnabled')\\n    _PLIST_ENTRY_TYPES+=('bool')\\n    _PLIST_ENTRY_VALUES+=('$(jsonBoolToYesNo '$_ANALYTICS_AUTO_SCREEN_REPORTING')')\\n  fi\\n\\n  # config.perf_auto_collection_enabled\\n  _PERF_AUTO_COLLECTION=$(getFirebaseJsonKeyValue '$_JSON_OUTPUT_RAW' 'perf_auto_collection_enabled')\\n  if [[ $_PERF_AUTO_COLLECTION ]]; then\\n    _PLIST_ENTRY_KEYS+=('firebase_performance_collection_enabled')\\n    _PLIST_ENTRY_TYPES+=('bool')\\n    _PLIST_ENTRY_VALUES+=('$(jsonBoolToYesNo '$_PERF_AUTO_COLLECTION')')\\n  fi\\n\\n  # config.perf_collection_deactivated\\n  _PERF_DEACTIVATED=$(getFirebaseJsonKeyValue '$_JSON_OUTPUT_RAW' 'perf_collection_deactivated')\\n  if [[ $_PERF_DEACTIVATED ]]; then\\n    _PLIST_ENTRY_KEYS+=('firebase_performance_collection_deactivated')\\n    _PLIST_ENTRY_TYPES+=('bool')\\n    _PLIST_ENTRY_VALUES+=('$(jsonBoolToYesNo '$_PERF_DEACTIVATED')')\\n  fi\\n\\n  # config.messaging_auto_init_enabled\\n  _MESSAGING_AUTO_INIT=$(getFirebaseJsonKeyValue '$_JSON_OUTPUT_RAW' 'messaging_auto_init_enabled')\\n  if [[ $_MESSAGING_AUTO_INIT ]]; then\\n    _PLIST_ENTRY_KEYS+=('FirebaseMessagingAutoInitEnabled')\\n    _PLIST_ENTRY_TYPES+=('bool')\\n    _PLIST_ENTRY_VALUES+=('$(jsonBoolToYesNo '$_MESSAGING_AUTO_INIT')')\\n  fi\\n\\n  # config.in_app_messaging_auto_colllection_enabled\\n  _FIAM_AUTO_INIT=$(getFirebaseJsonKeyValue '$_JSON_OUTPUT_RAW' 'in_app_messaging_auto_collection_enabled')\\n  if [[ $_FIAM_AUTO_INIT ]]; then\\n    _PLIST_ENTRY_KEYS+=('FirebaseInAppMessagingAutomaticDataCollectionEnabled')\\n    _PLIST_ENTRY_TYPES+=('bool')\\n    _PLIST_ENTRY_VALUES+=('$(jsonBoolToYesNo '$_FIAM_AUTO_INIT')')\\n  fi\\n\\n  # config.app_check_token_auto_refresh\\n  _APP_CHECK_TOKEN_AUTO_REFRESH=$(getFirebaseJsonKeyValue '$_JSON_OUTPUT_RAW' 'app_check_token_auto_refresh')\\n  if [[ $_APP_CHECK_TOKEN_AUTO_REFRESH ]]; then\\n    _PLIST_ENTRY_KEYS+=('FirebaseAppCheckTokenAutoRefreshEnabled')\\n    _PLIST_ENTRY_TYPES+=('bool')\\n    _PLIST_ENTRY_VALUES+=('$(jsonBoolToYesNo '$_APP_CHECK_TOKEN_AUTO_REFRESH')')\\n  fi\\n\\n  # config.crashlytics_disable_auto_disabler - undocumented for now - mainly for debugging, document if becomes useful\\n  _CRASHLYTICS_AUTO_DISABLE_ENABLED=$(getFirebaseJsonKeyValue '$_JSON_OUTPUT_RAW' 'crashlytics_disable_auto_disabler')\\n  if [[ $_CRASHLYTICS_AUTO_DISABLE_ENABLED == 'true' ]]; then\\n    echo 'Disabled Crashlytics auto disabler.' # do nothing\\n  else\\n    _PLIST_ENTRY_KEYS+=('FirebaseCrashlyticsCollectionEnabled')\\n    _PLIST_ENTRY_TYPES+=('bool')\\n    _PLIST_ENTRY_VALUES+=('NO')\\n  fi\\nelse\\n  _PLIST_ENTRY_KEYS+=('firebase_json_raw')\\n  _PLIST_ENTRY_TYPES+=('string')\\n  _PLIST_ENTRY_VALUES+=('$_JSON_OUTPUT_BASE64')\\n  echo 'warning:   A firebase.json file was not found, whilst this file is optional it is recommended to include it to configure firebase services in React Native Firebase.'\\nfi;\\n\\necho 'info: 2) Injecting Info.plist entries: '\\n\\n# Log out the keys we're adding\\nfor i in '${!_PLIST_ENTRY_KEYS[@]}'; do\\n  echo '    ->  $i) ${_PLIST_ENTRY_KEYS[$i]}' '${_PLIST_ENTRY_TYPES[$i]}' '${_PLIST_ENTRY_VALUES[$i]}'\\ndone\\n\\nfor plist in '${_TARGET_PLIST}' '${_DSYM_PLIST}' ; do\\n  if [[ -f '${plist}' ]]; then\\n\\n    # paths with spaces break the call to setPlistValue. temporarily modify\\n    # the shell internal field separator variable (IFS), which normally\\n    # includes spaces, to consist only of line breaks\\n    oldifs=$IFS\\n    IFS='\\n'\\n\\n    for i in '${!_PLIST_ENTRY_KEYS[@]}'; do\\n      setPlistValue '${_PLIST_ENTRY_KEYS[$i]}' '${_PLIST_ENTRY_TYPES[$i]}' '${_PLIST_ENTRY_VALUES[$i]}' '${plist}'\\n    done\\n\\n    # restore the original internal field separator value\\n    IFS=$oldifs\\n  else\\n    echo 'warning:   A Info.plist build output file was not found (${plist})'\\n  fi\\ndone\\n\\necho 'info: <- RNFB build script finished'\\n\"",
    files: [],
    name: '"[CP-User] [RNFB] Core Configuration"',
  };

  let clone = PBXShellScriptBuildPhase["800E24972A6A228C8D4807E9"];

  clone.inputPaths = [
    '"${PODS_ROOT}/Target Support Files/Pods-' +
      appTitle +
      "/Pods-" +
      appTitle +
      '-resources.sh"',
    '"${PODS_CONFIGURATION_BUILD_DIR}/EXConstants/EXConstants.bundle"',
    '"${PODS_CONFIGURATION_BUILD_DIR}/EXUpdates/EXUpdates.bundle"',
    '"${PODS_ROOT}/GoogleMaps/Maps/Frameworks/GoogleMaps.framework/Resources/GoogleMaps.bundle"',
    '"${PODS_CONFIGURATION_BUILD_DIR}/React-Core/AccessibilityResources.bundle"',
    '"${PODS_CONFIGURATION_BUILD_DIR}/expo-dev-launcher/EXDevLauncher.bundle"',
    '"${PODS_CONFIGURATION_BUILD_DIR}/expo-dev-menu/EXDevMenu.bundle"',
  ];

  clone.outputPaths = [
    '"${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/EXConstants.bundle"',
    '"${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/EXUpdates.bundle"',
    '"${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/GoogleMaps.bundle"',
    '"${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/AccessibilityResources.bundle"',
    '"${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/EXDevLauncher.bundle"',
    '"${TARGET_BUILD_DIR}/${UNLOCALIZED_RESOURCES_FOLDER_PATH}/EXDevMenu.bundle"',
  ];

  PBXShellScriptBuildPhase["800E24972A6A228C8D4807E9"] = clone;

  clone = PBXShellScriptBuildPhase["00DD1BFF1BD5951E006B06BC"];

  clone.shellScript =
    "\"export NODE_ BINARY=node\nexport PROJECT_ROOT='$PROJECT_DIR'/..\n node --print `require('path').join(require('path').dirname(require.resolve('react-native/package.json')), 'scripts', 'react-native-xcode.sh')`\"";

  PBXShellScriptBuildPhase["00DD1BFF1BD5951E006B06BC"] = clone;

  clone = PBXShellScriptBuildPhase["FD10A7F022414F080027D42C"];

  clone.shellScript =
    "\"export RCT_METRO_PORT='${RCT_METRO_PORT:=8081}'\\necho 'export RCT_METRO_PORT=${RCT_METRO_PORT}' > `node --print 'require('path').dirname(require.resolve('react-native/package.json')) + '/scripts/.packager.env'`\\nif [ -z '${RCT_NO_LAUNCH_PACKAGER+xxx}' ] ; then\\n  if nc -w 5 -z localhost ${RCT_METRO_PORT} ; then\\n    if ! curl -s 'http://localhost:${RCT_METRO_PORT}/status' | grep -q 'packager-status:running' ; then\\n      echo 'Port ${RCT_METRO_PORT} already in use, packager is either not running or not running correctly'\\n      exit 2\\n    fi\\n  else\\n    open `node --print 'require('path').dirname(require.resolve('react-native/package.json')) + '/scripts/launchPackager.command'` || echo 'Can not start packager automatically' \\nfi\\nfi\"";

  PBXShellScriptBuildPhase["FD10A7F022414F080027D42C"] = clone;
}

function insertPBXSourcesBuildPhase(PBXSourcesBuildPhase: any) {
  //adding
  PBXSourcesBuildPhase.D5FE499D29753A460022AAB4 = {
    isa: "PBXSourcesBuildPhase",
    buildActionMask: "2147483647",
    files: [
      {
        value: "D5FE49A929753A460022AAB4",
        comment: "NotificationViewController.m in Sources",
      },
    ],
    runOnlyForDeploymentPostprocessing: "0",
  };
  PBXSourcesBuildPhase.D5FE498C297539790022AAB4 = {
    isa: "PBXSourcesBuildPhase",
    buildActionMask: "2147483647",
    files: [
      {
        value: "D5FE4994297539790022AAB4",
        comment: "NotificationService.m in Sources",
      },
    ],
    runOnlyForDeploymentPostprocessing: "0",
  };
}

function insertPBXTargetDependency(PBXTargetDependency: any) {
  PBXTargetDependency.D5FE4997297539790022AAB4 = {
    isa: "PBXTargetDependency",
    target: "D5FE498F297539790022AAB4",
    targetProxy: "D5FE4996297539790022AAB4",
  };
  PBXTargetDependency.D5FE49AF29753A460022AAB4 = {
    isa: "PBXTargetDependency",
    target: "D5FE49A029753A460022AAB4",
    targetProxy: "D5FE49AE29753A460022AAB4",
  };
}

function insertPBXVariantGroup(PBXVariantGroup: any) {
  PBXVariantGroup.D5FE49AA29753A460022AAB4 = {
    isa: "PBXVariantGroup",
    name: "MainInterface.storyboard",
    children: [{value: "D5FE49AB29753A460022AAB4", comment: "Base"}],
    sourceTree: '"<group>"',
  };
}

function insertXCBuildConfiguration(
  XCBuildConfiguration: any,
  appTitle: string,
) {
  // adding

  XCBuildConfiguration.D5FE499A297539790022AAB4 = {
    isa: "XCBuildConfiguration",
    buildSettings: {
      CODE_SIGN_ENTITLEMENTS:
        "InsiderNotificationService/InsiderNotificationService.entitlements",
      MARKETING_VERSION: "1.0",
      DEVELOPMENT_TEAM: "3C8L4YL3S8",
      CURRENT_PROJECT_VERSION: "1",
      PRODUCT_BUNDLE_IDENTIFIER: "com.shopraha.dev.InsiderNotificationService",
      CLANG_CXX_LANGUAGE_STANDARD: '"gnu++17"',
      INFOPLIST_KEY_CFBundleDisplayName: "InsiderNotificationService",
      MTL_ENABLE_DEBUG_INFO: "INCLUDE_SOURCE",
      MTL_FAST_MATH: "YES",
      DEBUG_INFORMATION_FORMAT: '"dwarf"',
      GCC_C_LANGUAGE_STANDARD: "gnu11",
      CODE_SIGN_STYLE: "Automatic",
      TARGETED_DEVICE_FAMILY: '"1,2"',
      CLANG_ANALYZER_NUMBER_OBJECT_CONVERSION: "YES_AGGRESSIVE",
      LD_RUNPATH_SEARCH_PATHS:
        '"$(inherited) @executable_path/Frameworks @executable_path/../../Frameworks"',
      CLANG_WARN_DOCUMENTATION_COMMENTS: "YES",
      CLANG_WARN_UNGUARDED_AVAILABILITY: "YES_AGGRESSIVE",
      IPHONEOS_DEPLOYMENT_TARGET: "13.0",
      PRODUCT_NAME: '"$(TARGET_NAME)"',
      INFOPLIST_KEY_NSHumanReadableCopyright: '""',
      CLANG_ANALYZER_NONNULL: "YES",
      CLANG_WARN_QUOTED_INCLUDE_IN_FRAMEWORK_HEADER: '"$(inherited)"',
      SKIP_INSTALL: "YES",
      CLANG_ENABLE_OBJC_WEAK: "YES",
      SWIFT_EMIT_LOC_STRINGS: "YES",
      INFOPLIST_FILE: "InsiderNotificationService/Info.plist",
      GENERATE_INFOPLIST_FILE: "YES",
    },
    name: "Debug",
  };
  XCBuildConfiguration.D5FE49B329753A460022AAB4 = {
    isa: "XCBuildConfiguration",
    buildSettings: {
      CODE_SIGN_ENTITLEMENTS:
        "InsiderNotificationContent/InsiderNotificationContent.entitlements",
      MARKETING_VERSION: "1.0",
      DEVELOPMENT_TEAM: "3C8L4YL3S8",
      CURRENT_PROJECT_VERSION: "1",
      PRODUCT_BUNDLE_IDENTIFIER: "com.shopraha.dev.InsiderNotificationContent",
      CLANG_CXX_LANGUAGE_STANDARD: '"gnu++17"',
      INFOPLIST_KEY_CFBundleDisplayName: "InsiderNotificationContent",
      MTL_FAST_MATH: "YES",
      DEBUG_INFORMATION_FORMAT: '"dwarf-with-dsym"',
      GCC_C_LANGUAGE_STANDARD: "gnu11",
      CODE_SIGN_STYLE: "Automatic",
      TARGETED_DEVICE_FAMILY: '"1,2"',
      CLANG_ANALYZER_NUMBER_OBJECT_CONVERSION: "YES_AGGRESSIVE",
      COPY_PHASE_STRIP: "NO",
      LD_RUNPATH_SEARCH_PATHS:
        '"$(inherited) @executable_path/Frameworks @executable_path/../../Frameworks"',
      CLANG_WARN_DOCUMENTATION_COMMENTS: "YES",
      CLANG_WARN_UNGUARDED_AVAILABILITY: "YES_AGGRESSIVE",
      IPHONEOS_DEPLOYMENT_TARGET: "13.0",
      PRODUCT_NAME: '"$(TARGET_NAME)"',
      INFOPLIST_KEY_NSHumanReadableCopyright: '""',
      CLANG_ANALYZER_NONNULL: "YES",
      CLANG_WARN_QUOTED_INCLUDE_IN_FRAMEWORK_HEADER: '"$(inherited)"',
      SKIP_INSTALL: "YES",
      CLANG_ENABLE_OBJC_WEAK: "YES",
      SWIFT_EMIT_LOC_STRINGS: "YES",
      INFOPLIST_FILE: "InsiderNotificationContent/Info.plist",
      GENERATE_INFOPLIST_FILE: "YES",
    },
    name: "Release",
  };
  XCBuildConfiguration.D5FE49B229753A460022AAB4 = {
    isa: "XCBuildConfiguration",
    buildSettings: {
      CODE_SIGN_ENTITLEMENTS:
        "InsiderNotificationContent/InsiderNotificationContent.entitlements",
      MARKETING_VERSION: "1.0",
      DEVELOPMENT_TEAM: "3C8L4YL3S8",
      CURRENT_PROJECT_VERSION: "1",
      PRODUCT_BUNDLE_IDENTIFIER: "com.shopraha.dev.InsiderNotificationContent",
      CLANG_CXX_LANGUAGE_STANDARD: '"gnu++17"',
      INFOPLIST_KEY_CFBundleDisplayName: "InsiderNotificationContent",
      MTL_ENABLE_DEBUG_INFO: "INCLUDE_SOURCE",
      MTL_FAST_MATH: "YES",
      DEBUG_INFORMATION_FORMAT: '"dwarf"',
      GCC_C_LANGUAGE_STANDARD: '"gnu11"',
      CODE_SIGN_STYLE: "Automatic",
      TARGETED_DEVICE_FAMILY: '"1,2"',
      CLANG_ANALYZER_NUMBER_OBJECT_CONVERSION: "YES_AGGRESSIVE",
      LD_RUNPATH_SEARCH_PATHS:
        '"$(inherited) @executable_path/Frameworks @executable_path/../../Framework"',
      CLANG_WARN_DOCUMENTATION_COMMENTS: "YES",
      CLANG_WARN_UNGUARDED_AVAILABILITY: "YES_AGGRESSIVE",
      IPHONEOS_DEPLOYMENT_TARGET: "13.0",
      PRODUCT_NAME: '"$(TARGET_NAME)"',
      INFOPLIST_KEY_NSHumanReadableCopyright: '""',
      CLANG_ANALYZER_NONNULL: "YES",
      CLANG_WARN_QUOTED_INCLUDE_IN_FRAMEWORK_HEADER: '"$(inherited)"',
      SKIP_INSTALL: "YES",
      CLANG_ENABLE_OBJC_WEAK: "YES",
      SWIFT_EMIT_LOC_STRINGS: "YES",
      INFOPLIST_FILE: "InsiderNotificationContent/Info.plist",
      GENERATE_INFOPLIST_FILE: "YES",
    },
    name: "Debug",
  };
  XCBuildConfiguration.D5FE499B297539790022AAB4 = {
    isa: "XCBuildConfiguration",
    buildSettings: {
      CODE_SIGN_ENTITLEMENTS:
        "InsiderNotificationService/InsiderNotificationService.entitlements",
      MARKETING_VERSION: "1.0",
      DEVELOPMENT_TEAM: "3C8L4YL3S8",
      CURRENT_PROJECT_VERSION: "1",
      PRODUCT_BUNDLE_IDENTIFIER: "com.shopraha.dev.InsiderNotificationService",
      CLANG_CXX_LANGUAGE_STANDARD: '"gnu++17"',
      INFOPLIST_KEY_CFBundleDisplayName: "InsiderNotificationService",
      MTL_FAST_MATH: "YES",
      DEBUG_INFORMATION_FORMAT: '"dwarf-with-dsym"',
      GCC_C_LANGUAGE_STANDARD: "gnu11",
      CODE_SIGN_STYLE: "Automatic",
      TARGETED_DEVICE_FAMILY: '"1,2"',
      CLANG_ANALYZER_NUMBER_OBJECT_CONVERSION: "YES_AGGRESSIVE",
      COPY_PHASE_STRIP: "NO",
      LD_RUNPATH_SEARCH_PATHS:
        '"$(inherited) @executable_path/Frameworks @executable_path/../../Frameworks"',
      CLANG_WARN_DOCUMENTATION_COMMENTS: "YES",
      CLANG_WARN_UNGUARDED_AVAILABILITY: "YES_AGGRESSIVE",
      IPHONEOS_DEPLOYMENT_TARGET: "13.0",
      PRODUCT_NAME: '"$(TARGET_NAME)"',
      INFOPLIST_KEY_NSHumanReadableCopyright: '""',
      CLANG_ANALYZER_NONNULL: "YES",
      CLANG_WARN_QUOTED_INCLUDE_IN_FRAMEWORK_HEADER: '"$(inherited)"',
      SKIP_INSTALL: "YES",
      CLANG_ENABLE_OBJC_WEAK: "YES",
      SWIFT_EMIT_LOC_STRINGS: "YES",
      INFOPLIST_FILE: "InsiderNotificationService/Info.plist",
      GENERATE_INFOPLIST_FILE: "YES",
    },
    name: "Release",
  };

  //modifying but overriding (hard to just modifying)
  XCBuildConfiguration["13B07F951A680F5B00A75B9A"] = {
    baseConfigurationReference: "7A4D352CD337FB3A3BF06240",
    isa: "XCBuildConfiguration",
    buildSettings: {
      LD_RUNPATH_SEARCH_PATHS: '"$(inherited) @executable_path/Frameworks"',
      CURRENT_PROJECT_VERSION: "1",
      DEVELOPMENT_TEAM: "3C8L4YL3S8",
      TARGETED_DEVICE_FAMILY: '"1,2"',
      CLANG_ENABLE_MODULES: "YES",
      INFOPLIST_FILE: `${appTitle}/Info.plist`,
      VERSIONING_SYSTEM: "apple-generic",
      // SWIFT_OBJC_BRIDGING_HEADER: `${appTitle}/${appTitle}-Bridging-Header.h`,
      CODE_SIGN_ENTITLEMENTS: `${appTitle}/${appTitle}.entitlements`,
      PRODUCT_NAME: `\"${appTitle}\"`,
      SWIFT_VERSION: "5.5.2",
      OTHER_LDFLAGS: ['"$(inherited)"', '"-ObjC"', '"-lc++"'],
      ASSETCATALOG_COMPILER_APPICON_NAME: "AppIcon",
      IPHONEOS_DEPLOYMENT_TARGET: "13.0",
      PRODUCT_BUNDLE_IDENTIFIER: "com.shopraha.dev",
    },
    name: "Release",
  };

  XCBuildConfiguration["13B07F941A680F5B00A75B9A"] = {
    baseConfigurationReference: "6C2E3173556A471DD304B334",
    isa: "XCBuildConfiguration",
    buildSettings: {
      LD_RUNPATH_SEARCH_PATHS: '"$(inherited) @executable_path/Frameworks"',
      CURRENT_PROJECT_VERSION: "1",
      DEVELOPMENT_TEAM: "3C8L4YL3S8",
      ENABLE_BITCODE: "NO",
      TARGETED_DEVICE_FAMILY: '"1,2"',
      CLANG_ENABLE_MODULES: "YES",
      INFOPLIST_FILE: `${appTitle}/Info.plist`,
      VERSIONING_SYSTEM: "apple-generic",
      IPHONEOS_DEPLOYMENT_TARGET: "13.0",
      // SWIFT_OBJC_BRIDGING_HEADER: `${appTitle}/${appTitle}-Bridging-Header.h`,
      SWIFT_OPTIMIZATION_LEVEL: '"-Onone"',
      CODE_SIGN_ENTITLEMENTS: `${appTitle}/${appTitle}.entitlements`,
      PRODUCT_NAME: `"${appTitle}"`,
      SWIFT_VERSION: "5.5.2",
      ASSETCATALOG_COMPILER_APPICON_NAME: "AppIcon",
      PRODUCT_BUNDLE_IDENTIFIER: "com.shopraha.dev",
      OTHER_LDFLAGS: ['"$(inherited)"', '"-ObjC"', '"-lc++"'],
      GCC_PREPROCESSOR_DEFINITIONS: [
        '"$(inherited)"',
        '"FB_SONARKIT_ENABLED=1"',
      ],
    },
    name: "Debug",
  };

  XCBuildConfiguration["83CBBA201A601CBA00E9B192"] = {
    isa: "XCBuildConfiguration",
    buildSettings: {
      CLANG_WARN_SUSPICIOUS_MOVE: "YES",
      GCC_WARN_UNDECLARED_SELECTOR: "YES",
      CLANG_ENABLE_OBJC_ARC: "YES",
      CLANG_WARN_DIRECT_OBJC_ISA_USAGE: "YES_ERROR",
      CLANG_WARN_OBJC_IMPLICIT_RETAIN_SELF: "YES",
      CLANG_WARN__DUPLICATE_METHOD_MATCH: "YES",
      '"EXCLUDED_ARCHS[sdk=iphonesimulator*]"': "i386",
      CLANG_WARN_INFINITE_RECURSION: "YES",
      '"CODE_SIGN_IDENTITY[sdk=iphoneos*]"': '"iPhone Developer"',
      SDKROOT: "iphoneos",
      CLANG_CXX_LANGUAGE_STANDARD: '"gnu++0x"',
      ENABLE_TESTABILITY: "YES",
      CLANG_WARN_BOOL_CONVERSION: "YES",
      CLANG_WARN_UNREACHABLE_CODE: "YES",
      ENABLE_STRICT_OBJC_MSGSEND: "YES",
      GCC_SYMBOLS_PRIVATE_EXTERN: "NO",
      CLANG_WARN_BLOCK_CAPTURE_AUTORELEASING: "YES",
      CLANG_WARN_STRICT_PROTOTYPES: "YES",
      CLANG_WARN_ENUM_CONVERSION: "YES",
      GCC_PREPROCESSOR_DEFINITIONS: ['"DEBUG=1"', '"$(inherited)"'],
      GCC_WARN_64_TO_32_BIT_CONVERSION: "YES",
      CLANG_WARN_EMPTY_BODY: "YES",
      GCC_WARN_UNINITIALIZED_AUTOS: "YES_AGGRESSIVE",
      GCC_WARN_ABOUT_RETURN_TYPE: "YES_ERROR",
      CLANG_WARN_COMMA: "YES",
      GCC_DYNAMIC_NO_PIC: "NO",
      GCC_C_LANGUAGE_STANDARD: "gnu99",
      GCC_WARN_UNUSED_VARIABLE: "YES",
      CLANG_WARN_RANGE_LOOP_ANALYSIS: "YES",
      CLANG_ENABLE_MODULES: "YES",
      GCC_NO_COMMON_BLOCKS: "YES",
      CLANG_WARN_INT_CONVERSION: "YES",
      ALWAYS_SEARCH_USER_PATHS: "NO",
      CLANG_WARN_OBJC_ROOT_CLASS: "YES_ERROR",
      COPY_PHASE_STRIP: "NO",
      CLANG_WARN_CONSTANT_CONVERSION: "YES",
      CLANG_WARN_DEPRECATED_OBJC_IMPLEMENTATIONS: "YES",
      GCC_OPTIMIZATION_LEVEL: "0",
      LD_RUNPATH_SEARCH_PATHS: '"/usr/lib/swift $(inherited)"',
      MTL_ENABLE_DEBUG_INFO: "YES",
      ONLY_ACTIVE_ARCH: "YES",
      CLANG_ANALYZER_LOCALIZABILITY_NONLOCALIZED: "YES",
      CLANG_WARN_NON_LITERAL_NULL_CONVERSION: "YES",
      GCC_WARN_UNUSED_FUNCTION: "YES",
      LIBRARY_SEARCH_PATHS: '"$(inherited)"',
      CLANG_WARN_OBJC_LITERAL_CONVERSION: "YES",
      IPHONEOS_DEPLOYMENT_TARGET: "13.0",
      CLANG_CXX_LIBRARY: '"libc++"',
    },
    name: "Debug",
  };
  XCBuildConfiguration["83CBBA211A601CBA00E9B192"] = {
    isa: "XCBuildConfiguration",
    buildSettings: {
      CLANG_WARN_SUSPICIOUS_MOVE: "YES",
      GCC_WARN_UNDECLARED_SELECTOR: "YES",
      CLANG_ENABLE_OBJC_ARC: "YES",
      CLANG_WARN_DIRECT_OBJC_ISA_USAGE: "YES_ERROR",
      ENABLE_NS_ASSERTIONS: "NO",
      CLANG_WARN__DUPLICATE_METHOD_MATCH: "YES",
      '"EXCLUDED_ARCHS[sdk=iphonesimulator*]"': "i386",
      CLANG_WARN_OBJC_IMPLICIT_RETAIN_SELF: "YES",
      CLANG_WARN_INFINITE_RECURSION: "YES",
      '"CODE_SIGN_IDENTITY[sdk=iphoneos*]"': '"iPhone Developer"',
      SDKROOT: "iphoneos",
      CLANG_CXX_LANGUAGE_STANDARD: '"gnu++0x"',
      CLANG_WARN_BOOL_CONVERSION: "YES",
      CLANG_WARN_UNREACHABLE_CODE: "YES",
      ENABLE_STRICT_OBJC_MSGSEND: "YES",
      CLANG_WARN_BLOCK_CAPTURE_AUTORELEASING: "YES",
      CLANG_WARN_STRICT_PROTOTYPES: "YES",
      CLANG_WARN_ENUM_CONVERSION: "YES",
      GCC_WARN_64_TO_32_BIT_CONVERSION: "YES",
      CLANG_WARN_EMPTY_BODY: "YES",
      GCC_WARN_UNINITIALIZED_AUTOS: "YES_AGGRESSIVE",
      GCC_WARN_ABOUT_RETURN_TYPE: "YES_ERROR",
      CLANG_WARN_COMMA: "YES",
      GCC_C_LANGUAGE_STANDARD: "gnu99",
      GCC_WARN_UNUSED_VARIABLE: "YES",
      CLANG_WARN_RANGE_LOOP_ANALYSIS: "YES",
      CLANG_ENABLE_MODULES: "YES",
      GCC_NO_COMMON_BLOCKS: "YES",
      CLANG_WARN_INT_CONVERSION: "YES",
      ALWAYS_SEARCH_USER_PATHS: "NO",
      CLANG_WARN_OBJC_ROOT_CLASS: "YES_ERROR",
      COPY_PHASE_STRIP: "YES",
      CLANG_WARN_CONSTANT_CONVERSION: "YES",
      CLANG_WARN_DEPRECATED_OBJC_IMPLEMENTATIONS: "YES",
      LD_RUNPATH_SEARCH_PATHS: '"/usr/lib/swift $(inherited)"',
      MTL_ENABLE_DEBUG_INFO: "NO",
      CLANG_ANALYZER_LOCALIZABILITY_NONLOCALIZED: "YES",
      CLANG_WARN_NON_LITERAL_NULL_CONVERSION: "YES",
      VALIDATE_PRODUCT: "YES",
      GCC_WARN_UNUSED_FUNCTION: "YES",
      LIBRARY_SEARCH_PATHS: '"$(inherited)"',
      CLANG_WARN_OBJC_LITERAL_CONVERSION: "YES",
      IPHONEOS_DEPLOYMENT_TARGET: "13.0",
      CLANG_CXX_LIBRARY: '"libc++"',
    },
    name: "Release",
  };
}

function insertXCConfigurationList(XCConfigurationList: any) {
  // adding

  XCConfigurationList.D5FE499C297539790022AAB4 = {
    isa: "XCConfigurationList",
    defaultConfigurationIsVisible: "0",
    defaultConfigurationName: "Release",
    buildConfigurations: [
      {value: "D5FE499A297539790022AAB4", comment: "Debug"},
      {value: "D5FE499B297539790022AAB4", comment: "Release"},
    ],
  };
  XCConfigurationList.D5FE49B129753A460022AAB4 = {
    isa: "XCConfigurationList",
    defaultConfigurationIsVisible: "0",
    defaultConfigurationName: "Release",
    buildConfigurations: [
      {value: "D5FE49B229753A460022AAB4", comment: "Debug"},
      {value: "D5FE49B329753A460022AAB4", comment: "Release"},
    ],
  };
}

export const withUseInsiderIOS: ConfigPlugin<string> = (
  config,
  appTitle: string,
) => {
  config = withXcodeProject(config, async (config) => {
    const project = config.modResults.hash.project;

    insertPBXBuildFile(project.objects.PBXBuildFile);

    insertPBXFileReference(project.objects.PBXFileReference, appTitle);

    if (!project.objects.PBXContainerItemProxy)
      project.objects.PBXContainerItemProxy = {};

    insertPBXContainerItemProxy(project.objects.PBXContainerItemProxy);

    if (!project.objects.PBXCopyFilesBuildPhase)
      project.objects.PBXCopyFilesBuildPhase = {};

    insertPBXCopyFilesBuildPhase(project.objects.PBXCopyFilesBuildPhase);

    insertPBXFrameworksBuildPhase(project.objects.PBXFrameworksBuildPhase);

    insertPBXGroup(project.objects.PBXGroup, appTitle);

    insertPBXNativeTarget(project.objects.PBXNativeTarget);

    insertPBXProject(project.objects.PBXProject);

    insertPBXResourcesBuildPhase(project.objects.PBXResourcesBuildPhase);

    insertPBXShellScriptBuildPhase(
      project.objects.PBXShellScriptBuildPhase,
      appTitle,
    );

    insertPBXSourcesBuildPhase(project.objects.PBXSourcesBuildPhase);

    insertXCBuildConfiguration(project.objects.XCBuildConfiguration, appTitle);

    if (!project.objects.PBXTargetDependency)
      project.objects.PBXTargetDependency = {};

    insertPBXTargetDependency(project.objects.PBXTargetDependency);

    if (!project.objects.PBXVariantGroup) project.objects.PBXVariantGroup = {};

    insertPBXVariantGroup(project.objects.PBXVariantGroup);

    insertXCConfigurationList(project.objects.XCConfigurationList);

    return config;
  });

  // creating folder+file for step1
  config = withDangerousMod(config, [
    "ios",
    async (config) => {
      const iosFolder = config.modRequest.platformProjectRoot;
      const notificationServiceFolder =
        iosFolder + "/InsiderNotificationService";

      // // creation of the folder InsiderNotificationService
      await fs.promises.mkdir(notificationServiceFolder);

      //creation of files

      // 1. Info.plist
      await fs.promises.writeFile(
        notificationServiceFolder + "/Info.plist",
        `<?xml version="1.0" encoding="UTF-8"?>
          <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
          <plist version="1.0">
          <dict>
            <key>CFBundleDevelopmentRegion</key>
            <string>$(DEVELOPMENT_LANGUAGE)</string>
            <key>CFBundleDisplayName</key>
            <string>InsiderNotificationService</string>
            <key>CFBundleExecutable</key>
            <string>$(EXECUTABLE_NAME)</string>
            <key>CFBundleIdentifier</key>
            <string>$(PRODUCT_BUNDLE_IDENTIFIER)</string>
            <key>CFBundleInfoDictionaryVersion</key>
            <string>6.0</string>
            <key>CFBundleName</key>
            <string>$(PRODUCT_NAME)</string>
            <key>CFBundlePackageType</key>
            <string>$(PRODUCT_BUNDLE_PACKAGE_TYPE)</string>
            <key>CFBundleShortVersionString</key>
            <string>1.0</string>
            <key>CFBundleVersion</key>
            <string>1</string>
            <key>NSExtension</key>
            <dict>
              <key>NSExtensionPointIdentifier</key>
              <string>com.apple.usernotifications.service</string>
              <key>NSExtensionPrincipalClass</key>
              <string>NotificationService</string>
            </dict>
          </dict>
          </plist>
          `,
      );

      // 2. InsiderNotificationService.entitlements
      await fs.promises.writeFile(
        notificationServiceFolder + "/InsiderNotificationService.entitlements",
        `<?xml version="1.0" encoding="UTF-8"?>
                     <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
                     <plist version="1.0">
                     <dict>
                     <key>com.apple.security.application-groups</key>
                     <array>
                     <string>group.shopraha.mobilesdk</string>
                     </array>
                     </dict>
                     </plist>`,
      );

      // 3. NotificationService.h
      await fs.promises.writeFile(
        notificationServiceFolder + "/NotificationService.h",
        `//
          //  NotificationService.h
          //  InsiderNotificationService
          //
          //  Created by Insider on 6.04.2020.
          //

          #import <UserNotifications/UserNotifications.h>

          @interface NotificationService : UNNotificationServiceExtension

          @end`,
      );

      // 4. NotificationService.m
      await fs.promises.writeFile(
        notificationServiceFolder + "/NotificationService.m",
        `#import "NotificationService.h"
          #import <InsiderMobileAdvancedNotification/InsiderPushNotification.h>

          @interface NotificationService ()

          @property (nonatomic, strong) void (^contentHandler)(UNNotificationContent *contentToDeliver);
          @property (nonatomic, strong) UNMutableNotificationContent *bestAttemptContent;

          @end

          // FIXME: Please change with your app group.
          static NSString *APP_GROUP = @"group.shopraha.mobilesdk";

          @implementation NotificationService

          -(void)didReceiveNotificationRequest:(UNNotificationRequest *)request withContentHandler:(void (^)(UNNotificationContent * _Nonnull))contentHandler {
              self.contentHandler = contentHandler;
              self.bestAttemptContent = [request.content mutableCopy];

              // MARK: You can customize these.
              NSString *nextButtonText = @">>";
              NSString *goToAppText = @"Launch App";

              [InsiderPushNotification showInsiderRichPush:request appGroup:APP_GROUP nextButtonText:nextButtonText goToAppText:goToAppText success:^(UNNotificationAttachment *attachment) {
                  if (attachment) {
                      self.bestAttemptContent.attachments = [NSArray arrayWithObject:attachment];
                  }

                  self.contentHandler(self.bestAttemptContent);
              }];
          }

          -(void)serviceExtensionTimeWillExpire {
              self.contentHandler(self.bestAttemptContent);
          }

          @end`,
      );

      return config;
    },
  ]);

  // creating folder+file for step2
  config = withDangerousMod(config, [
    "ios",
    async (config) => {
      const iosFolder = config.modRequest.platformProjectRoot;
      const notificationContentFolder =
        iosFolder + "/InsiderNotificationContent";

      const baselProjFolder = notificationContentFolder + "/Base.lproj";

      // // creation of the folder InsiderNotificationService
      await fs.promises.mkdir(notificationContentFolder);

      //creation of files

      // 1. Info.plist
      await fs.promises.writeFile(
        notificationContentFolder + "/Info.plist",
        `<?xml version="1.0" encoding="UTF-8"?>
          <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
          <plist version="1.0">
          <dict>
            <key>CFBundleDevelopmentRegion</key>
            <string>$(DEVELOPMENT_LANGUAGE)</string>
            <key>CFBundleDisplayName</key>
            <string>InsiderNotificationContent</string>
            <key>CFBundleExecutable</key>
            <string>$(EXECUTABLE_NAME)</string>
            <key>CFBundleIdentifier</key>
            <string>$(PRODUCT_BUNDLE_IDENTIFIER)</string>
            <key>CFBundleInfoDictionaryVersion</key>
            <string>6.0</string>
            <key>CFBundleName</key>
            <string>$(PRODUCT_NAME)</string>
            <key>CFBundlePackageType</key>
            <string>$(PRODUCT_BUNDLE_PACKAGE_TYPE)</string>
            <key>CFBundleShortVersionString</key>
            <string>1.0</string>
            <key>CFBundleVersion</key>
            <string>1</string>
            <key>NSExtension</key>
            <dict>
              <key>NSExtensionAttributes</key>
              <dict>
                <key>UNNotificationExtensionCategory</key>
                <string>insider_int_push</string>
                <key>UNNotificationExtensionDefaultContentHidden</key>
                <string>YES</string>
                <key>UNNotificationExtensionInitialContentSizeRatio</key>
                <real>0.5</real>
              </dict>
              <key>NSExtensionMainStoryboard</key>
              <string>InsiderInterface</string>
              <key>NSExtensionPointIdentifier</key>
              <string>com.apple.usernotifications.content-extension</string>
            </dict>
          </dict>
          </plist>
          `,
      );

      // 2. InsiderNotificationService.entitlements
      await fs.promises.writeFile(
        notificationContentFolder + "/InsiderNotificationContent.entitlements",
        `<?xml version="1.0" encoding="UTF-8"?>
          <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
          <plist version="1.0">
          <dict>
            <key>com.apple.security.application-groups</key>
            <array>
              <string>group.shopraha.mobilesdk</string>
            </array>
          </dict>
          </plist>`,
      );

      // 3. NotificationViewController.h
      await fs.promises.writeFile(
        notificationContentFolder + "/NotificationViewController.h",
        `//
          //  NotificationViewController.h
          //  InsiderNotificationContent
          //
          //  Created by Insider on 6.04.2020.
          //

          #import <UIKit/UIKit.h>

          @interface NotificationViewController : UIViewController

          @end`,
      );

      // 4. NotificationViewController.m
      await fs.promises.writeFile(
        notificationContentFolder + "/NotificationViewController.m",
        `#import "NotificationViewController.h"
          #import <UserNotificationsUI/UserNotificationsUI.h>
          #import <InsiderMobileAdvancedNotification/iCarousel.h>
          #import <InsiderMobileAdvancedNotification/InsiderPushNotification.h>

          @interface NotificationViewController () <UNNotificationContentExtension, iCarouselDelegate, iCarouselDataSource>
          @property (nonatomic, weak) IBOutlet iCarousel *carousel;
          @end

          // FIXME: Please change with your app group.
          static NSString *APP_GROUP = @"group.shopraha.mobilesdk";

          @implementation NotificationViewController

          @synthesize carousel;

          -(void)viewDidLoad {
              [super viewDidLoad];
          }

          -(void)didReceiveNotification:(UNNotification *)notification {
              [InsiderPushNotification interactivePushLoad:APP_GROUP superView:self.view notification:notification];

              carousel.type = iCarouselTypeRotary;
              [carousel reloadData];

              [InsiderPushNotification interactivePushDidReceiveNotification];
          }

          -(NSInteger)numberOfItemsInCarousel:(iCarousel *)carousel {
              return [InsiderPushNotification getNumberOfSlide];
          }

          -(UIView *)carousel:(iCarousel *)carousel viewForItemAtIndex:(NSInteger)index reusingView:(UIView *)view {
              return [InsiderPushNotification getSlide:index reusingView:view superView:self.view];
          }

          -(void)dealloc {
              carousel.delegate = nil;
              carousel.dataSource = nil;
          }

          -(CGFloat)carouselItemWidth:(iCarousel *)carousel {
              return [InsiderPushNotification getItemWidth];
          }

          -(void)didReceiveNotificationResponse:(UNNotificationResponse *)response
                               completionHandler:(void (^)(UNNotificationContentExtensionResponseOption option))completion {
              if ([response.actionIdentifier isEqualToString:@"insider_int_push_next"]){
                  [carousel scrollToItemAtIndex:[InsiderPushNotification didReceiveNotificationResponse:[carousel currentItemIndex]] animated:true];

                  completion(UNNotificationContentExtensionResponseOptionDoNotDismiss);
              } else {
                  [InsiderPushNotification logPlaceholderClick:response];

                  completion(UNNotificationContentExtensionResponseOptionDismissAndForwardAction);
              }
          }

          @end`,
      );

      // Creation folder Base.lproj
      await fs.promises.mkdir(baselProjFolder);

      // Creation files

      // 1 . MainInterface.storyboard
      await fs.promises.writeFile(
        baselProjFolder + "/MainInterface.storyboard",
        `<?xml version="1.0" encoding="UTF-8"?>
          <document type="com.apple.InterfaceBuilder3.CocoaTouch.Storyboard.XIB" version="3.0" toolsVersion="13122.16" targetRuntime="iOS.CocoaTouch" propertyAccessControl="none" useAutolayout="YES" useTraitCollections="YES" useSafeAreas="YES" colorMatched="YES" initialViewController="M4Y-Lb-cyx">
              <dependencies>
                  <plugIn identifier="com.apple.InterfaceBuilder.IBCocoaTouchPlugin" version="13104.12"/>
                  <capability name="Safe area layout guides" minToolsVersion="9.0"/>
                  <capability name="documents saved in the Xcode 8 format" minToolsVersion="8.0"/>
              </dependencies>
              <scenes>
                  <!--Notification View Controller-->
                  <scene sceneID="cwh-vc-ff4">
                      <objects>
                          <viewController id="M4Y-Lb-cyx" userLabel="Notification View Controller" customClass="NotificationViewController" customModuleProvider="" sceneMemberID="viewController">
                              <view key="view" contentMode="scaleToFill" simulatedAppContext="notificationCenter" id="S3S-Oj-5AN">
                                  <rect key="frame" x="0.0" y="0.0" width="320" height="37"/>
                                  <autoresizingMask key="autoresizingMask" widthSizable="YES" heightSizable="YES"/>
                                  <subviews>
                                      <label opaque="NO" clipsSubviews="YES" userInteractionEnabled="NO" contentMode="top" horizontalHuggingPriority="251" verticalHuggingPriority="251" text="Hello World" textAlignment="center" lineBreakMode="tailTruncation" numberOfLines="0" baselineAdjustment="alignBaselines" adjustsFontSizeToFit="NO" preferredMaxLayoutWidth="280" translatesAutoresizingMaskIntoConstraints="NO" id="GcN-lo-r42">
                                          <fontDescription key="fontDescription" type="system" pointSize="17"/>
                                          <color key="textColor" xcode11CocoaTouchSystemColor="labelColor" cocoaTouchSystemColor="darkTextColor"/>
                                          <nil key="highlightedColor"/>
                                      </label>
                                  </subviews>
                                  <color key="backgroundColor" red="0.45882353186607361" green="0.74901962280273438" blue="0.66666668653488159" alpha="1" colorSpace="custom" customColorSpace="sRGB"/>
                                  <constraints>
                                      <constraint firstItem="2BE-c3-nQJ" firstAttribute="bottom" secondItem="GcN-lo-r42" secondAttribute="bottom" constant="8" symbolic="YES" id="0Q0-KW-PJ6"/>
                                      <constraint firstItem="GcN-lo-r42" firstAttribute="leading" secondItem="2BE-c3-nQJ" secondAttribute="leading" constant="20" symbolic="YES" id="6Vq-gs-PHe"/>
                                      <constraint firstItem="2BE-c3-nQJ" firstAttribute="trailing" secondItem="GcN-lo-r42" secondAttribute="trailing" constant="20" symbolic="YES" id="L8K-9R-egU"/>
                                      <constraint firstItem="GcN-lo-r42" firstAttribute="top" secondItem="2BE-c3-nQJ" secondAttribute="top" constant="8" symbolic="YES" id="mYS-Cv-VNx"/>
                                  </constraints>
                                  <viewLayoutGuide key="safeArea" id="2BE-c3-nQJ"/>
                              </view>
                              <extendedEdge key="edgesForExtendedLayout"/>
                              <freeformSimulatedSizeMetrics key="simulatedDestinationMetrics"/>
                              <size key="freeformSize" width="320" height="37"/>
                              <connections>
                                  <outlet property="label" destination="GcN-lo-r42" id="lpW-cU-7IG"/>
                              </connections>
                          </viewController>
                          <placeholder placeholderIdentifier="IBFirstResponder" id="vXp-U4-Rya" userLabel="First Responder" sceneMemberID="firstResponder"/>
                      </objects>
                  </scene>
              </scenes>
          </document>
          `,
      );

      return config;
    },
  ]);

  //Step 3 made with the json file

  //Step 4

  // 1. add to main target background modes and specifications
  config = withXcodeProject(config, async (config) => {
    // Inserting inside infoPlist - Step 4
    if (config.ios?.infoPlist) {
      config.ios.infoPlist.UIBackgroundModes = [
        "fetch",
        "location",
        "remote-notification",
      ];
    }
    return config;
  });

  // 2. adding time sensitivity

  config = withEntitlementsPlist(config, async (config) => {
    //we need to have :

    // <key>com.apple.developer.usernotifications.time-sensitive</key>
    // <true/>

    // @TODO : check results when generated if true appears correctly
    config.modResults["com.apple.developer.usernotifications.time-sensitive"] =
      true;

    // we need to have :

    // <key>com.apple.security.application-groups</key>
    // <array>
    //   <string>group.insider.mobilesdk.InsiderDemo</string>
    // </array>

    config.modResults["com.apple.security.application-groups"] = [
      "group.shopraha.mobilesdk",
    ];

    return config;
  });

  // Step 5

  config = withInfoPlist(config, async (config) => {
    const file = config.modResults;

    file.CFBundleURLTypes?.push({
      // @ts-ignore
      CFBundleTypeRole: "Editor",
      CFBundleURLName: "insider",
      CFBundleURLSchemes: ["insidershoprahauat"], //@FIX : make the partner name dymanic
    });

    // file.CFBundleURLTypes

    return config;
  });

  // Step 6

  config = withDangerousMod(config, [
    "ios",
    async (config) => {
      //pathto podfile
      const pathPodfile = config.modRequest.platformProjectRoot + "/podfile";

      let podfile = fs.readFileSync(pathPodfile, "utf8");

      let resp = mergeContents({
        tag: `insiderexpodemo1`, //@TODO : set with the name of the pg
        src: podfile,
        newSrc: `inherit! :search_paths
          # Pods for InsiderDemo
          pod 'InsiderMobile'`,
        anchor: /use_expo_modules!/,
        offset: 0,
        comment: "#",
      }).contents;

      resp += `
    target 'InsiderNotificationContent' do
    use_frameworks!
    inherit! :search_paths
    # Pods for InsiderNotificationContent
    pod "InsiderMobileAdvancedNotification"
    end
    target 'InsiderNotificationService' do
    use_frameworks!
    inherit! :search_paths
    # Pods for InsiderNotificationService
    pod "InsiderMobileAdvancedNotification"
    end
        `;

      // fs.writeFileSync(pathPodfile, resp);

      // podfile = fs.readFileSync(pathPodfile, "utf8");

      const newContent = mergeContents({
        tag: `insiderexpodemo2`,
        src: resp,
        newSrc: `use_frameworks! :linkage => :static`,
        anchor: `target '${appTitle}' do`,
        offset: 0,
        comment: "#",
      }).contents;

      fs.writeFileSync(pathPodfile, newContent);

      return config;
    },
  ]);

  return config;
};
