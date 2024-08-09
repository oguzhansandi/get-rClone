import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import LoginScreen from '../screens/LoginScreen';
import { Image, View } from 'react-native';
import { headerStyles } from "./styles";

const Stack = createStackNavigator();

function LoginNavigator( ) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='loginScreen'
        component={LoginScreen}
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
    </Stack.Navigator>
  )
}

export default LoginNavigator