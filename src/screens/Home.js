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

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class Home extends Component {

    _renderScrollViewContent() {
        const data = Array.from({ length: 30 });
        return (
            <View style={styles.scrollViewContent}>
                {data.map((_, i) =>
                    <View key={i} style={styles.row}>
                        <Text>{i}</Text>
                    </View>
                )}
            </View>
        );
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.fill}>
                    <ScrollView
                        style={styles.fill}
                    >
                        {this._renderScrollViewContent()}
                    </ScrollView>

                    <Animated.View style={styles.header}>
                        <View style={styles.bar}>
                            <Text style={styles.title}>Title</Text>
                        </View>
                    </Animated.View>
                </View>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    fill: {
        flex: 1,
    },
    row: {
        height: 40,
        margin: 16,
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#03A9F4',
        overflow: 'hidden',
      },
      bar: {
        marginTop: 28,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 18,
      },
      scrollViewContent: {
        marginTop: HEADER_MAX_HEIGHT,
      },
});