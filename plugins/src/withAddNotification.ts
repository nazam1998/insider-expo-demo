import { ConfigPlugin, createRunOncePlugin } from "@expo/config-plugins";
import { withAddNotificationExtension } from "./withAddNotificationExtension";

const partnerName = "insidershoprahauat";

const pkg = require("../../package.json");

const withAddNotification: ConfigPlugin = (config) => {
  config = withAddNotificationExtension(config, {partnerName});
  return config;
};

export default createRunOncePlugin(
  withAddNotification,
  "expo notification plugin",
  pkg.version
);
