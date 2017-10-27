import React from 'react';
import {Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView} from 'react-native';
import {Constants, WebBrowser} from "expo";
import {StackNavigator} from 'react-navigation';
import Basics from 'exercise-5/Basics';
import Props from 'exercise-5/Props';
import State from 'exercise-5/State';
import Style from 'exercise-5/Style';
import HeightWidth from 'exercise-5/HeightWidth';
import FlexBox from 'exercise-5/FlexBox';
import TextInput from 'exercise-5/TextInput';
import Touches from 'exercise-5/Touches';
import ScrollView from 'exercise-5/ScrollView';
import ListViews from 'exercise-5/ListViews';
import WhatToDo from 'exercise-5/WhatToDo';
import NetWorking from 'exercise-5/NetWorking';

const Touchable = (props) => (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>)

class HomeScreen extends React.Component {
    static navigationOptions = {title: 'Day1 Tutorial'};

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text style={{textAlign: "center", fontSize: 20}}>See all Demos implemented by cph-jh332</Text>
                <Touchable onPress={() => navigate('web')} title="What I have to do"/>
                <Touchable onPress={() => navigate('basics')} title="Basics"/>
                <Touchable onPress={() => navigate('props')} title="Props"/>
                <Touchable onPress={() => navigate('state')} title="State"/>
                <Touchable onPress={()=>navigate('style')} title="Style"/>
                <Touchable onPress={()=>navigate('heightWidth')} title="HeightWidth"/>
                <Touchable onPress={()=>navigate('flexBox')} title="FlexBox"/>
                <Touchable onPress={()=>navigate('textInput')} title="TextInput"/>
                <Touchable onPress={()=>navigate('touches')} title="Touches"/>
                <Touchable onPress={()=>navigate('scrollView')} title="ScrollView"/>
                <Touchable onPress={()=>navigate('listViews')} title="ListViews"/>
                <Touchable onPress={()=>navigate('netWorking')} title="NetWorking"/>
            </View>
        )
    }
}

export default App = () => <RouteStack style={{marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2}}/>

const RouteStack = StackNavigator({
    Home: {screen: HomeScreen},
    basics: {screen: Basics},
    props: {screen: Props},
    web: {screen: WhatToDo},
    state: {screen: State},
    style: {screen: Style},
    heightWidth: {screen: HeightWidth},
    flexBox: {screen: FlexBox},
    textInput: {screen: TextInput},
    touches: {screen: Touches},
    scrollView: {screen: ScrollView},
    listViews: {screen: ListViews},
    netWorking: {screen: NetWorking}
});

const styles = StyleSheet.create({
    button: {
        margin: 3,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 7,
        fontSize: 18,
        fontWeight: "bold",
        color: 'white'
    }
})