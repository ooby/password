import React from 'react';
import { View, Text } from 'react-native';
import Header from './components/header';
import Body from './components/body';

const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Password'} />
        <Body />
    </View>
);

export default App;
