import React, { useState, useContext } from 'react';
import { ALBBaseScreen, ALBLoginForm } from '../../components';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import { NavigationContext } from '@react-navigation/native';


function Login() {
    const { colors } = useTheme();
    const { authAction } = useAuth();
    const navigation = useContext(NavigationContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {
        authAction.signIn();
    }

    const signUp = () => {
        navigation.navigate('SignUp');
    }

    const forgotPassword = () => {
        navigation.navigate('ForgotPassword');
    }

    return (
        <ALBBaseScreen themeColor={colors}>
            <ALBLoginForm
                themeColor={colors}
                username={username}
                password={password}
                onChangeUsername={setUsername}
                onChangePassword={setPassword}
                onSubmit={onSubmit}
                signUp={signUp}
                forgotPassword={forgotPassword}
            />
        </ALBBaseScreen>
    );
}

export default Login;