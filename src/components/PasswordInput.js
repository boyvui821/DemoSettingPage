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

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const iconHide = 'eye'
const iconShow = 'eye-slash'


export default class PasswordInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isHide: true
        }
        this._onShowPassword = this._onShowPassword.bind(this)
    }

    _onShowPassword() {
        this.setState({ isHide: !this.state.isHide })
    }

    render() {

        const isHide = this.state.isHide

        return (
            <Input {...this.props}
                containerStyle={[styles.input_container, this.props.isError ? styles.input_error : null]}
                // placeholder={this.props.placeholder}
                // label={this.props.label}
                // value={this.state.currPassword}
                // onChangeText={this.props.onChangeText}
                // errorMessage={isError ? this.state.currError : null}
                secureTextEntry={this.state.isHide}
                rightIcon={
                    <Icon
                        name={isHide ? iconHide : iconShow}
                        size={24}
                        color='#757575'
                        onPress={this._onShowPassword}
                    />
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    input_container: {
        width: S_WIDTH - 40,
        height: 50,
        marginBottom: 20,
    },
    input_error: {
        marginBottom: 40
    }
});
