import { FlatList, StyleSheet, Text, View } from "react-native";
import products from "../../data/products.json";
import { useEffect, useState } from "react";
import TitleScript from "../../components/TitleScript";
import Search from "../../components/Search";


const ProductScreen = ({category}) => {
  const [productsFiltered,setProductsFiltered] = useState ([])
  const [keyword, setKeyword] = useState ("")

  useEffect(()=>{
    const ProductsFilteredByCategory = products.filter(product=>product.category.toLowerCase()===category.toLowerCase())
    if(keyword){
      const productsFilteredByKeyword = productsFilteredByCategory.filter(product=>product.title.toLowerCase().includes(keyword.toLowerCase))
      setProductsFiltered(productsFilteredByKeyword)
    }
    else{
      setProductsFiltered(ProductsFilteredByCategory)
    }
  },[category,keyword])

  return (
    <View>
      <Search setKeyword={setKeyword}/>
      <FlatList
        data={productsFiltered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TitleScript style={{fontSize:18}}> {item.title} </TitleScript>}
      />
    </View>
  )
}
export default ProductScreen
const styles = StyleSheet.create({})
