import React from 'react';
import Constant from '../../assets/Constant'
import { Text, StyleSheet } from 'react-native';

function ALBText({ textAlign, themeColor, text, title, header, button }) {

    const getStyle = () => {
        if (title) {
            return styles(themeColor).title
        } else if (header) {
            return styles(themeColor).header
        } else if (button) {
            return styles(themeColor, textAlign).button
        }
        return styles(themeColor).text;
    }

    return <Text style={getStyle()}>{text}</Text>
}

const styles = (themeColor, textAlign) => StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: Constant.textFontSize,
        color: themeColor.text
    },
    title: {
        fontSize: Constant.loginTitleFontSize,
        fontWeight: 'bold',
        color: themeColor.text
    },
    header: {
        fontSize: Constant.titleFontSize,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: themeColor.text
    },
    button: {
        textAlign: textAlign ? textAlign : 'center',
        fontSize: Constant.buttonFontSize,
        fontWeight: 'bold',
        color: themeColor.buttonText
    }
});

export default ALBText;