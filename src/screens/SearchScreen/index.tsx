import React, { useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import productsGetir from "../../../assets/productsGetir";
import ProductItem from "../../components/ProductItem";
import styles from "./style";

function Index() {
  const [text, setText] = React.useState("");
  const [filteredProducts, setFilteredProducts] = React.useState(productsGetir);
  const [key, setKey] = React.useState("flatlist");
  const [isListening, setIsListening] = useState(false);

  const onChangeText = (input: string) => {
    setText(input);
    if (input) {
      const filteredProduct = productsGetir.filter((product) =>
        product.name.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredProducts(filteredProduct);
    } else {
      setFilteredProducts([]);
    }
    setKey(`flatlist-${input}`);
  };

  const renderText = () => (
    <View style={styles.textContainer}>
      <Text style={styles.text}>
        Arama Sonucu `{text}` (`{filteredProducts.length}`)
      </Text>
    </View>
  );

  return (
    <View>
      <KeyboardAvoidingView 
        behavior="padding"
      >
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={() => onChangeText(text)}>
            <Feather style={styles.searchIcon} name="search" />
          </TouchableWithoutFeedback>
          <TextInput
            style={styles.searchInput}
            placeholder="Ürün Ara"
            onChangeText={onChangeText}
            value={text}
          />
          <TouchableWithoutFeedback onPress={() => alert("ses")}>
            <FontAwesome style={styles.micIcon} name="microphone" />
          </TouchableWithoutFeedback>
        </View>
        {text ? (
          <View style={styles.resultContainer}>
            <FlatList
              key={key}
              data={filteredProducts}
              ListHeaderComponent={renderText}
              renderItem={({ item, index }) => (
                <View key={index} style={styles.productItem}>
                  <ProductItem item={item} />
                </View>
              )}
              numColumns={3}
            />
          </View>
        ) : null}
      </KeyboardAvoidingView>
    </View>
  );
}

export default Index;
