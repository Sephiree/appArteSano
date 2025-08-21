import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import Header from './src/components/Header';
import CategoriesScreen from './src/screens/CategoriesScreen';


export default function App() {
  
  return (    
    <>
      <StatusBar style="light" />
      <Header title="Arte Sano"/>
      <CategoriesScreen/>
    </>

  );
}

const styles = StyleSheet.create({
});
