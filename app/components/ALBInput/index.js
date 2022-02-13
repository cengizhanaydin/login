import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Constant from "../../assets/Constant";

const ALBInput = ({ themeColor, value, onChangeText, placeholder }) => {
    return (
        <TextInput
            style={styles(themeColor).input}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={themeColor.text}
        />
    );
}

const styles = (themeColor) => StyleSheet.create({
    input: {
        height: 40,
        width: Constant.screenWidth,
        margin: 12,
        borderBottomWidth: 1,
        borderColor: themeColor.button,
        padding: 10,
        borderRadius: 10,
        color: themeColor.text,
    },
});


export default ALBInput;