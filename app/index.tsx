import React from "react";
import { LogBox, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import RootNavigator from "../src/navigation/RootNavigator";
import { store } from "../src/redux/store";
import * as Linking from "expo-linking";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import PortalProvider from "@/src/components/Portal/PortalProvider";

LogBox.ignoreAllLogs();

const prefix = Linking.createURL('/');

export default function App() {
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Search: {
          screens: {
            Home: "home",
            CategoryDetails: "category",
            ProductDetails: "product/contentId/:contentId",
            CartDetails: "cart/contentId/:contentId",
          },
          parse: {
            contentId: (message: string) => `${message} `
          }
        }
      }
    },
  };

  return (
    <GestureHandlerRootView>
      <PortalProvider>
        <Provider store={store}>
            <RootNavigator />
        </Provider>
      </PortalProvider>
    </GestureHandlerRootView>
  );
}

