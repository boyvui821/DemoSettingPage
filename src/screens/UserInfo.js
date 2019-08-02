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
import { Avatar } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';

import SettingItem from '../components/SettingItem'

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import { SettingHeader } from '../components'


const S_WIDTH = Dimensions.get('window').width
const S_HEIGHT = Dimensions.get('window').height


const imgEdit = require('../images/setting_edit.png')
const imgSave = require('../images/setting_save.png')
const imgBack = require('../images/setting_back.png')
export default class UserInfo extends Component {

    // static navigationOptions = ({ navigation }) => {
    //     console.log("navigationOptions: ")

    //     const isEditable = navigation.state.params.isEditable
    //     console.log("params: " + isEditable)
    //     return {
    //         headerRight: (
    //             <TouchableOpacity
    //                 onPress={
    //                     navigation.getParam('onClickEdit')
    //                 }
    //             >
    //                 <Image
    //                     //source={imgEdit}
    //                     source={isEditable ? imgSave : imgEdit}
    //                     style={{
    //                         width: 30,
    //                         height: 30
    //                     }}></Image>
    //             </TouchableOpacity>
    //         )

    //     }

    // };

    static navigationOptions = ({ navigation, navigationOptions }) => {
        console.log("navigationOptions: " + navigationOptions)

        const isEditable = navigation.state.params.isEditable
        console.log("params: " + isEditable)
        return {
            header: props =>
                <SettingHeader
                    title="User Info"
                    isLeft
                    isRight
                    leftSource={imgBack}
                    rightSource={isEditable ? imgSave : imgEdit}
                    leftPress={() => navigation.goBack()}
                    rightPress={navigation.getParam('onClickEdit')}
                >
                </SettingHeader>
            ,

        }

    };



    constructor(props) {
        super(props)
        console.log("constructor: " + JSON.stringify(this.props.navigation))
        var isEditable = this.props.navigation.state.params.isEditable
        if (isEditable === undefined) {
            isEditable = false
        }
        this.state = {
            fullname: "Nguyen Hieu Trung",
            username: "nhtrung",
            fullnameErr:"Vui lòng nhập họ tên !",
            phone: "001 002 003 004",
            email: "trump@united.mail.com",
            avatarSource: null,
            isEditable: isEditable,
            isError:false
        }
        this._onEditAvatar = this._onEditAvatar.bind(this)
        //this._onEditInfo = this._onEditInfo.bind(this)
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.props.navigation.setParams({
            onClickEdit: this._onClickEdit
        });
    }

    _onClickEdit = () => {
        
        var isEditable = this.props.navigation.getParam('isEditable')
        if (isEditable === undefined) isEditable = false

        

        const fName = this.state.fullname
        if ( (fName === "") || (fName === undefined) ){
            this.setState({isError:true})
        }else{
            this.props.navigation.setParams({
                isEditable: !isEditable
            })
            this.setState({ 
                isEditable: !this.state.isEditable 
            },()=>{
                console.log("complete")
            })
        }
    }

    _onEditInfo = () => {
        console.log("_onEditInfo")
    }

    _onEditAvatar() {
        const options = {
            title: 'Select Avatar',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.launchImageLibrary(options, (response) => {
            const source = { uri: response.uri };
            this.setState({
                avatarSource: source,
            });
        });
    }

    _onChangeName=(text)=>{
        console.log(text)
        this.setState({
            fullname:text
        })
    }

    render() {

        const isError = this.state.isError
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={styles.container}>
                    {/* Avatar with Icon */}
                    <View style={styles.avatar_container}>
                        <Avatar
                            size={S_WIDTH / 3}
                            rounded
                            icon={{ name: 'user', type: 'font-awesome' }}
                            showEditButton
                            onEditPress={this._onEditAvatar}
                            source={this.state.avatarSource}
                        />
                    </View>
                    <View style={styles.info_container}>
                        <View style={styles.info_sub_container}>
                            <Input
                                containerStyle={[styles.input_container,isError ? styles.input_error:null]}
                                placeholder='Họ và tên'
                                label="Họ và tên"
                                value={this.state.fullname}
                                onChangeText={this._onChangeName}
                                editable={this.state.isEditable}
                                errorMessage={isError ? this.state.fullnameErr:null}
                            />

                            <Input
                                containerStyle={styles.input_container}
                                placeholder='Tên truy cập'
                                label="Tên truy cập"
                                value={this.state.username}
                                editable={this.state.isEditable}
                            />

                            <Input
                                containerStyle={styles.input_container}
                                placeholder='Số điện thoại'
                                label="Số điện thoại"
                                value={this.state.phone}
                                editable={this.state.isEditable}
                            />

                            <Input
                                containerStyle={styles.input_container}
                                placeholder='Email'
                                label="Email"
                                value={this.state.email}
                                editable={this.state.isEditable}
                            />
                        </View>
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
    avatar_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: S_WIDTH / 3,
        aspectRatio: 1
    },
    info_container: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',       
    },
    info_sub_container:{
        backgroundColor: 'white',
        paddingHorizontal:5,
        paddingVertical:20,
        borderRadius:10,
        shadowOpacity: 1,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 0 }
    },
    right_button: {
        width: 30,
        height: 30
    },
    input_container:{ 
        width: S_WIDTH - 40, 
        height: 50, 
        marginBottom: 20,
    },
    input_error:{
        marginBottom:40
    },
    error_container:{
        height:50,backgroundColor:'blue'
    }
});
