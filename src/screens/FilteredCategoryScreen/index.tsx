import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import CategoryFiltering from '../../components/CategoryFiltering';
import TypeFiltering from '../../components/TypeFiltering';
import ProductsContainer from '../../components/ProductsContainer';
import { Category } from '../../models';

function Index(props) {
  const [category, setCategory] = useState<Category>(props.route.params.category);

  // FlatList için veriyi tanımlayın
  const data = [
    { id: 'categoryFiltering', component: <CategoryFiltering category={category} /> },
    { id: 'typeFiltering', component: <TypeFiltering /> },
    { id: 'productsContainer', component: <ProductsContainer /> },
  ];

  const renderItem = ({ item }) => (
    <View>
      {item.component}
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

export default Index;
