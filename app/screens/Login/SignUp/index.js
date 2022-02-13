import React, { useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { useAuth } from '../../../contexts/AuthContext';
import { ALBBaseScreen, ALBSignUpForm } from '../../../components';

function SignUp() {

    const { colors } = useTheme();
    const { authAction } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signUp = () => {
        authAction.signUp();
    }

    return (
        <ALBBaseScreen themeColor={colors}>
            <ALBSignUpForm
                themeColor={colors}
                username={username}
                password={password}
                onChangeUsername={setUsername}
                onChangePassword={setPassword}
                onSubmit={signUp}
            />
        </ALBBaseScreen>
    );
}

export default SignUp;