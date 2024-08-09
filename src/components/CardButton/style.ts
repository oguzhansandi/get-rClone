import { Dimensions, StyleSheet } from "react-native";

const {width, height} = Dimensions.get('window')
export default StyleSheet.create({
    cartBtnContainer: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        width: width,
        padding: 17,
        alignItems: 'center',
        alignSelf: 'center',
        borderTopWidth: 1,
        borderColor: 'lightgrey',
    },
    cartText : {
        backgroundColor: 'blue',
        width : '100%',
        textAlign: 'center',
        padding: 13,
        color: 'white',
        borderRadius: 10,
    }

})