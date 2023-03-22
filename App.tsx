import { StatusBar } from 'expo-status-bar';
// import 'expo-dev-client';
import { StyleSheet, Text, View } from 'react-native';
import RNInsider from 'react-native-insider';
// @ts-ignore
import InsiderCallbackType from "react-native-insider/src/InsiderCallbackType";
import React from 'react';

export default function App() {
  React.useEffect(()=>{
    const appGroup = "group.shopraha.mobilesdk";
  RNInsider.init(
    "shoprahauat",
    appGroup,
    (type: keyof typeof InsiderCallbackType, data: any) => {
      if (!__DEV__) return;
      switch (type) {
        case InsiderCallbackType.NOTIFICATION_OPEN:
          console.log("[INSIDER][NOTIFICATION_OPEN]: ", data);
          break;
        case InsiderCallbackType.INAPP_BUTTON_CLICK:
          console.log("[INSIDER][INAPP_BUTTON_CLICK]: ", data);
          break;
        case InsiderCallbackType.TEMP_STORE_PURCHASE:
          console.log("[INSIDER][TEMP_STORE_PURCHASE]: ", data);
          break;
        case InsiderCallbackType.TEMP_STORE_ADDED_TO_CART:
          console.log("[INSIDER][TEMP_STORE_ADDED_TO_CART]: ", data);

          break;
        case InsiderCallbackType.TEMP_STORE_CUSTOM_ACTION:
          console.log("[INSIDER][TEMP_STORE_CUSTOM_ACTION]: ", data);
          break;
      }
    },
  );

  RNInsider.setActiveForegroundPushView();
  RNInsider.registerWithQuietPermission(true);
  RNInsider.startTrackingGeofence();
  RNInsider.enableIDFACollection(true);
  RNInsider.enableIpCollection(true);
  RNInsider.enableLocationCollection(true);
  RNInsider.enableCarrierCollection(true);
  })
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
