import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 18,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    marginTop: 12,
  },
  quantity: {
    fontWeight: "600",
    color: "#848897",
    marginTop: 6,
  },
  productDetail: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  priceText: {
    color: "#747990",
    fontWeight: "bold",
    fontSize: 14,
    textDecorationLine: "line-through",
  },
  discountPrice: {
    color: "#5D3EBD",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 5,
  },
});
