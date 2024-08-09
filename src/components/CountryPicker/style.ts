import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  pickerButton: {
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  pickerButtonText: {
    fontSize: 16,
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  countryText: {
    marginLeft: 10,
    fontSize: 16,
  },
  closeButton: {
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    fontSize: 16,
  },
  countryInfo: {
    marginTop: 16,
    alignItems: 'center',
  },
})