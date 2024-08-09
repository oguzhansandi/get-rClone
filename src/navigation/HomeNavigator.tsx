import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import { Image, Text, TouchableOpacity, View } from "react-native";
import FilteredCategoryScreen from "../screens/FilteredCategoryScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import { Ionicons } from "@expo/vector-icons";
import {
  NavigationProp,
  ParamListBase,
  getFocusedRouteNameFromRoute,
  useNavigation,
} from "@react-navigation/native";
import HeaderCartBtn from "../components/HeaderCartBtn";
import CartDetailScreen from "../screens/CartDetailScreen";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { CLEAR_CART } from "../redux/Cart/cartSlice";
import { headerStyles } from "./styles";

const Stack = createStackNavigator();

interface MyStackProps {
  navigation: NavigationProp<ParamListBase>;
}

function MyStack({ navigation }: MyStackProps) {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const showCartBtn = cartItems.length > 0;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
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
          headerRight: () => (
            <View style={headerStyles.headerCart}>
              {showCartBtn && <HeaderCartBtn />}
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={FilteredCategoryScreen}
        options={{
          headerTintColor: "white",
          headerStyle: headerStyles.headerContainer,
          headerTitleAlign: "center",
          headerTitle: () => (
            <View style={headerStyles.headerTitleText}>
              <Text
                style={headerStyles.headerText}
              >
                Ürünler
              </Text>
            </View>
          ),
          headerRight: () => (
            <View style={headerStyles.headerCart}>
              {showCartBtn && <HeaderCartBtn />}
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={headerStyles.headerBackButton}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={({ route }) => ({
          headerTintColor: "white",
          headerStyle: headerStyles.headerContainer,
          headerTitleAlign: "center",
          headerTitle: () => (
            <View style={headerStyles.headerTitleText}>
              <Text style={headerStyles.headerText}>
                Ürün Detayı
              </Text>
            </View>
            
          ),
          headerBackTitleVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              style={headerStyles.headerBackButton}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={headerStyles.headerCart}>
              {showCartBtn && <HeaderCartBtn />}
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="CartDetails"
        component={CartDetailScreen}
        options={{
          headerTitle: () => (
            <View style={headerStyles.headerTitleText}>
              <Text style={headerStyles.headerText}>
                Sepetim
              </Text>
            </View>
          ),
          headerTintColor: "white",
          headerStyle: headerStyles.headerContainer,
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              style={headerStyles.headerBackButton}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={headerStyles.headerTrash}
              onPress={() => dispatch(CLEAR_CART())}
            >
              <Ionicons name="trash" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default function HomeNavigator({ navigation, route }) {
  return <MyStack navigation={navigation} route={route} />;
}
