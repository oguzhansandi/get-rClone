import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import styles from './style'
import categoriesGetir from '../../../assets/categoriesGetir'
import { Category } from '../../models'

const CategoryBox = ({item, active}:{item:Category, active:Category}) =>{
    return(
        <View style={[styles.categoriesContainer, item.name == active.name && {borderBottomColor:'#FFD00C', borderBottomWidth:2.5}]}>
            <Text style={styles.categories}>{item.name}</Text>
        </View>
    )
}

function index({category}:{category:Category}) {
    const [categories, setCategories] = useState<Category[]>(categoriesGetir)
    return (
        <ScrollView
            showsHorizontalScrollIndicator = {false}
            bounces= {true}
            horizontal={true}
            style={styles.scrollContainer}
        >
            {categories.map((item)=>(
                <CategoryBox key={item.id} item={item} active={category}/>
            ))}
        </ScrollView>
    )
}

export default index