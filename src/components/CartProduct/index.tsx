import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import {CLEAR_ITEM, DECREMENT_COUNT, INCREMENT_COUNT } from "../../redux/Cart/cartSlice";
import { Product } from "../../models";

type CartProductProps = {
  product: Product;
};

const CartProduct: React.FC<CartProductProps> = ({ product }) => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const cartItem = cartItems.find(item => item.id === product.id);
  const productCount = cartItem ? cartItem.count : 1;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductDetails", {
          product: product,
          key: product.id,
        })
      }
      style={styles.button}
    >
      <Image style={styles.image} source={{ uri: product.image }} />
      <View style={styles.productDetail}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productQuantity}>{product.miktar}</Text>
        {product.fiyatIndirimli ?  
        (
        <View style={styles.mainPriceContainer}>
        <View>
            <Text style={styles.priceText}>
              <Text>{"\u20BA"}</Text>
              {product.fiyat}
            </Text>
          </View>
          <View style={styles.discountPriceContainer}>
            <Text style={styles.discountPrice}>
              <Text>{"\u20BA"}</Text>
              {product.fiyatIndirimli}
            </Text>
          </View>
          </View>
          )
          : (
            <View style={styles.mainPriceContainer}>
                <Text style={styles.discountPrice}>
                  <Text>{"\u20BA"}</Text>
                  {product.fiyat}
                </Text>
              </View>
          )}
      </View>
      <View style={styles.quantityContainer}>
        <View style={styles.trashBox}>
        {productCount <=1 ?
          <TouchableOpacity
            onPress={() => dispatch(CLEAR_ITEM(product.id)) }
          >
            <Ionicons name="trash" size={18} color="#5C3EBC" />
          </TouchableOpacity>         
              :
          <TouchableOpacity
            onPress={() => dispatch(DECREMENT_COUNT(product.id)) }
          >
            <Entypo name="minus" size={18} color="#5C3EBC" />
          </TouchableOpacity>
            }
        </View>
        <View style={styles.textBox}>
          <Text style={styles.quantityText}>{productCount}</Text>
        </View>
        <View style={styles.plusBox}>
          <TouchableOpacity>
            <Entypo name="plus" size={22} color="#5D3EBD"
              onPress={() => dispatch(INCREMENT_COUNT(product.id))}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default CartProduct;
