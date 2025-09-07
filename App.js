import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import Header from './src/components/Header';
import CategoriesScreen from './src/screens/CategoriesScreen';
import ProductScreen from './src/screens/ProductScreen';
import { useState, useEffect } from 'react';

SplashScreen.preventAutoHideAsync();


export default function App() {
  const [categorySelected, setCategorySelected] = useState ("")
    const [loaded, error] = useFonts({
      TitleF: require("./assets/fonts/StoryScript-Regular.ttf"),
      BodyF: require("./assets/fonts/NotoSansJP-VariableFont_wght.ttf"),
    });
    useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  
  return (     
    <>
      <StatusBar style="light" />

      {
        categorySelected
          ?
          <>
            <Header title="Arte Sano" subtitle="Productos"/>
            <ProductScreen category={categorySelected}/>
        </>
        :
        <>
          <Header title="Arte Sano" subtitle="Categorias"/>
          <CategoriesScreen setCategorySelected={setCategorySelected}/>
          </>
        }
      
    </>

  );
}

const styles = StyleSheet.create({
});
