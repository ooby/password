import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from './button';
import generator from '../generator';

class Body extends Component {
    constructor() {
        super();
        this.state = { password: generator() };
    }
    render() {
        const { bodyContainer, textStyle, passwordStyle } = styles;
        return (
            <View style={bodyContainer}>
                <View>
                    <Text style={textStyle}>Generated password:</Text>
                    <Text style={passwordStyle}>{this.state.password}</Text>
                </View>
                <Button onPress={() => { this.setState({ password: generator() }); }}>Generate new</Button>
            </View>
        );
    }
};

const styles = {
    bodyContainer: {
        backgroundColor: '#FFF3E0',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10
    },
    textStyle: {
        alignSelf: 'center',
        marginLeft: 10,
        marginRight: 10,
        fontSize: 16,
        color: '#000'
    },
    passwordStyle: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        margin: 10,
        padding: 5,
        color: '#000',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000'
    }
};

export default Body;
