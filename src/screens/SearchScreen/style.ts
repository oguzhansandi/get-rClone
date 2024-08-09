import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flexDirection: "row",
      width: "100%",
      backgroundColor: "white",
      padding: 10,
    },
    searchIcon: {
      fontSize: 25,
      alignSelf: "center",
      color: "#5C3EBC",
    },
    searchInput: {
      flex: 1,
      padding: 10,
    },
    micIcon: {
      fontSize: 20,
      alignSelf: "center",
      color: "#959595",
    },
    resultContainer:{
      backgroundColor: 'white',
    },
    productItem: {
      paddingLeft: 4,
    },
    textContainer:{
      paddingLeft: 10,
      paddingVertical: 15,
      backgroundColor: '#F5F5F5',
    },
    text : {
      color: "#959595",
    }
  });