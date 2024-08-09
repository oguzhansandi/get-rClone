import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const headerStyles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#5C3EBC",
    height: height / 13,
  },
  headerLogo: {
    height: height/15,
  },
  headerCart : {
    height: height/13,
    verticalAlign: "middle",
  },
  headerTrash : {
    height: height/16,
    paddingRight: 12,
    verticalAlign: "middle",
  },
  headerTitleText: {
    height: height/17,
  },
  headerTitle: {
    width: 70,
    height: 30,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  headerIcon: {
    paddingLeft: 8,
  },
  headerBackButton: {
    height: height/16,
    verticalAlign: "middle",
    paddingLeft: 10,
  },
});
