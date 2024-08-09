import { StyleSheet } from "react-native";

export default StyleSheet.create({
    scrollContainer:{
        paddingVertical: 30,
        bottom: 10,
    },
    subContainer:{
        paddingTop: 20,
    },
    childContainers :{
        backgroundColor: 'white',
        flexDirection: "row",
        padding: 20,
    },
    borderBottom:{
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        marginHorizontal: 25,
    },
    userImgContainer:{
        padding: 10,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 10,
    },
    userImg : {
        width: 50,
        height: 40,
    },
    userText:{
        fontWeight: '600',
        fontSize: 16,
        paddingLeft: 15,
        alignSelf: 'center',
    },
    userIcon : {
        position: 'absolute',
        fontWeight: 'bold',
        fontSize: 22,
        paddingLeft: 15,
        alignSelf: 'center',
        color: "#5D3EBD",
        right: 20,
    },
    icons : {
        fontWeight: 'bold',
        fontSize: 35,
        paddingLeft: 15,
        alignSelf: 'center',
        color: "#5D3EBD",
    },
    text:{
        color: "#3b3b3b",
        fontSize: 16,
        paddingLeft: 15,
        alignSelf: 'center',
    },
    lang:{
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
        color: 'gray',
    },
    langText:{
        color: "#3b3b3b",
        fontSize: 16,
        alignSelf: 'center',
    },
})