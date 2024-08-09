import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './style';
import ProductItem from '../ProductItem';
import productsGetir from '../../../assets/productsGetir';
import { CartItem, Product } from '../../models';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

function sortProductsById(products: Product[]) {
  return products.slice().sort((a, b) => a.id - b.id);
}

function Index() {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [addedProducts, setAddedProducts] = useState<Product[]>([]);
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const updatedAddedProducts = cart.map((item: CartItem) => {
      const product = productsGetir.find(p => p.id === item.id);
      return product ? product : item;
    });
    setAddedProducts(updatedAddedProducts);
  }, [cart]);


  const renderProductItem = ({ item }: { item: Product }) => (
    <ProductItem key={item.id} item={item} />
  );

  const sortedProducts = sortProductsById(productsGetir);

  return (
    <View>
      <View style={styles.mainProductsContainer}>
        <FlatList
          data={sortedProducts.slice(0, 2)}
          renderItem={renderProductItem}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
        />
      </View>
      <Text style={styles.productHeader}>Çubuk</Text>
      <View style={styles.productsContainer}>
        <FlatList
          data={sortedProducts.slice(2)}
          renderItem={renderProductItem}
          keyExtractor={item => (item.id + '--cubuk').toString()}
          horizontal={false}
          numColumns={columns}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

export default Index;
