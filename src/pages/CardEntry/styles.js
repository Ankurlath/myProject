import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalView: {
      backgroundColor: "white",
      borderRadius: 20,
      padding: 25,
      alignItems: "center",
      shadowColor: "#000",
      elevation: 5,
      borderColor: "#000",
      borderWidth: 2
    },
    button: {
      borderRadius: 10,
      padding: 10,
      elevation: 15,
      backgroundColor: "green"
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      fontSize: 20,
      fontWeight: 'bold'
    }
  });