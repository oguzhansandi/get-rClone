import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import UserScreen from "../screens/UserScreen";
import PhoneAuthScreen from "../screens/PhoneAuthScreen";
import HeaderCartBtn from "../components/HeaderCartBtn";
import { Image, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { headerStyles } from "./styles";

const Stack = createStackNavigator();

function UserNavigator() {
  const cartItem = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const showCartBtn = cartItem.length > 0;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="userScreen"
        component={UserScreen}
        options={{
          headerStyle: headerStyles.headerContainer,
          headerTitleAlign: "center",
          headerTitle: () => (
            <View style={headerStyles.headerLogo}>
              <Image
                source={require("../../assets/getirlogo.png")}
                style={{ width: 70, height: 30 }}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="phoneAuthScreen"
        component={PhoneAuthScreen}
        options={{
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitleAlign: "center",
          headerTitle: () => (
            <Image
              source={require("../../assets/getirlogo.png")}
              style={{ width: 70, height: 30 }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default UserNavigator;
