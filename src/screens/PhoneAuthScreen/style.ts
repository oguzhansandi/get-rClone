import { Dimensions, StyleSheet } from "react-native";

const {height, width} = Dimensions.get('window')
export default StyleSheet.create({
    headerContainer: {
        flex: 1,
        backgroundColor: "#5C3EBC",
    },
    headerLogo: {
        height: height/13,
        alignItems: "center",
        justifyContent: "center",
    },
    authPage: {
        backgroundColor: 'white', 
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20, 
        padding: 20,
        height: height,
    },
    passwordPhotoContainer: {
        marginTop: 100,
        backgroundColor: 'lightblue',
        width: 170,
        height: 170,
        borderRadius: 100,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    title:{
        color: '#5C3EBC', 
        fontSize: 24, 
        textAlign: 'center', 
        marginTop: 40, 
        fontWeight: '700',
    },
    description:{
        fontSize: 15,
        textAlign: "center",
        marginTop: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        width: '100%',
      },
      countryCodeContainer: {
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderRightWidth: 1,
        borderColor: '#ddd',
      },
      phoneNumberContainer: {
        flex: 1,
        position: 'relative',
      },
      placeholder: {
        position: 'absolute',
        left: 10,
        top: 15,
        fontSize: 16,
      },
      input: {
        height: 50,
        paddingHorizontal: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
      },
      button: {
        width: '100%',
        height: 50,
        backgroundColor: '#5C3EBC',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 20,
      },
      continue: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
}) 