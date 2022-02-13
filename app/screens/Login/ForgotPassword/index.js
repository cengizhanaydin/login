import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ALBBaseScreen, ALBInput, ALBButton } from '../../../components';
import { useTheme } from '../../../contexts/ThemeContext';
import { NavigationContext } from '@react-navigation/native';

function ForgotPassword() {
    const { colors } = useTheme();
    const navigation = useContext(NavigationContext);
    const [username, setUsername] = useState('');

    const forgotPassword = () => {
        navigation.navigate('Login');
    }

    return (
        <ALBBaseScreen themeColor={colors}>
            <View style={styles.container}>
                <ALBInput
                    themeColor={colors}
                    value={username}
                    onChangeText={setUsername}
                    placeholder='Please enter your username'
                />
                <ALBButton
                    marginVertical={10}
                    themeColor={colors}
                    title="Forgot Password"
                    onPress={forgotPassword}
                />
            </View>
        </ALBBaseScreen>
    );
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ForgotPassword;