import { StyleSheet } from "react-native";
import { View } from "react-native-web";

export const styles = StyleSheet.create({
    overlay: {
        height: 100,
        width: 200,
        backgroundColor: "#fff",
        borderColor: "#FF4D4D",
        borderWidth: 2,
        borderRadius: 10,
    },
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#FF4D4D",
        textTransform: "uppercase",
        marginTop: 10,
    },
});