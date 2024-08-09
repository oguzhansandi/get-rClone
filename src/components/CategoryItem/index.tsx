import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'
import styles from './style'
import { Category } from '../../models'
import { useNavigation } from '@react-navigation/native'

type CategoryItemProps={
    item:Category
}
function index({item}:CategoryItemProps) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={()=> navigation.navigate("CategoryDetails",{category:item})} style={styles.container}>
            <Image style={styles.Image} source={{uri: item.src}} />
            <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
    )
}

export default index