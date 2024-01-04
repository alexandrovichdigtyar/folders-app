import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,

    },
    modalBackground: {
        backgroundColor: "#fffff"
    },
    buttonContainer: {
        padding: 16,
        borderTopWidth: 1,
        borderColor: '#f7f7f7',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 0,
    },
    buttonText: {
        color: '#090909',
        fontSize: 18,
        marginLeft: 12,
    },
    fileContainer: {
        backgroundColor: '#fffff',
        padding: 16,
    },
    fileName: {
        color: '#090909',
        fontSize: 16,
    },
    fileDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
    },
    fileSize: {
        color: '#5b5b51',
        fontSize: 12,
    },
    fileModified: {
        color: '#5b5b51',
        fontSize: 12,
    },
    iconContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    }
});