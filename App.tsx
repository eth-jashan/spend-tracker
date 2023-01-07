import React, { useCallback } from 'react';
import NavigationStack from './src/navigations';
import { useFonts } from 'expo-font';
import { View } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    bold: require('./src/assets/fonts/openSans/OpenSans-Bold.ttf'),
    extraBold: require('./src/assets/fonts/openSans/OpenSans-ExtraBold.ttf'),
    light: require('./src/assets/fonts/openSans/OpenSans-Light.ttf'),
    medium: require('./src/assets/fonts/openSans/OpenSans-Medium.ttf'),
    regular: require('./src/assets/fonts/openSans/OpenSans-Regular.ttf'),
    semiBold: require('./src/assets/fonts/openSans/OpenSans-SemiBold.ttf'),
  });
  console.log('font loaded', fontsLoaded);
  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);
  return fontsLoaded && <NavigationStack />;
}
