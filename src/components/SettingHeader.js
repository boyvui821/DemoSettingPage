import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

const S_WIDTH = Dimensions.get('window').width
const HEADER_HEIGHT = 120

const imgHead = require("images/comon.png")

export default class SettingHeader extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.navigation)
    }

    render() {
        return (
            <ImageBackground source={imgHead} style={[styles.container]}>
                <View style={styles.sub_container}>

                    {/* Left Button */}
                    <TouchableOpacity 
                        visible={this.props.isLeft}
                        style={[styles.left]}
                        onPress={this.props.leftPress}>
                        <Image source={this.props.leftSource} style={styles.icon}></Image>
                    </TouchableOpacity>

                    {/* title */}
                    <Text style={styles.title_text}>{this.props.title}</Text>

                    {/* Right Button */}
                    <TouchableOpacity 
                        visible={this.props.isRight} 
                        style={[styles.right]}
                        onPress={this.props.rightPress}>
                        <Image source={this.props.rightSource} style={styles.icon}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.line}/>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: HEADER_HEIGHT,
        backgroundColor: 'white'
    },
    sub_container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        alignItems: 'center',
        height: HEADER_HEIGHT - 34,
        //backgroundColor: 'pink'
    },
    title_text: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color:'white',
        textAlign:'center'
    },
    icon: {
        width: 30,
        height: 30
    },
    left: {
        marginLeft: 10
    },
    right:{
        marginRight:10
    },
    line:{
        width:'100%',
        height:1,
        backgroundColor:'grey'
    }
});
