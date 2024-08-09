import { Dimensions, StyleSheet } from "react-native";

const {height, width} = Dimensions.get('window')
export default StyleSheet.create({
    scrollContainer: {
        width: '100%',
        backgroundColor : '#7849F7',
        height: height*0.065,
    },
    categories:{
        fontSize:14,
        color: 'white',
        fontWeight: '600',
    },
    categoriesContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 9,
    },
})