import React from 'react';
import {
    Text,
    View
} from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        /**
         * padding and margin here for IOS layout
         */
        elevation: 2, // shadow options for Android only, IOS to set shadowOptions
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

export default Header;
