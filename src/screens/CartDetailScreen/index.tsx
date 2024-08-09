import React, { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  ADD_TO_CART,
  INCREMENT_COUNT,
  REMOVE_FROM_CART,
  DECREMENT_COUNT,
  calculateTotalPrice,
} from "../../redux/Cart/cartSlice";
import { Product } from "../../models";
import CartProduct from "../../components/CartProduct";
import ProductItem from "../../components/ProductItem";
import styles from "./style";
import productsGetir from "../../../assets/productsGetir";
import getRandomProducts from "../../functions/getRandomProducts";

function Index({route}:{route:any}) {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const [addedProducts, setAddedProducts] = useState<Product[]>([]);
  console.log("Hey benim route parametrelerim:", route.params)
  useEffect(() => {
    const randomProducts = getRandomProducts(productsGetir, 9);
    setRecommendedProducts(randomProducts);
  }, []);

  useEffect(() => {
    const updatedAddedProducts = cart.map((item) => {
      const product = productsGetir.find((p) => p.id === item.id);
      return product ? product : item;
    });
    setAddedProducts(updatedAddedProducts);
  }, [cart]);

  const handleRemoveFromCart = (productId: number) => {
    dispatch(REMOVE_FROM_CART(productId));
  };

  const handleIncrementCount = (productId: number) => {
    dispatch(INCREMENT_COUNT(productId));
  };

  const handleDecrementCount = (productId: number) => {
    dispatch(DECREMENT_COUNT(productId));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.productsContainer}>
          {addedProducts.map((product) => (
            <CartProduct
              key={product.id}
              product={product}
            />
          ))}
        </View>
        <Text style={styles.recommendText}>Önerilen Ürünler</Text>
        <View style={styles.recommendsContainer}>
          <FlatList
            data={recommendedProducts}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <ProductItem key={item.id} item={item} />
              </TouchableOpacity>
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </ScrollView>
      <View style={styles.mainBTNContainer}>
        <View style={styles.subBTNContainer}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.continue}>Devam</Text>
          </TouchableOpacity>
          <View style={styles.priceContainer}>
            <Text style={styles.price}> {calculateTotalPrice(cart)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Index;
