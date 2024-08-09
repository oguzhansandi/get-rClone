import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {

    },
    heartIconBtn : {
        position: 'absolute',
        right: 0,
        paddingRight: 15,
        marginTop: 30,
        zIndex: 1,
    },
    CartBtnContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999, 
    },
    CartBtn: {
        backgroundColor: '#5C3EBC',
        paddingVertical: 15,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    CartText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
})