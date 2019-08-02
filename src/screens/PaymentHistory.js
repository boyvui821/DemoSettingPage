/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, useState } from 'react';
import {
    Platform,
    StyleSheet,
    View,
    SafeAreaView,
    Dimensions,
    Button,
    TouchableOpacity,
    Image,
    Text, FlatList
} from 'react-native';

import MaterialTabs from 'react-native-material-tabs';

import { SettingHeader, FilterModal } from '../components'

const S_WIDTH = Dimensions.get('window').width
const S_HEIGHT = Dimensions.get('window').height

const imgFilter = require('../images/setting_filter.png')
const imgBack = require('../images/setting_back.png')



export default class PaymentHistory extends Component {

    static navigationOptions = ({ navigation, navigationOptions }) => {


        return {
            header: props =>
                <SettingHeader
                    title="Payment History"
                    isLeft
                    isRight
                    leftSource={imgBack}
                    rightSource={imgFilter}
                    leftPress={() => navigation.goBack()}
                    rightPress={navigation.getParam('onClickFilter')}
                >
                </SettingHeader>
            ,

        }
    };

    constructor(props) {
        super(props)

        this.state = {
            tabIndex: 0,
            histories: [
                {
                    date: "01/01/2019",
                    name: "VAY MUA XE",
                    code: "HD123456789",
                    amount: "20.000.000"
                },
                {
                    date: "01/01/2019",
                    name: "VAY MUA XE",
                    code: "HD123456789",
                    amount: "20.000.000"
                },
                {
                    date: "01/01/2019",
                    name: "VAY MUA XE",
                    code: "HD123456789",
                    amount: "20.000.000"
                },
                {
                    date: "01/01/2019",
                    name: "VAY MUA XE",
                    code: "HD123456789",
                    amount: "20.000.000"
                },
                {
                    date: "01/01/2019",
                    name: "VAY MUA XE",
                    code: "HD123456789",
                    amount: "20.000.000"
                },
                {
                    date: "01/01/2019",
                    name: "VAY MUA XE",
                    code: "HD123456789",
                    amount: "20.000.000"
                },
                {
                    date: "01/01/2019",
                    name: "VAY MUA XE",
                    code: "HD123456789",
                    amount: "20.000.000"
                },
                {
                    date: "01/01/2019",
                    name: "VAY MUA XE",
                    code: "HD123456789",
                    amount: "20.000.000"
                },
                {
                    date: "01/01/2019",
                    name: "VAY MUA XE",
                    code: "HD123456789",
                    amount: "20.000.000"
                },
                {
                    date: "01/01/2019",
                    name: "VAY MUA XE",
                    code: "HD123456789",
                    amount: "20.000.000"
                }
            ],
            filterData: [
                { label: 'Vay mua xe', value: 0 },
                { label: 'Vay mua điện thoại', value: 1 },
                { label: 'Vay mua điện máy', value: 2 },
                { label: 'Vay mua nhà', value: 3 }
            ],
            isOpenFilter: false
        }

        this._onchangeTab = this._onchangeTab.bind(this)
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.props.navigation.setParams({
            onClickFilter: this._onClickFilter
        });
    }

    _onClickFilter = () => {
        this.setState({
            isOpenFilter: true
        })
    }

    _onchangeTab(index) {
        this.setState({
            tabIndex: index
        })
    }

    hideFilterModal=()=>{
        this.setState({
            isOpenFilter: false
        })
    }

    _renderHistory = ({ item, index }) => {
        console.log(item)
        return (
            <View style={styles.table_item_container}>
                <View
                    style={{
                        flexDirection: 'row',
                        width: "100%",
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 10
                    }}>
                    <Text style={styles.text_date}>{item.date}</Text>
                    <Text style={styles.text_amount}>{item.amount}</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    width: "100%",
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Text style={styles.text_name}>{item.name + " - " + item.code}</Text>
                </View>

                {index !== (this.state.histories.length - 1) ?
                    <View style={styles.table_item_line}></View> : null
                }

            </View>
        )
    }

    render() {

        console.log("isOpenFilter-render: " + this.state.isOpenFilter)
        const tabItems = ['Khoản vay', 'Thẻ']
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <MaterialTabs
                    items={tabItems}
                    selectedIndex={this.state.tabIndex}
                    onChange={this._onchangeTab}
                    barColor="white"
                    indicatorColor="#0d47a1"
                    inactiveTextColor="#757575"
                    activeTextColor="#0d47a1"
                    textStyle={styles.tab_text}
                />
                {this.state.tabIndex === 0 ?
                    <View style={{ flex: 1, backgroundColor: '#eceff1', padding: 20 }}>
                        <View style={styles.header_table}>
                            <Text style={styles.header_table_text}>Ngày thanh toán</Text>
                            <Text style={styles.header_table_text}>Số tiền</Text>
                        </View>
                        <FlatList
                            data={this.state.histories}
                            renderItem={this._renderHistory}
                            style={styles.table_container}
                            bounces={false}
                        />
                    </View>
                    :
                    <Text>Hello Thẻ</Text>
                }

                <FilterModal
                    radioData={this.state.filterData}
                    isVisible={this.state.isOpenFilter}  
                    hideFilter={this.hideFilterModal}
                >
                </FilterModal>
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
    tab_text: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    header_table: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#0d47a1',
        paddingHorizontal: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginTop: 10
    },
    header_table_text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    scroll_container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    table_container: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    table_item_container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 80,
        backgroundColor: 'white',
        paddingHorizontal: 20
    },
    table_item_line: {
        position: 'absolute',
        height: 1,
        bottom: 0,
        left: 20,
        right: 20,
        backgroundColor: 'grey'
    },
    text_date: {
        fontSize: 16,
    },
    text_name: {
        fontSize: 16,
        fontWeight: '500'
    },
    text_amount: {
        fontSize: 16,
        fontWeight: '500',
        color: '#1565c0'
    }

});
