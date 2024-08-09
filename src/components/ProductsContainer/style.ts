import { StyleSheet } from "react-native";

export default StyleSheet.create({
    mainProductsContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    productHeader:{
        color: 'gray',
        fontWeight: 'bold',
        padding: 14,
    },
    productsContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 10,
        alignItems: 'center',
    }
})