import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('window')
export default StyleSheet.create({
    container : {
        width : width*0.25,
        height : width*0.24,
        alignItems:'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop : 10,
    },
    Image:{
     width: width*0.18,   
     height: width*0.18,
     borderRadius : 8,
    },
    text : {
        fontSize : 12,
        color : '#616161',
        fontWeight : '500',
    }
});