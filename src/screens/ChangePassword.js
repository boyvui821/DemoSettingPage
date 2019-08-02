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
    View,
    SafeAreaView,
    Dimensions,
    Button,
    TouchableOpacity,
    Image
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import { SettingHeader,PasswordInput } from '../components'

const S_WIDTH = Dimensions.get('window').width
const S_HEIGHT = Dimensions.get('window').height


const imgEdit = require('../images/setting_edit.png')
const imgSave = require('../images/setting_save.png')
const imgBack = require('../images/setting_back.png')

export default class ChangePassword extends Component {

    static navigationOptions = ({ navigation, navigationOptions }) => {


        return {
            header: props =>
                <SettingHeader
                    title="Change Password"
                    isLeft
                    isRight
                    leftSource={imgBack}
                    rightSource={imgSave}
                    leftPress={() => navigation.goBack()}
                    rightPress={navigation.getParam('onClickSave')}
                >
                </SettingHeader>
            ,

        }
    };



    constructor(props) {
        super(props)
        console.log("constructor: " + JSON.stringify(this.props.navigation))

        this.state = {
            currPassword: "123456789",
            msgErrOld: "Mật khẩu hiện tại không được trống !",
            msgErrNew: "Mật khẩu mới không được trống !",
            msgErrConfirm: "Mật xác thực không được trống !",
            newPassword: "",
            confirmPassword: "",
            isErrorOld: false,
            isErrorNew: false,
            isErrorConfirm: false
        }
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.props.navigation.setParams({
            onClickSave: this._onClickSave
        });
    }

    _onClickSave = () => {

        const pOld = this.state.currPassword
        const pNew = this.state.newPassword
        const pConfirm = this.state.confirmPassword
        if ((pOld === "") || (pOld === undefined)) {
            this.setState({ isErrorOld: true }, ()=>{
                return
            })
        } else if ((pNew === "") || (pNew === undefined)){
            this.setState({ isErrorNew: true }, ()=>{
                return
            })
        } else if ((pConfirm === "") || (pConfirm === undefined)){
            this.setState({ isErrorConfirm: true }, ()=>{
                return
            })
        }
    }

    _onChangeOldPass = (text) => {
        console.log(text)
        this.setState({
            currPassword: text,
            isErrorOld:false
        })
    }

    _onChangeNewPass = (text) => {
        console.log(text)
        this.setState({
            newPassword: text,
            isErrorNew:false
        })
    }

    _onChangeConfirmPass = (text) => {
        console.log(text)
        this.setState({
            confirmPassword: text,
            isErrorConfirm:false
        })
    }

    render() {

        const isErrorOld = this.state.isErrorOld
        const isErrorNew = this.state.isErrorNew
        const isErrorConfirm = this.state.isErrorConfirm

        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={styles.container}>
                    <View style={styles.info_container}>
                        <PasswordInput
                            //containerStyle={[styles.input_container, isError ? styles.input_error : null]}
                            placeholder='Mật khẩu hiện tại'
                            label="Mật khẩu hiện tại"
                            value={this.state.currPassword}
                            onChangeText={this._onChangeOldPass}
                            errorMessage={isErrorOld ? this.state.msgErrOld : null}
                            isError={isErrorOld}
                        />

                        <PasswordInput
                            //containerStyle={styles.input_container}
                            placeholder='Mật khẩu mới'
                            label="Mật khẩu mới"
                            value={this.state.newPassword}
                            onChangeText={this._onChangeNewPass}
                            errorMessage={isErrorNew ? this.state.msgErrNew : null}
                            isError={isErrorNew}

                        />

                        <PasswordInput
                            //containerStyle={styles.input_container}
                            placeholder='Xác nhận mật khẩu mới'
                            label="Xác nhận mật khẩu mới"
                            value={this.state.confirmPassword}
                            onChangeText={this._onChangeConfirmPass}
                            errorMessage={isErrorConfirm ? this.state.msgErrConfirm : null}
                            isError={isErrorConfirm}
                        />
                    </View>


                </View>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    info_container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 5,
        paddingVertical: 20,
        borderRadius: 10,
        shadowOpacity: 1,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 0 },
        marginTop: 40
    },
    right_button: {
        width: 30,
        height: 30
    },
    input_container: {
        width: S_WIDTH - 40,
        height: 50,
        marginBottom: 20,
    },
    input_error: {
        marginBottom: 40
    }
});
