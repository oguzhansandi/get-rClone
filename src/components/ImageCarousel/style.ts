import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('window')
export default StyleSheet.create({
    container:{
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        height: height*0.25,
        paddingTop: 25,
    },
    flatList: {
        width: width*0.5,
        height: height*0.21,
    },
    Image: {
        width:width*0.5, 
        height:height*0.21,
        resizeMode: 'stretch',
    },
    pointContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        width: 30,
        height:12,
        justifyContent: 'space-around'
    },
    point:{
        width:8,
        height:8,
        borderRadius: 20
    },
})