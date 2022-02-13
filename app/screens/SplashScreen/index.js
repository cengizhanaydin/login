import React from 'react';
import { ALBBaseScreen } from '../../components';
import { useTheme } from '../../contexts/ThemeContext';

function SplashScreen() {
    const { colors } = useTheme();

    return (
        <ALBBaseScreen themeColor={colors} />
    );
}

export default SplashScreen;