import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Constant from '../../assets/Constant';
import ALBText from '../ALBText';

const ALBButton = ({ themeColor, login, title, onPress, width, marginVertical }) => {
    return (
        <Pressable onPress={onPress} style={login ? null : styles(themeColor, width, marginVertical).buttonContainer}>
            <ALBText themeColor={themeColor} button text={title} />
        </Pressable>
    );
}

const styles = (themeColor, width, marginVertical) => StyleSheet.create({
    buttonContainer: {
        marginVertical: marginVertical,
        height: 40,
        width: width ? width : Constant.screenWidth,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: themeColor.button,
        justifyContent: 'center',
        backgroundColor: themeColor.button
    }
});

export default ALBButton;