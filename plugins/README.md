# Shop raha expo plugins

This folder contains custom plugins to add native code to our managed expo app.

## Get started:

- Write your plugin in typescript in `plugins/src` folder by creating a new file.
- build with `yarn build:plugin`
- add you built plugin in the plugins array in `app.config.js` (ie: `"./plugins/build/withMyPlugin.js"`)
- check the effect of your plugin by launching `yarn ios` or `yarn android` and check the generated `ios` or `android` folder.

## Documentation to read to create new plugins

https://docs.expo.dev/guides/config-plugins/

It is very useful to see other plugins to understand how to use expo API to modify native files:

- https://github.com/expo/config-plugins/
- https://github.com/expo/expo/blob/master/packages/expo-camera/plugin/src/withCamera.ts
