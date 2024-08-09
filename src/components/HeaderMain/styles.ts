import { Dimensions, StyleSheet } from "react-native";

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    headerMain : {
        height:  height * 0.064,
        backgroundColor : '#FFD300',
    },
    headerOne : {
        height : height * 0.064,
        width: width * 0.8,
        backgroundColor : 'white',
        flexDirection : 'row',
        alignItems : 'center',
        paddingHorizontal : '3%',
        borderTopRightRadius : 25,
        borderBottomRightRadius : 25,
    },
    headerOneView : {
        flexDirection : 'row',
        alignItems: 'center',
        marginLeft : 8,
        paddingLeft : 8,
        borderLeftColor : '#F3F3FD',
        borderLeftWidth : 2,
    },
    headerImage : {
        width: 30,
        height: 30,
    },
    headerTwo : {
        width: width * 0.3,
        height : height * 0.064,
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        paddingLeft : 20,
    }
})

export default styles;