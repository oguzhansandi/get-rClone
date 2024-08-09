import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('window')
export default StyleSheet.create({
    scrollContainer: {
        width: "100%",
        height: height*0.07,
        paddingVertical: height*0.014,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
    },
    button : {
        paddingHorizontal:10,
        marginRight: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 6,
        height:height*0.044,
    },
    typeText :{
        fontSize: 12,
        color: '#7849F7',
        fontWeight:'600'
    },
})