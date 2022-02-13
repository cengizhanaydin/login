import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ALBInput, ALBButton } from '../index';
import Constant from '../../assets/Constant';

function ALBLoginForm({ themeColor, username, onChangeUsername, password, onChangePassword, onSubmit, signUp, forgotPassword }) {
    return (
        <View style={styles.container}>
            <ALBInput
                themeColor={themeColor}
                value={username}
                onChangeText={onChangeUsername}
                placeholder='Please enter your username'
            />
            <ALBInput
                themeColor={themeColor}
                value={password}
                onChangeText={onChangePassword}
                placeholder='Please enter your password'
            />
            <ALBButton
                marginVertical={10}
                themeColor={themeColor}
                title="Login"
                onPress={onSubmit}
            />
            {
                signUp && forgotPassword &&
                <View style={styles.buttonView}>
                    <ALBButton
                        login
                        themeColor={themeColor}
                        title="Sign Up"
                        onPress={signUp}
                    />
                    <ALBButton
                        login
                        themeColor={themeColor}
                        title="Forgot Password"
                        onPress={forgotPassword}
                    />
                </View>
            }
        </View>
    );
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonView: {
        width: Constant.screenWidth,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default ALBLoginForm;