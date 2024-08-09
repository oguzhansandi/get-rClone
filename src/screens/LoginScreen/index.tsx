import React from "react";
import { Text, View, Alert, Pressable, Image, Dimensions } from "react-native";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "@/src/services/firebaseConfig";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./style";

type LoginScreenProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setHeight: (height: number) => void;
  setPhonePage: (phonePage: boolean) => void;
};
const {height, width} = Dimensions.get("screen");
export default function LoginScreen({
  isOpen,
  setIsOpen,
  setHeight,
  setPhonePage,
}: LoginScreenProps) {
  GoogleSignin.configure({
    webClientId:
      "258549443268-bito7au003augj1ibqk9gksnj3r9q0b7.apps.googleusercontent.com",
  });

  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const googleCredentials = GoogleAuthProvider.credential(userInfo.idToken);
      await signInWithCredential(auth, googleCredentials);
      Alert.alert("Başarılı");
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("User cancelled the login flow");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("Operation (sign in) already in progress");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("Play services not available or outdated");
      } else {
        console.log("Some other error happened");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Başlayalım!</Text>
      <Text style={styles.titleText}>
        Hesap oluşturmak veya oturum açmak için bir yöntem seç
      </Text>
      <View style={styles.googleContainer}>
        <Image
          source={require("@/assets/google-icon.png")}
          style={styles.googleIcon}
        />
        <Pressable onPress={googleSignIn}>
          <Text style={styles.googleText}>Google ile devam et</Text>
        </Pressable>
      </View>
      <View style={styles.phoneContainer}>
        <FontAwesome
          name="phone"
          style={styles.phoneIcon}
          size={30}
          color="white"
        />
        <Pressable onPress={() => {
          setHeight(height);
          setPhonePage(true);
        }}>
          <Text style={styles.phoneText}>Telefon ile devam et</Text>
        </Pressable>
      </View>
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>veya</Text>
        <View style={styles.line} />
      </View>
      <Pressable
        onPress={() => {
          setIsOpen(false);
          setHeight(600);
        }}
        style={{ marginTop: 30, padding: 10 }}
      >
        <Text style={styles.guestText}>Misafir olarak devam et</Text>
      </Pressable>
    </View>
  );
}
