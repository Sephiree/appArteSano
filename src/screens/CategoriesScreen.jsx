import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import categories from "../data/categories.json";
import FlatCard from "../components/FlatCard";

const CategoriesScreen = () => {
  const renderCategoryItem = ({ item }) => {
    return (
         <View style={styles.container}>
    <FlatCard style={{ backgroundColor: "blue" }}>
      <Text>{item.title}</Text>
      <Image width={120} height={50} source={{ uri: item.image }} resizeMode="contain" />
    </FlatCard>
    </View>
    )
};

return (
     <FlatList
      data={categories}
      renderItem={renderCategoryItem}
      keyExtractor={item=>item.id}
      />
  );
};
export default CategoriesScreen;
const styles = StyleSheet.create({});
