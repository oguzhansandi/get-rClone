import React from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import styles from "./style";

function Index() {
  return (
    <View style={styles.cartBtnContainer}>
      <TouchableWithoutFeedback
        onPress={() => alert('Pressed!')}
      >
        <Text style={styles.cartText}>Sepete Ekle</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

export default Index;
