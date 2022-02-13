import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Constant from '../../assets/Constant';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ALBText from '../ALBText';

function ALBBaseScreen({ themeColor, header, logoutPress, settingsPress, backPress, title, children }) {
    const getHeaderStyle = () => {
        if (title) {
            return styles(themeColor).header;
        } else if (settingsPress || logoutPress) {
            return styles(themeColor).logout;
        }
        return styles(themeColor).back;
    }

    return (
        <SafeAreaView style={styles(themeColor).container}>
            {
                header &&
                <View style={backPress && (settingsPress || logoutPress) ? styles(themeColor).header : getHeaderStyle()}>
                    {
                        backPress &&
                        <Icon name="arrow-circle-left" size={30} color={themeColor.primary} onPress={backPress} />
                    }
                    {
                        title &&
                        <ALBText themeColor={themeColor} header text='Guess Who ?' />
                    }
                    {
                        settingsPress &&
                        <Icon name="sliders" size={30} color={themeColor.primary} onPress={settingsPress} />
                    }
                    {
                        logoutPress &&
                        <Icon name="sign-out" size={30} color={themeColor.primary} onPress={logoutPress} />
                    }
                </View>
            }
            {children}
        </SafeAreaView>
    );
}

const styles = (themeColor) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColor.background
    },
    header: {
        margin: Constant.headerMargin,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logout: {
        margin: Constant.headerMargin,
        alignSelf: 'flex-end'
    },
});

export default ALBBaseScreen;