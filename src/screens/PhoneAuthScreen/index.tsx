import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, Animated, Easing, Image, TextInput, StyleSheet, Dimensions, Keyboard, Platform, KeyboardAvoidingView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styles from './style';
import CountryPicker from '@/src/components/CountryPicker';

type PhoneAuthScreenProps = {
  phonePage: boolean;
  setHeight: (height: number) => void;
  setPhonePage: (phonePage: boolean) => void;
};


function PhoneAuthScreen({
  phonePage,
  setHeight,
  setPhonePage,
}: PhoneAuthScreenProps) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const [text, setText] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState('TR'); // Default country code

  const imageWidth = useRef(new Animated.Value(100)).current;
  const imageHeight = useRef(new Animated.Value(100)).current;
  const containerWidth = useRef(new Animated.Value(170)).current;
  const containerHeight = useRef(new Animated.Value(170)).current;
  const headerHeight = useRef(new Animated.Value(Dimensions.get('window').height)).current;

  const placeholderTranslateY = useRef(new Animated.Value(0)).current;
  const placeholderScale = useRef(new Animated.Value(1)).current;
  const placeholderColor = useRef(new Animated.Value(0)).current;

  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);
  const windowHeight = Dimensions.get('screen').height;

  useEffect(() => {
    setHeight(windowHeight - keyboardHeight);

    if (phonePage) {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 500,
          easing: Easing.out(Easing.exp),
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 300,
          duration: 300,
          easing: Easing.out(Easing.exp),
          useNativeDriver: true,
        }),
      ]).start(() => {
        translateY.setValue(300); 
      });
    }
  }, [phonePage, keyboardHeight]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (event) => {
        const keyboardHeight = event.endCoordinates.height;
        setKeyboardHeight(keyboardHeight);

        Animated.parallel([
          Animated.timing(imageWidth, {
            toValue: 60,
            duration: 300,
            easing: Easing.out(Easing.ease),
            useNativeDriver: false,
          }),
          Animated.timing(imageHeight, {
            toValue: 60,
            duration: 300,
            easing: Easing.out(Easing.ease),
            useNativeDriver: false,
          }),
          Animated.timing(containerWidth, {
            toValue: 100,
            duration: 300,
            easing: Easing.out(Easing.ease),
            useNativeDriver: false,
          }),
          Animated.timing(containerHeight, {
            toValue: 100,
            duration: 300,
            easing: Easing.out(Easing.ease),
            useNativeDriver: false,
          }),
          Animated.timing(headerHeight, {
            toValue: windowHeight - keyboardHeight,
            duration: 300,
            easing: Easing.ease,
            useNativeDriver: false,
          }),
        ]).start();
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardHeight(0);
        setHeight(windowHeight);

        Animated.parallel([
          Animated.timing(imageWidth, {
            toValue: 100,
            duration: 300,
            easing: Easing.out(Easing.ease),
            useNativeDriver: false,
          }),
          Animated.timing(imageHeight, {
            toValue: 100,
            duration: 300,
            easing: Easing.out(Easing.ease),
            useNativeDriver: false,
          }),
          Animated.timing(containerWidth, {
            toValue: 170,
            duration: 300,
            easing: Easing.out(Easing.ease),
            useNativeDriver: false,
          }),
          Animated.timing(containerHeight, {
            toValue: 170,
            duration: 300,
            easing: Easing.out(Easing.ease),
            useNativeDriver: false,
          }),
          Animated.timing(headerHeight, {
            toValue: windowHeight,
            duration: 300,
            easing: Easing.out(Easing.ease),
            useNativeDriver: false,
          }),
        ]).start();
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [windowHeight]);

  const handleTextChange = (input: string) => {
    setText(input);
    console.log(input);
    if (input.length > 0 && isFocused ) {
      Animated.parallel([
        Animated.timing(placeholderTranslateY, {
          toValue: -20,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(placeholderScale, {
          toValue: 0.8,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(placeholderColor, {
          toValue: 1,
          duration: 200,
          useNativeDriver: false,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(placeholderTranslateY, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(placeholderScale, {
          toValue: 1,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(placeholderColor, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }),
      ]).start();
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    Animated.parallel([
      Animated.timing(placeholderTranslateY, {
        toValue: -20,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(placeholderScale, {
        toValue: 0.8,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(placeholderColor, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    handleTextChange(text);
  };

  const interpolateColor = placeholderColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#aaa', '#5C3EBC'],
  });
  
  const handleCountryChange = (countryCode: string) => {
    setSelectedCountryCode(countryCode);
  };

  return (
    <Animated.View style={[styles.headerContainer, { height: headerHeight }]}>
      <Animated.View style={styles.headerLogo}>
        <Image
          source={require('@/assets/getirlogo.png')}
          style={{ width: 60, height: 25 }}
        />
      </Animated.View>
      <KeyboardAvoidingView
        behavior='height'
      >
      <Animated.View style={[
        { transform: [{ translateY }] },
        styles.authPage
      ]}>
        <Pressable onPress={() => {
          setHeight(600);
          setPhonePage(false);
        }}>
          <Entypo name='cross' size={25} color="#201E43" />
        </Pressable>
        <Animated.View style={[styles.passwordPhotoContainer, { width: containerWidth, height: containerHeight }]}>
          <Animated.Image
            source={require('@/assets/secure.png')}
            style={{ width: imageWidth, height: imageHeight }}
          />
        </Animated.View>
        <Text style={styles.title}>Telefon numaranı gir</Text>
        <Text style={styles.description}>Doğrulama kodunu almak için telefon numaranı gir.</Text>
        <View style={styles.inputContainer}>
          <View style={styles.countryCodeContainer}>
            <Text>Ülke kodu</Text>
            <CountryPicker />          
          </View>
          <View style={styles.phoneNumberContainer}>
            <Animated.Text
              style={[
                styles.placeholder,
                {
                  transform: [{ translateY: placeholderTranslateY }, { scale: placeholderScale }],
                  color: interpolateColor,
                }
              ]}
            >
              Telefon numarası
            </Animated.Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              maxLength={10}
              onChangeText={handleTextChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={text}
            />
          </View>
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.continue}>Devam</Text>
        </Pressable>
      </Animated.View>
      </KeyboardAvoidingView>
    </Animated.View>
  );
}

export default PhoneAuthScreen;
