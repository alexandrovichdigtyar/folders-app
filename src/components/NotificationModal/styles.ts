import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        display: "flex",
        justifyContent: "center",
        margin: 20,
        backgroundColor: '#ffff',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
       display: "flex",
       justifyContent: "center",
       flexDirection: "row",
       alignItems: 'center',
       textAlign: 'center'
    },
    closeButton: {
        backgroundColor: '#2196F3',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 100,
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
    },
    closeButtonTitle: {
        color: "#ffff"
    }
});