import { Dimensions, StyleSheet } from "react-native";

const {height, width} = Dimensions.get('window')
export default StyleSheet.create({
    button:{
        width: width*0.28,
        marginTop: 12,
        height: height*0.24,
        marginHorizontal: 8,
        marginBottom: 6,
    },
    image:{
        width: width*0.26, 
        height: width*0.26,
        borderRadius: 12,
        borderColor: 'gray',
        borderWidth: 0.4,
    },
    productDetail:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    priceText:{
        fontSize: 11,
        color: "#747990",
        textDecorationLine: 'line-through',
    },
    discountPrice:{
        color: "#5D3EBD",
        fontWeight: 'bold',
        fontSize: 12,
        marginLeft:4,
    },
    productName:{
        fontSize: 13,
        fontWeight: '600',
        marginTop: 5,
    },
    productQuantity:{
        color: '#747990',
        fontSize: 12,
        marginTop:4,
        fontWeight: '500'
    },
    addProduct:{
        width: 30,
        height: 30,
        borderWidth: 0.3,
        borderColor: 'lightgrey',
        backgroundColor: 'white',
        position: 'absolute',
        right: -8,
        top: -6,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 3.8,
        shadowOpacity: 0.05,
    },
    countContainer:{
        width: 30,
        height: 30,
        position: 'absolute',
        right: -8,
        top: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    productPlusOrMinus :{
        width: 28,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.6,
        borderColor: 'lightgrey',
        backgroundColor: 'white',
        shadowOpacity: 0.05,
    },
    count : {
        width: 28,
        height:30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.6,
        borderColor: 'lightgrey',
        backgroundColor: '#5C3EBC',
        shadowOpacity: 0.05,
    },
    countText: {
        color: 'white',
        fontSize: 15,
    }
})