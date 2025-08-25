import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import Header from './src/components/Header';
import CategoriesScreen from './src/screens/CategoriesScreen';
import ProductScreen from './src/screens/ProductScreen';
import { useState } from 'react';


export default function App() {
  const [categorySelected, setCategorySelected] = useState ("")
  
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
          <CategoriesScreen/>
          </>
        }
      
    </>

  );
}

const styles = StyleSheet.create({
});
