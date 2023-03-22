import { ConfigPlugin, createRunOncePlugin } from "@expo/config-plugins";
import { withUseInsiderIOS } from "./withUseInsiderIOS";

const appNameInsider = "insiderexpodemo";

const pkg = require("../../package.json");

const withUseIInsider: ConfigPlugin = (config) => {
  config = withUseInsiderIOS(config, appNameInsider);
  return config;
};

export default createRunOncePlugin(
  withUseIInsider,
  "insider plugin",
  pkg.version
);
