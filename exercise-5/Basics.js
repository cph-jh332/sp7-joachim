import React from 'react';
import {View, Text} from 'react-native';

export default class Basics extends React.Component {
    static navigationOptions = { title: "Learn the Basics" }
    render() {
        return (<View><Text>Hello World</Text></View>)
    }
}