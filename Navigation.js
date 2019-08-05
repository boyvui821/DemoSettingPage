
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions, Button, Image
} from 'react-native';

import { Icon } from 'react-native-elements'

import { createBottomTabNavigator, createStackNavigator, createAppContainer, SafeAreaView } from "react-navigation";
import Setting from './src/screens/Setting'
import UserInfo from './src/screens/UserInfo'
import ChangePassword from './src/screens/ChangePassword'

import Question from './src/screens/Question'
import TermCondition from './src/screens/TermCondition'
import PaymentHistory from './src/screens/PaymentHistory'

import Home from './src/screens/Home'
import Loan from './src/screens/Loan'
import Card from './src/screens/Card'
import Favors from './src/screens/Favors'


import { SettingHeader } from './src/components'

const imgHome = require('./src/images/icon_home.png')
const imgLoan = require('./src/images/icon_loan.png')
const imgCard = require('./src/images/icon_card.png')
const imgFavors = require('./src/images/icon_favors.png')
const imgSetting = require('./src/images/icon_setting.png')

const imgBack = require('./src/images/setting_back.png')
const imgEdit = require('./src/images/setting_edit.png')



const settingNavigator = createStackNavigator({
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
    },
    PaymentHistory: {
        screen: PaymentHistory
    },
    ChangePassword: {
        screen: ChangePassword,
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
                    leftPress={() => navigation.goBack()}
                >
                </SettingHeader>
            ,
            headerBackTitle: null,
            tabBarVisible: false

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
                    leftPress={() => navigation.goBack()}
                >
                </SettingHeader>
            ,
            headerBackTitle: null

        })
    },
}, {
        initialRouteName: "Setting",
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: navigation.state.routes[navigation.state.index].routeName === 'Setting' ? true : false
        }),
    })

const homeNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => (
                focused ? <Image
                    source={imgHome}
                    style={[styles.icon, { tintColor: 'red' }]}
                />
                    :
                    <Image
                        source={imgHome}
                        style={[styles.icon, { tintColor: 'grey' }]}
                    />
            ),
        }
    },
}, {
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: navigation.state.routes[navigation.state.index].routeName === 'Home' ? true : false
        }),
    })

const loanNavigator = createStackNavigator({
    Loan: Loan
}, {
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: navigation.state.routes[navigation.state.index].routeName === 'Loan' ? true : false
        }),
    }
)

const cardNavigator = createStackNavigator({
    Card: Card
}, {
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: navigation.state.routes[navigation.state.index].routeName === 'Card' ? true : false
        }),
    }
)

const favorsNavigator = createStackNavigator({
    Favors: Favors
}, {
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: navigation.state.routes[navigation.state.index].routeName === 'Favors' ? true : false
        }),
    }
)

//Bottom Tab
const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: homeNavigator,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => (
                focused ? <Image
                    source={imgHome}
                    style={[styles.icon, { tintColor: 'red' }]}
                />
                    :
                    <Image
                        source={imgHome}
                        style={[styles.icon, { tintColor: 'grey' }]}
                    />
            ),
        }
    },

    Loan: {
        screen: loanNavigator,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => (
                focused ? <Image
                    source={imgLoan}
                    style={[styles.icon, { tintColor: 'red' }]}
                />
                    :
                    <Image
                        source={imgLoan}
                        style={[styles.icon, { tintColor: 'grey' }]}
                    />
            ),
        }
    },
    Card: {
        screen: cardNavigator,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => (
                focused ? <Image
                    source={imgCard}
                    style={[styles.icon, { tintColor: 'red' }]}
                />
                    :
                    <Image
                        source={imgCard}
                        style={[styles.icon, { tintColor: 'grey' }]}
                    />
            ),
        }
    },
    Favors: {
        screen: favorsNavigator,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => (
                focused ? <Image
                    source={imgFavors}
                    style={[styles.icon, { tintColor: 'red' }]}
                />
                    :
                    <Image
                        source={imgFavors}
                        style={[styles.icon, { tintColor: 'grey' }]}
                    />
            ),
        }
    },
    Settings: {
        screen: settingNavigator,
        navigationOptions: {
            tabBarIcon: ({ focused, tintColor }) => (
                // focused ? <Image
                //     source={imgSetting}
                //     style={[styles.icon, { tintColor: 'red' }]}
                // />
                //     :
                //     <Image
                //         source={imgSetting}
                //         style={[styles.icon, { tintColor: 'grey' }]}
                //     />
                focused ?
                    <Icon
                        name="cog"
                        type='font-awesome'
                        color={'red'}
                        size={30}
                    //iconStyle={{ textAlignVertical: 'center', tintColor: 'red' }}
                    />
                    :

                    <Icon
                        name="cog"
                        type='font-awesome'
                        color={'grey'}
                        size={30}
                    //iconStyle={{ textAlignVertical: 'center', tintColor: 'grey' }} 
                    />
            ),
            tabBarLabel:({ focused, tintColor }) => (
                <Text style={{color:focused ?'red':'grey'}}>Tài khoản</Text>
            ),
        }
    },
}, {
        tabBarOptions: {
            safeAreaInset: { bottom: 'always', top: 'never' }
        }
    });

export default createAppContainer(TabNavigator)

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20
    },
    textFocus: {
        color: 'red'
    },
    textNoFocus: {
        color: 'black'
    },
});