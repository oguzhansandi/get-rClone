import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

const TypeBox = ({
  setCategory,
  item,
  active,
}: {
  setCategory: any;
  item: string;
  active: string;
}) => {
  return (
    <TouchableOpacity
      onPress={() => setCategory(item)}
      style={[
        styles.button,
        item == active
          ? { backgroundColor: "#5C3EBC" }
          : { borderWidth: 1.3, borderColor: "#f0eff7" },
      ]}
    >
      <Text
        style={[
          styles.typeText,
          item == active ? { color: "white" } : { color: "#7849F7" },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

function Index() {
  const [category, setCategory] = useState<String>("Birlikte İyi Gider");

  const categories = [
    "Birlikte İyi Gider",
    "Çubuk",
    "Kutu",
    "Külah",
    "Çoklu",
    "Bar",
  ];

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
      style={styles.scrollContainer}
    >
      {categories.map((item, index) => {
        return (
          <TypeBox
            key={index.toString()}
            setCategory={setCategory}
            item={item}
            active={category}
          />
        );
      })}
    </ScrollView>
  );
}

export default Index;
