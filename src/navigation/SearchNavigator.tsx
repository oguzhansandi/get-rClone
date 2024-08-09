import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import SearchScreen from '../screens/SearchScreen';
import HeaderCartBtn from '../components/HeaderCartBtn';
import { Image, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from "../redux/store";
import { useDispatch } from 'react-redux';
import { headerStyles } from './styles';

const Stack = createStackNavigator();

function SearchNavigator( ) {

  const cartItem= useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()
  const showCartBtn = cartItem.length > 0
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: headerStyles.headerContainer,
      headerBackTitleVisible: false,
      headerRight: () => (showCartBtn && <HeaderCartBtn />),
    }}
    >
      <Stack.Screen
        name='searchScreen'
        component={SearchScreen}
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
          headerRight: () => 
            <View style={headerStyles.headerCart}>
            {showCartBtn && <HeaderCartBtn />}
            </View>
        }}
      />
    </Stack.Navigator>
  )
}

export default SearchNavigator