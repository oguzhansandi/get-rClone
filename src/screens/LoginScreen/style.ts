import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        marginHorizontal: 20,
        flex:1,
        justifyContent: 'center',
    },
    googleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : 'white',
        borderWidth : 1,
        borderColor: '#5C3EBC',
        borderRadius: 10, 
        marginTop: 10,
    },
    googleIcon: {
        width: 35,
        height:35,
        marginVertical: 10,
        marginRight: 10,
    },
    googleText: {
        color: '#5C3EBC',
        fontWeight: '600',
        fontSize: 15,
    },
    headerText : {
        color: '#5C3EBC',
        fontSize: 30,
        alignSelf: 'center',
        fontWeight: '600',
    },
    titleText: {
        marginTop: 15,
        color : '#3c3c3c',
        fontSize: 17,
        textAlign:'center',
    },
    phoneContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 17,
        backgroundColor : '#5C3EBC',
        borderWidth : 1,
        borderColor: '#5C3EBC',
        borderRadius: 10, 
    },
    phoneIcon: {
        marginVertical: 15,
        marginRight:10,
    },
    phoneText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 15,
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
      },
      line: {
        flex: 1,
        height: 1,
        backgroundColor: 'gray',
      },
      orText: {
        marginHorizontal: 10,
        fontSize: 15,
        color: 'gray',
      },
      guestText:{
        color:'#405D72',
        textAlign:'center',
        fontSize: 16,
        marginBottom: 85,
      }
})