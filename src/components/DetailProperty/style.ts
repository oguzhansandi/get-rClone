import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: width,
    paddingBottom: 10,
    height: height,
  },
  touchable: {
    paddingHorizontal: 12,
    paddingVertical: 15,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
    color: "#5D3EBD",
  },
  contentContainer: {
    borderBottomWidth: 0.2,
    borderColor: "lightgrey",
  },
  detailContainer:{
    marginTop: 20,
    marginBottom: 20,
  },
  productsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: width - 40,
  },
  productItemContainer: {
    width: "30%",
    marginBottom: 10,
  },
  selectedDetail:{
    borderBottomWidth: 3,
    borderBottomColor: '#5C3EBC',
  },
  subtitle : {
    marginHorizontal: 10,
    marginTop: 14,
  },
  allergenInfoHead:{
    fontWeight: '600',
    marginTop: 15,
    fontSize: 15,
    marginBottom: 5,
  },
  subtitleText:{
    fontSize: 14,
    lineHeight: 19,
  },
  quantityContainer:{
    borderWidth: 2,
    borderColor: "lightgrey",
    borderRadius: 10,
    marginHorizontal: 30,
    padding: 15,
    alignItems: "center",
  },
  quantityText:{
    color: "#5D3EBD",
    fontWeight: '300',
    fontSize: 14,
  },
  ekBigiContainer:{
    marginTop: 15,
  },
  menseiHeader:{
    fontWeight: 'bold',
    fontSize: 15,
  },
  warning:{
    marginTop: 15,
  },
});
