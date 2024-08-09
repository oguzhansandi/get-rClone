import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { calculateTotalPrice } from "../../redux/Cart/cartSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const { height, width } = Dimensions.get("window");
function index() {
  const navigation = useNavigation();
  const cart = useSelector((state: RootState) => state.cart.items);
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate("CartDetails")}
      style={{
        backgroundColor: "white",
        width: width * 0.17,
        height: 33,
        borderRadius: 5,
        marginRight: width * 0.1,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          paddingHorizontal: 3,
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            width: 30,
            height: 30,
            alignSelf: "center",
          }}
          source={require("../../../assets/cart.png")}
        />
      </View>
      <View
        style={{
          backgroundColor: "lightblue",
          justifyContent: "center",
          width: "100%",
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#5C3EBC",
            fontWeight: "bold",
            fontSize: 13,
            alignItems: "center",
          }}
        >
          <Text>{"\u20BA"}</Text>
          {calculateTotalPrice(cart)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default index;
