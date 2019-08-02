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
    SafeAreaView,
    Dimensions,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import SettingItem from '../components/SettingItem'

import { Avatar, Icon } from 'react-native-elements';

type Props = {};

const S_WIDTH = Dimensions.get('window').width
const S_HEIGHT = Dimensions.get('window').height

const imgPerson = require('../images/user.png')
const imgPassword = require('../images/lock.png')
const imgFaceID = require('../images/smile.png')
const imgAccount = require('../images/account.png')
const imgHistory = require('../images/history.png')

const imgPolicy01 = require('../images/policy_01.png')
const imgPolicy02 = require('../images/policy_02.png')
const imgQuestion = require('../images/question.png')
const imgLogout = require('../images/exit.png')

export default class Setting extends Component<Props> {

    constructor(props) {
        super(props)
        this._onSwitchChange = this._onSwitchChange.bind(this)
        this._onShowUserInfo = this._onShowUserInfo.bind(this)
        this._onShowQuestion = this._onShowQuestion.bind(this)
        this._onShowTermCondition = this._onShowTermCondition.bind(this)
        this._onChangePassword = this._onChangePassword.bind(this)
        this._onShowPayment = this._onShowPayment.bind(this)
    }

    _onShowUserInfo() {
        console.log("_onShowUserInfo")
        this.props.navigation.navigate('UserInfo', {
            id: 1,
            navigationTitle: "Thông tin cá nhân"
        })
    }

    _onShowPayment(){
        this.props.navigation.navigate('PaymentHistory')
    }

    _onChangePassword(){
        this.props.navigation.navigate('ChangePassword')
    }

    _onSwitchChange(value) {
        console.log(value)
        this.faceIDControl.setValueSwitch(value)
    }

    _onShowTermCondition() {
        this.props.navigation.navigate('TermCondition')
    }

    _onShowQuestion() {
        this.props.navigation.navigate('Question')
    }



    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={styles.scroll_container}>

                    <TouchableOpacity 
                        style={styles.info_container}
                        onPress={this._onShowUserInfo}
                        >
                        <View style={{ 
                            flexDirection: 'row', 
                            justifyContent: 'flex-start', 
                            alignItems: 'center' }}>
                            <Avatar
                                size="medium"
                                rounded
                                icon={{ name: 'user', type: 'font-awesome' }}
                            />

                            <View style={{ flexDirection: 'column' }}>
                                <Text style={styles.info_name}>Nguyễn Hiếu Trung</Text>
                                <Text style={styles.info_phone}>0969 999 999</Text>
                            </View>
                        </View>

                        <Icon
                            name='angle-right'
                            type='font-awesome' />

                    </TouchableOpacity>

                    <View
                        style={styles.group_setting_container}>
                        <SettingItem
                            leftIcon={imgPassword}
                            title="Đổi mật khẩu"
                            isDetail
                            isFirst
                            onPress={this._onChangePassword}>
                        </SettingItem>

                        <SettingItem
                            ref={control => this.faceIDControl = control}
                            leftIcon={imgFaceID}
                            title="Kích hoạt Face ID"
                            isControl
                            disabled={true}
                            onSwitchChange={this._onSwitchChange}>
                        </SettingItem>

                        <SettingItem
                            leftIcon={imgAccount}
                            title="Quản lí thẻ, tài khoản"
                            isDetail>
                        </SettingItem>

                        <SettingItem
                            leftIcon={imgHistory}
                            title="Lịch sử thanh toán"
                            isDetail
                            isLast
                            onPress={this._onShowPayment}>
                        </SettingItem>
                    </View>

                    <View style={styles.group_policy_container}>
                        <SettingItem
                            onPress={this._onShowTermCondition}
                            leftIcon={imgPolicy01}
                            title="Điều khoản và điều kiện sử dụng"
                            isDetail
                            isFirst>
                        </SettingItem>

                        <SettingItem
                            leftIcon={imgPolicy02}
                            title="Bản điều khoản và điều kiện chung"
                            isDetail>
                        </SettingItem>

                        <SettingItem
                            leftIcon={imgQuestion}
                            title="Câu hỏi thường gặp"
                            isDetail
                            isLast
                            onPress={this._onShowQuestion}>
                        </SettingItem>
                    </View>

                    <View style={styles.group_logout_container}>
                        <SettingItem
                            leftIcon={imgLogout}
                            style={{ borderBottomWidth: 0 }}
                            isFirst
                            isLast>
                        </SettingItem>
                    </View>



                    {/* </View> */}
                </ScrollView>

            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#212121',
    },
    scroll_container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    info_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: S_WIDTH - 40,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 20,
        shadowOpacity: 1,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 0 },
        marginBottom: 30,
        marginTop:40,
        elevation: 1
    },
    info_name: {
        fontSize: 20,
        fontWeight:'500',
        paddingLeft: 10,
        marginBottom:5
    },
    info_phone: {
        fontSize: 15,
        paddingLeft: 10
    },

    group_header_container: {
        flexDirection: 'row',
        width: S_WIDTH,
        height: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#9e9e9e',
        paddingLeft: 20
    },
    group_header_text: {
        fontSize: 15,
        fontWeight: '500'
    },
    group_setting_container: {
        width: S_WIDTH - 40,
        borderRadius: 10,
        shadowOpacity: 1,
        shadowColor: 'grey',
        shadowOffset: { width: 2, height: 0 },
        overflow: 'visible',
        marginBottom: 30,
        elevation: 1
    },
    group_policy_container: {
        width: S_WIDTH - 40,
        borderRadius: 10,
        shadowOpacity: 1,
        shadowColor: 'grey',
        shadowOffset: { width: 2, height: 0 },
        overflow: 'visible',
        marginBottom: 30,
        elevation: 1
    },
    group_logout_container: {
        width: S_WIDTH - 40,
        borderRadius: 10,
        shadowOpacity: 1,
        shadowColor: 'grey',
        shadowOffset: { width: 2, height: 0 },
        overflow: 'visible',
        marginBottom: 20,
        elevation: 1
    }
});
