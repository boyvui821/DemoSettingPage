

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

import Modal from "react-native-modal";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel }
    from 'react-native-simple-radio-button'

const S_WIDTH = Dimensions.get('window').width
const S_HEIGHT = Dimensions.get('window').height
const modalTitle = "LỌC THEO"



export default class FilterModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: -1,
            isVisible: true
        }
    }

    selectedValue() {
        return this.state.value
    }

    // componentDidMount() {
    //     this.setState({
    //         isVisible: this.props.isVisible
    //     })
    // }

    _onPressRadio = (selected) => {
        this.setState({
            value: selected
        })
    }

    render() {

        return (
            <Modal isVisible={this.props.isVisible} style={styles.container}
                onBackdropPress={this.props.hideFilter}>
                <View style={styles.box_container}>
                    <Text style={styles.box_header}>{modalTitle}</Text>

                    <View style={styles.radio_container}>
                        <RadioForm
                            radio_props={this.props.radioData}
                            initial={this.state.value}
                            onPress={this._onPressRadio}
                            buttonSize={10}
                            buttonOuterSize={25}
                            buttonColor={'#bdbdbd'}
                            buttonInnerColor={'#f39c12'}
                            buttonOuterColor={'#2196f3'}
                        />
                    </View>

                </View>
            </Modal>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    box_container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 200,
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    box_header: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingTop: 10
    },
    radio_container: {
        flex: 1,
        //backgroundColor: 'grey',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 20
    }
});
