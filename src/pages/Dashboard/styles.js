import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 25
    },
    modalView: {
        backgroundColor: "lightblue",
        borderRadius: 15,
        padding: 20,
        shadowColor: "#000",
        elevation: 5,
        borderColor: "#000",
        borderWidth: 2,
    },
    button: {
        margin:10,
        borderRadius: 10,
        padding: 10,
        elevation: 15,
        backgroundColor: "grey"
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    row: {
        flexDirection: 'row'
    }
});
