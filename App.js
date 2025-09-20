import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Header from './src/components/Header';
import { useState, useEffect } from 'react';
import ShopStackNavigator from '../appArteSano/src/navigation/shop/ShopStackNavigation';

SplashScreen.preventAutoHideAsync();


export default function App() {
    const [loaded, error] = useFonts({
      'TitleF': require("./assets/fonts/StoryScript-Regular.ttf"),
      'BodyF': require("./assets/fonts/NotoSansJP-VariableFont_wght.ttf"),
    });
    useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  
  return (                             
    <>
      <StatusBar style="light" />
      <ShopStackNavigator />
    </>

  );
}

