import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Product } from "../../models";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import {
  ADD_TO_CART,
  CLEAR_ITEM,
  DECREMENT_COUNT,
  INCREMENT_COUNT,
} from "../../redux/Cart/cartSlice";

type ProductItemType = {
  item: Product;
};

function ProductItem({ item }: ProductItemType) {
  const navigation = useNavigation();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const productCount =
    cartItems.filter((cartItem) => cartItem.id === item.id)[0]?.count ?? 1;

  const handleAddToCart = (product: Product) => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.fiyatIndirimli ?? product.fiyat,
      count: 1,
    };
    dispatch(ADD_TO_CART(cartItem));
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductDetails", {
          product: item,
          key: item.id,
        })
      }
      style={styles.button}
    >
      <Image style={styles.image} source={{ uri: item.image }} />

      {item.fiyatIndirimli ? (
        <View style={styles.productDetail}>
          <Text style={styles.priceText}>
            <Text>{"\u20BA"}</Text>
            {item.fiyat}
          </Text>
          <Text style={styles.discountPrice}>
            <Text>{"\u20BA"}</Text>
            {item.fiyatIndirimli}
          </Text>
        </View>
      ) : (
        <View style={styles.productDetail}>
          <Text style={styles.discountPrice}>
            <Text>{"\u20BA"}</Text>
            {item.fiyat}
          </Text>
        </View>
      )}

      <View>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productQuantity}>{item.miktar}</Text>
      </View>
      {cartItems.find((cartItem) => cartItem.id === item.id) ? (
        <View style={styles.countContainer}>
          <TouchableOpacity
            onPress={() => dispatch(INCREMENT_COUNT(item.id))}
            style={styles.productPlusOrMinus}
          >
            <Entypo name="plus" size={22} color="#5D3EBD" />
          </TouchableOpacity>
          <View style={styles.count}>
            <Text style={styles.countText}>{productCount}</Text>
          </View>
          {productCount > 1 ? (
            <TouchableOpacity
              onPress={() => dispatch(DECREMENT_COUNT(item.id))}
              style={styles.productPlusOrMinus}
            >
              <Entypo name="minus" size={22} color="#5D3EBD" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => dispatch(CLEAR_ITEM(item.id))}
              style={styles.productPlusOrMinus}
            >
              <Ionicons name="trash" size={21} color="#5C3EBC" />
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => handleAddToCart(item)}
          style={styles.addProduct}
        >
          <Entypo name="plus" size={22} color="#5D3EBD" />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}

export default ProductItem;
