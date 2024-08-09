import React, { useState, useEffect } from "react";
import { FlatList, Text, TouchableWithoutFeedback, View } from "react-native";
import ProductItem from "../ProductItem";
import productsGetir from "../../../assets/productsGetir";
import styles from "./style";
import NutritionalValue from "../NutritionalValue";
import getRandomProducts from "../../functions/getRandomProducts"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Product } from "../../models";

type DetailBoxProp = {
  detail: string;
  ingredients: string;
  allergen: string;
  nutritional_value: string[];
  quantity: string;
  use: string;
  company: string;
  companyNo: string;
  mensei: string;
  id: string;
};

function DetailBox({
  detail,
  allergen,
  ingredients,
  nutritional_value,
  quantity,
  use,
  company,
  mensei,
  companyNo,
  id
}: DetailBoxProp) {
  const [details, setDetails] = useState<string[]>([
    "Önerilenler",
    "Detaylar",
    "İçindekiler",
    "Besin Değerleri",
    "Kullanım",
    "Ek Bilgiler",
  ]);
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const [selectedDetail, setSelectedDetail] = useState("Önerilenler");
  const [addedProducts, setAddedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const updatedAddedProducts = cart.map(item => {
      const product = productsGetir.find(p => p.id.toString() === item.id.toString());
      return product ? product : item;
    });
    setAddedProducts(updatedAddedProducts);
  }, [cart]);


  useEffect(() => {
    const randomProducts = getRandomProducts(productsGetir, 9);
    setRecommendedProducts(randomProducts);
  }, []);

  const handlePress = (item : string) => {
    setSelectedDetail(item);
  };

  const renderItem = ({ item, index }: { item: string, index: number }) =>
    (
    <View
      key={`${item}-${index}`}
      style={[
        styles.touchable,
        selectedDetail === item && styles.selectedDetail,
      ]}
    >
      <TouchableWithoutFeedback 
        onPress={() => handlePress(item)}>
        <Text style={styles.itemText}>{item}</Text>
      </TouchableWithoutFeedback>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <FlatList
          data={details}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.detailContainer}>
        {selectedDetail === "Önerilenler" ? (
          <View style={styles.productsContainer}>
            {recommendedProducts.map((item, index) => (
              <View key={index} style={styles.productItemContainer}>
                <ProductItem item={item}/>
              </View>
            ))}
          </View>
        ) : selectedDetail === "Detaylar" ? (
          detail ? (
            <View style={styles.subtitle}>
              <Text style={styles.subtitleText}>{detail}</Text>
            </View>
          ) : (
            <View style={styles.subtitle}>
              <Text style={styles.subtitleText}>
                Detay bilgisi bulunmamaktadır.
              </Text>
            </View>
          )
        ) : selectedDetail === "İçindekiler" ? (
          ingredients ? (
            <View style={styles.subtitle}>
              <Text style={styles.subtitleText}>{ingredients}</Text>
              <Text style={styles.allergenInfoHead}>Alerjen Bilgisi</Text>
              <Text style={styles.subtitleText}>{allergen}</Text>
            </View>
          ) : (
            <View style={styles.subtitle}>
              <Text style={styles.subtitleText}>
                İçerik Bilgisi Bulunmamaktadır.
              </Text>
            </View>
          )
        ) : selectedDetail === "Besin Değerleri" ? (
          nutritional_value ? (
            <View style={styles.subtitle}>
              <View style={styles.quantityContainer}>
                <Text style={styles.quantityText}>
                  {quantity.slice(0, 3)} g/ml
                </Text>
              </View>
              <NutritionalValue nutritional_value={nutritional_value} />
            </View>
          ) : (
            <View style={styles.subtitle}>
              <Text style={styles.subtitleText}>
                Besin Değeri Bilgisi Bulunmamaktadır.
              </Text>
            </View>
          )
        ) : selectedDetail === "Kullanım" ? (
          use ? (
            <View style={styles.subtitle}>
              <Text style={styles.subtitleText}>{use}</Text>
            </View>
          ) : (
            <View style={styles.subtitle}>
              <Text style={styles.subtitleText}>
                Kullanım Bilgisi Bulunmamaktadır.
              </Text>
            </View>
          )
        ) : selectedDetail === "Ek Bilgiler" ? (
          company || companyNo || mensei ? (
            <View style={styles.subtitle}>
              <Text style={styles.subtitleText}>
                Ürünün menşeine, üretici/ithalatçı bilgilerine ve uyarılara
                ulaşabilirsiniz.
              </Text>
              <View style={styles.ekBigiContainer}>
                <Text style={styles.menseiHeader}>Menşei</Text>
                <Text style={styles.subtitleText}>{mensei}</Text>
              </View>
              <View style={styles.ekBigiContainer}>
                <Text style={styles.menseiHeader}>
                  Gıda İşletmecisi/ Üretici/ İthalatçı/ Dağıtıcı
                </Text>
                <Text style={styles.subtitleText}>{company}</Text>
              </View>
              <View style={styles.ekBigiContainer}>
                <Text style={styles.menseiHeader}>İşletme Kayıt No</Text>
                <Text style={styles.subtitleText}>{companyNo}</Text>
              </View>
              <View style={styles.ekBigiContainer}>
                <Text style={styles.menseiHeader}>Uyarı</Text>
                <Text style={styles.warning}>
                  Ürün etiket bilgileri, ürünün tedarikçisi tarafından Getir'e
                  iletilen en güncel bilgilerdir. Ürün etiket bilgileri ile
                  uygulamada bulunan bilgiler arasında herhangi bir farklılık
                  bulunması halinde sorumluluk tamamen tedarikçi firmaya aittir.
                </Text>
              </View>
            </View>
          ) : (
            <View style={styles.subtitle}>
              <Text style={styles.subtitleText}>
                Ek Bilgi Bulunmamaktadır.
              </Text>
            </View>
          )
        ) : null}
      </View>
    </View>
  );
}

export default DetailBox;
