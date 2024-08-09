import React from 'react'
import styles from './style'
import { Text, View } from 'react-native';

type NutritionalValueProp = {
    nutritional_value: string[];
  };

function index({nutritional_value}: NutritionalValueProp) {
  return (
    Object.entries(nutritional_value).map(([key, value]) => (
        <View key={key} style={styles.nutritional_value}>
          <Text style={styles.subtitleText}>{key}</Text>
          <Text style={styles.subtitleText}>{value}</Text>
        </View>
      ))
  )
}

export default index