import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo, FontAwesome, MaterialCommunityIcons  } from '@expo/vector-icons';
import HomeNavigator from './HomeNavigator';
import { TouchableOpacity } from 'react-native';
import SearchNavigator from './SearchNavigator';
import UserNavigator from './UserNavigator';
import LoginNavigator from './LoginNavigator';

const Tab = createBottomTabNavigator()

function RootNavigator() {
    const CustomTabBarButton = () =>{
        return(
            <TouchableOpacity
                style={{
                    width: 58,
                    height: 58,
                    backgroundColor: 'blue',
                    borderRadius: 33,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: -8,
                    borderWidth: 3,
                    borderColor: 'white',
                }}
            >
                <Entypo name="list" size={32} color="#FFD00C" />                        
            </TouchableOpacity>
        )
    }
    return (
        <Tab.Navigator
            initialRouteName='Ana Sayfa'
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#5C3EBC",
                tabBarInactiveTintColor: "#959595",
                headerShown: false,
                tabBarStyle :{
                    height: 80,
                },
            }}
        >
            <Tab.Screen 
                name='HomePage'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({color}) =>
                        <Entypo name="home" size={24} color={color} />                        

                }}
            />
            <Tab.Screen 
                name='Search'
                component={SearchNavigator}
                options={{
                    tabBarIcon: ({color}) =>
                    <FontAwesome name="search" size={24} color={color} />                        

                }}
            />
            <Tab.Screen 
                name="List"
                component={HomeNavigator}
                options={{
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    )
                }}
            />
            <Tab.Screen 
                name='User'
                component={UserNavigator}
                options={{
                    tabBarIcon: ({color}) =>
                    <FontAwesome name="user" size={24} color={color}/>                        

                }}
            />
            <Tab.Screen 
                name='Gift'
                component={LoginNavigator}
                options={{
                    tabBarIcon: ({color}) =>
                    <MaterialCommunityIcons name="gift" size={24} color={color} />
                }}
            />
        </Tab.Navigator>
    )
}

export default RootNavigator
