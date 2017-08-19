import React from 'react';
import { Text, View } from 'react-native';

const Header = ({ headerText }) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#FF9800',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        elevation: 4,
        position: 'relative'
    },
    textStyle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000'
    }
};

export default Header;
