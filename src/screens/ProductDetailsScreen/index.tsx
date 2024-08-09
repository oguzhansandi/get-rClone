import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";
import { Product } from "../../models";
import ImageCarousel from "../../components/ImageCarousel";
import DetailBox from "../../components/DetailBox";
import DetailProperty from "../../components/DetailProperty";
import { useRoute } from "@react-navigation/native";
import CardButton from '../../components/CardButton'

function Index() {
  const route = useRoute();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      if (route.params && 'product' in route.params) {
        setProduct(route.params.product as Product);
      }
      setLoading(false);
    }, 100);
  }, [route.params]);

  if (loading) {
    return (
      <View key={"activity-indicator"} style={styles.container}>
        <ActivityIndicator size="large" color="#5C3EBC" />
      </View>
    );
  }

  if (!product) {
    return <ActivityIndicator color={"#5D3EBD"} />;
  }

  return (
    <View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.heartIconBtn}>
          <MaterialCommunityIcons
            name="cards-heart-outline"
            size={26}
            color="#32177a"
            key={product.id+"-heart"}
          />
        </TouchableOpacity>
        <ImageCarousel images={product?.images} />
        <DetailBox
          key={product.id +"--detail-box"}
          price={product.fiyat}
          discountPrice={product.fiyatIndirimli}
          quantity={product.miktar}
          name={product.name}
        />
        <DetailProperty
          key={product.id + "-details"} 
          quantity={product.miktar}
          use={product.kullanim}
          detail={product.detay}
          ingredients={product.icindekiler}
          allergen={product.alerjen_info}
          nutritional_value={product.besinDegeri}
          mensei={product.mensei}
          company={product.firma}
          companyNo={product.isletmeNo}
        />
      </ScrollView>
      <CardButton key={product.id+"-btn"} />
    </View>
  );
}

export default Index;
