import React, { Component } from 'react';
import {
    Animated,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    SafeAreaView
} from 'react-native';

export default class Loan extends Component {

    render() {

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.fill}>
                    <Text>Hello Loan Tab</Text>
                </View>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    fill: {
        flex: 1,
    }
});