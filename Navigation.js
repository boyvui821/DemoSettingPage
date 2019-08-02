
import React, { Component } from 'react';
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View,
  Dimensions,Button, Image
} from 'react-native';

import { createStackNavigator, createAppContainer, SafeAreaView } from "react-navigation";
import Setting from './src/screens/Setting'
import UserInfo from './src/screens/UserInfo'
import ChangePassword from './src/screens/ChangePassword'

import Question from './src/screens/Question'
import TermCondition from './src/screens/TermCondition'
import PaymentHistory from './src/screens/PaymentHistory'

import Home from './src/screens/Home'

import { SettingHeader } from './src/components'

const imgBack = require('./src/images/setting_back.png')
const imgEdit = require('./src/images/setting_edit.png')

const navigator = createStackNavigator({
    Setting: {
        screen: Setting,
        navigationOptions: ({ navigation }) => ({
            header: props =>
                <SettingHeader 
                    title="Setting"
                    isLeft
                    leftSource={imgBack}
                >
                </SettingHeader>
            ,
            headerBackTitle: null
        }),
    },
    UserInfo: {
        screen: UserInfo,
        // navigationOptions: ({ navigation }) => ({
        //     header: props =>
        //         <SettingHeader 
        //             title="Thông tin cá nhân"
        //             isLeft
        //             //isRight
        //             leftSource={imgBack}
        //             //rightSource={imgEdit}
        //             leftPress={()=> navigation.goBack()}
        //         >
        //         </SettingHeader>
        //     ,
        //     headerBackTitle: null

        // })
    },
    PaymentHistory:{
        screen:PaymentHistory
    },

    ChangePassword: {
        screen: ChangePassword,
        // navigationOptions: ({ navigation }) => ({
        //     header: props =>
        //         <SettingHeader 
        //             title="Thông tin cá nhân"
        //             isLeft
        //             //isRight
        //             leftSource={imgBack}
        //             //rightSource={imgEdit}
        //             leftPress={()=> navigation.goBack()}
        //         >
        //         </SettingHeader>
        //     ,
        //     headerBackTitle: null

        // })
    },

    Question: {
        screen: Question,
        navigationOptions: ({ navigation }) => ({
            header: props =>
                <SettingHeader 
                    title="Câu hỏi thường gặp"
                    isLeft
                    //isRight
                    leftSource={imgBack}
                    //rightSource={imgEdit}
                    leftPress={()=> navigation.goBack()}
                >
                </SettingHeader>
            ,
            headerBackTitle: null

        })
    },
    TermCondition: {
        screen: TermCondition,
        navigationOptions: ({ navigation }) => ({
            header: props =>
                <SettingHeader 
                    title={"Điều khoản" + "\n" + "và điều kiện sử dụng"}
                    isLeft
                    leftSource={imgBack}
                    leftPress={()=> navigation.goBack()}
                >
                </SettingHeader>
            ,
            headerBackTitle: null

        })
    },
    Home:{
        screen:Home,
        navigationOptions: ({ navigation }) => ({
            header: null,
            headerBackTitle: null

        })
    }

},{
    initialRouteName:"Setting"
})

export default createAppContainer(navigator)