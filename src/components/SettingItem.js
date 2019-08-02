/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    Switch,
    TouchableOpacity,
    Button
} from 'react-native';

const S_WIDTH = Dimensions.get('window').width
const S_HEIGHT = Dimensions.get('window').height
const rightIcon = require('../images/right-arrow.png')


export default class SettingItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            switchValue: true
        }
    }

    setValueSwitch(value) {
        this.setState({ switchValue: value })
    }

    onPressItem = () => {
        console.log("onPressItem")
    }


    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.props.onPress}
                    style={[
                        styles.container,
                        this.props.isFirst ? { borderTopLeftRadius: 10, borderTopRightRadius: 10 } : null,
                        this.props.isLast ? { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 } : null,
                        this.props.style]}
                    disabled={this.props.isControl ? true:false}
                    >
                    

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={this.props.leftIcon} style={styles.left_icon} />
                        <View>
                            <Text style={styles.title_text}>{this.props.title}</Text>
                            {
                                this.props.isSubTitle ?
                                    <Text style={styles.subtitle_text}>{this.props.subTitle}</Text> : null
                            }
                        </View>

                    </View>

                    {
                        this.props.isDetail ?
                            <Image source={rightIcon} style={styles.right_icon} /> : null
                    }

                    {
                        this.props.isControl ?
                            <Switch
                                ref={control => this.switchControl = control}
                                value={this.state.switchValue}
                                onValueChange={this.props.onSwitchChange}></Switch> : null
                    }


                </TouchableOpacity>
                {
                    !this.props.isLast ? <View style={styles.bottom_line} /> : null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingLeft: 20,
        paddingRight: 10,
    },
    left_icon: {
        width: 30,
        height: 30
    },
    right_icon: {
        width: 20,
        height: 20,
    },
    title_text: {
        fontSize: 15,
        fontWeight: '500',
        color: '#616161',
        paddingLeft: 10
    },
    subtitle_text: {
        fontSize: 15,
        fontWeight: '500',
        color: '#424242',
        paddingLeft: 10
    },
    bottom_line: {
        //width:S_WIDTH - 40 - 10,
        height: 1,
        position: 'absolute',
        bottom: 0,
        left: 20,
        right: 20,
        backgroundColor: '#bdbdbd',


    }
});
