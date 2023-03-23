# Reproduction repository for React Native useInsider issue

## Steps to reproduce:

- Clone this repository
- run `yarn` to install dependencies
- run `yarn ios` to run and build the app on iOS (if you have a M1 Mac you might need to run `arch -x86_64 yarn ios`)
- You will see that it works as expected

- run `git checkout with-dev-client` to switch to the branch with the dev client
- run `rm -rf ios android` to remove the native projects
- run `yarn ios` to run and build the app on iOS (if you have a M1 Mac you might need to run `arch -x86_64 yarn ios`)
- You will see that it doesn't work as expected, you will get a blank screen with no errors showing up and the javascript code is not bundling
