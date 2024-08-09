import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get("window")

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f6f6f6',
    },
    recommendText:{
        marginTop: 13,
        marginBottom: 10,
        marginLeft: 10,
    },
    productsContainer:{
        backgroundColor: 'white',
        borderBottomWidth: 0.1,
        borderColor: 'lightgray',
    },
    recommendsContainer:{
        backgroundColor: 'white',
        borderTopWidth: 0.5,
        borderColor: 'lightgray',
        paddingTop: 10,
        paddingBottom: 19,
    },
    mainBTNContainer:{
        backgroundColor: 'white',
        bottom:0,
        height:height*0.1,
        justifyContent: 'center',
    },
    subBTNContainer:{
        flexDirection:'row',
        borderWidth: 1,
        borderColor:'lightgray',
        borderRadius:10,
        height: height*0.075,
    },
    btn:{
        backgroundColor: '#5C3EBC',
        width: width*0.7,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: 'center',   
    },
    continue:{
        color:'white',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
    },
    priceContainer:{
        justifyContent: 'center',
        width: width*0.3,
    },
    price:{
        color:'#5C3EBC',
        fontWeight: '800',
        fontSize: 18,
        textAlign: 'center',
    }
})