import { Dimensions, StyleSheet } from "react-native";

const {height, width} = Dimensions.get('window')
export default StyleSheet.create({
    button:{
        flexDirection: 'row',
        height: height*0.19,
        paddingVertical: 30,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
    },
    image:{
        width: width*0.28, 
        borderRadius: 12,
        borderColor: 'gray',
        borderWidth: 0.4,
    },
    productDetail:{
        flexDirection: 'column',
        marginLeft: 10,
        width: width*0.30,
        alignSelf: 'center',
    },
    productName:{
        fontSize: 15,
        fontWeight: '600',
    },
    productQuantity:{
        color: '#747990',
        fontSize: 12,
        fontWeight: '500',
        marginLeft: 0,
    },
    priceText:{
        fontSize: 13,
        color: "#747990",
        textDecorationLine: 'line-through',
    },
    discountPrice:{
        color: "#5D3EBD",
        fontWeight: 'bold',
        fontSize: 14,
    },
    mainPriceContainer:{
        flexDirection: 'row',
        marginTop: 10,
    },
    discountPriceContainer:{
        marginLeft: 6,
    },
    quantityContainer:{
        flexDirection: 'row',
        marginLeft: 20,
        width: width*0.24,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 10,
    },
    trashBox:{
        width: '33.3%',
        padding:5,
        alignItems: 'center',
    },
    textBox:{
        width:'33.3%',
        backgroundColor: '#5C3EBC',
        padding:5,
        alignItems: 'center',
    },
    quantityText:{
        color: 'white',
    },
    plusBox:{
        width: '33.3%',
        padding:5,
        alignItems: 'center',
    }
})