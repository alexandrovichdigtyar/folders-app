import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    button: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: '#007bff',
        padding: 2,
        margin: 10,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        width: 60
    },
    buttonText: {
        color: "#ffff"
    },
    activityIndicator: {
        marginTop: "50%",

    }
});