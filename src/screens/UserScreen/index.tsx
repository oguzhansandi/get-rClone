import React, { useState } from "react";
import { ScrollView, Text, TouchableWithoutFeedback, View } from "react-native";
import { Entypo, FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import styles from "./style";
import AnimatedBottom from '@/src/components/AnimatedBottom';
import Portal from "@/src/components/Portal/Portal";
import LoginScreen from "../LoginScreen";
import PhoneAuthScreen from "../PhoneAuthScreen";

function Index() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const userEmail = useSelector((state: RootState) => state.user.email);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(600);
  const [phonePage, setPhonePage] = useState<Boolean>(false);

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.scrollContainer}
    >
      <View>
        <View>
          <TouchableWithoutFeedback onPress={() => {
            setIsOpen(true);
            setPhonePage(false);
          }}>
            <View style={styles.childContainers}>
              <FontAwesome
                style={styles.icons}
                name={isLoggedIn ? "sign-out" : "sign-in"}
              />
              <Text style={styles.userText}>
                {isLoggedIn ? userEmail : "Giriş Yap"}
              </Text>
              <Entypo style={styles.userIcon} name="chevron-right" />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <Portal name="bottomsheet">
          <AnimatedBottom
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            HEIGHT={height}
            backdropOnPress={() => setIsOpen(false)}
          >
            {phonePage ? (
              <PhoneAuthScreen
                setHeight={setHeight}
                phonePage={phonePage}
                setPhonePage={setPhonePage}
              />
            ) : (
              <LoginScreen
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setHeight={setHeight}
                setPhonePage={setPhonePage}
              />
            )}
          </AnimatedBottom>
        </Portal>

        <View style={styles.subContainer}>
          <TouchableWithoutFeedback onPress={() => alert("Canlı Destek")}>
            <View style={styles.childContainers}>
              <Ionicons style={styles.icons} name="chatbubbles-sharp" />
              <Text style={styles.text}>Canlı Destek</Text>
              <Entypo style={styles.userIcon} name="chevron-right" />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => alert("Adresler")}>
            <View style={styles.childContainers}>
              <Ionicons style={styles.icons} name="location" />
              <Text style={styles.text}>Adreslerim</Text>
              <Entypo style={styles.userIcon} name="chevron-right" />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => alert("Favoriler")}>
            <View style={styles.childContainers}>
              <Ionicons style={styles.icons} name="heart" />
              <Text style={styles.text}>Favori Ürünlerim</Text>
              <Entypo style={styles.userIcon} name="chevron-right" />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => alert("Yardım")}>
            <View style={styles.childContainers}>
              <AntDesign style={styles.icons} name="questioncircleo" />
              <Text style={styles.text}>Yardım</Text>
              <Entypo style={styles.userIcon} name="chevron-right" />
            </View>
          </TouchableWithoutFeedback>
        </View>

        <Text style={styles.lang}>Language - Dil</Text>
        <TouchableWithoutFeedback onPress={() => alert("Dil ayarları")}>
          <View style={styles.childContainers}>
            <Text style={styles.langText}>Dil Ayarları</Text>
            <Entypo style={styles.userIcon} name="chevron-right" />
          </View>
        </TouchableWithoutFeedback>

        <Text style={styles.lang}>Versiyon</Text>
        <View style={styles.childContainers}>
          <Text style={styles.langText}>2.19.1</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default Index;
