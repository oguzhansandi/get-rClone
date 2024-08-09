import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

type DetailBoxProps = {
  name: string;
  quantity: string;
  price: number;
  discountPrice: number;
};

function index({ name, quantity, price, discountPrice }: DetailBoxProps) {
  return (
    <View style={styles.container}>
      {discountPrice ? (
        <View style={styles.productDetail}>
          <Text style={styles.priceText}>
            <Text>{"\u20BA"}</Text>
            {price}
          </Text>
          <Text style={styles.discountPrice}>
            <Text>{"\u20BA"}</Text>
            {discountPrice}
          </Text>
        </View>
      ) : (
        <View style={styles.productDetail}>
          <Text style={styles.discountPrice}>
            <Text>{"\u20BA"}</Text>
            {price}
          </Text>
        </View>
      )}
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.quantity}>{quantity}</Text>
    </View>
  );
}

export default index;
