import React, { useState } from 'react'
import { View } from 'react-native'
import CategoryItem from '../../components/CategoryItem'
import categoriesGetir from '../../../assets/categoriesGetir'
import styles from './style'
import { Category } from '../../models'

function index() {
    const [categories, setCategories] = useState<Category[]>(categoriesGetir)
  return (
    <View>
        <View style={styles.listContainer}>
            {
                categories.map((item) =>(
                    <CategoryItem key={item.id} item={item}/>
                ))
            }
        </View>
    </View>
  )
}

export default index