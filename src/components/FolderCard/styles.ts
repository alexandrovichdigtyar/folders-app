import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        paddingBottom: 5,
        width: "100%",
        backgroundColor: '#e0f7fa',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    folderName: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: '500',
    },

    popoverContent: {
        padding: 10,
    },
    popoverItem: {
        padding: 8,
    },
    popoverText: {
        fontSize: 16,
    },
    menuButton: {
        display: "flex",
        flexDirection: "row"
    },
});