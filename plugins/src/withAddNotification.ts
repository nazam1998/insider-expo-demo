import { ConfigPlugin, createRunOncePlugin } from "@expo/config-plugins";
import { withAddNotificationExtension } from "./withAddNotificationExtension";

const appName = "expo-notification-demo";

const pkg = require("../../package.json");

const withAddNotification: ConfigPlugin = (config) => {
  config = withAddNotificationExtension(config, {appName});
  return config;
};

export default createRunOncePlugin(
  withAddNotification,
  "expo notification plugin",
  pkg.version
);
