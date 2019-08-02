import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Animated,
    TouchableWithoutFeedback,
    TouchableHighlight,
    SafeAreaView,
    Dimensions,
    ScrollView
} from 'react-native';

import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';

const S_WIDTH = Dimensions.get('window').width

const imgExpand = require('images/icon-add.png')
const imgCollapse = require('images/icon-sub.png')

export default class QuestionComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeSections: []
        }
    }

    // _renderSectionTitle = section => {
    //     return (
    //         <View style={styles.content}>
    //             <Text>{section.content}</Text>
    //         </View>
    //     );
    // };

    _renderHeader(content, index, isActive, sections){
        
        const section = sections[index]

        return (
            <View style={[styles.section_container, !isActive ? { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 } : null]}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Text style={styles.section_title_text}>{section.title}</Text>
                </View>
                <Image source={isActive ? imgCollapse : imgExpand} style={styles.section_img}></Image>
            </View>
        ); 
    }


    _renderContent = (section, i, isActive, sections) => {
        return (
            <View style={styles.content_container}>
                <View style={{ height: 0.5, backgroundColor: 'grey', width: S_WIDTH - 100 }}></View>
                <Text
                    style={{ padding: 10 }}
                >
                    {section.content}
                </Text>
            </View>
        );
    };

    _updateSections = activeSections => {
        console.log(activeSections)
        var questions = this.props.questions

        questions.forEach((item, idx) => {
            if (activeSections.includes(idx)) {
                item.isOpening = true
            } else {
                item.isOpening = false
            }
        });

        this.setState({
            activeSections,
            questions: questions
        });
    };

    componentDidUpdate() {
        console.log("Question component didupdate")
        console.log("activies activeSections: " + this.state.activeSections)
    }

    render() {
        return (
            <ScrollView
                //style={{ flex: 1 }}
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center', marginTop: 10,
                    marginBottom: 10,
                    //backgroundColor: 'grey'
                }}>

                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 20,
                        paddingVertical: 10
                    }}>

                    <Accordion
                        sections={this.props.questions}
                        activeSections={this.state.activeSections}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                        onChange={this._updateSections}
                        expandMultiple={true}
                        underlayColor="transparent"
                        // style={
                        //     {
                        //         justifyContent: 'center',
                        //         alignItems: 'center'
                        //     }

                        // }
                        containerStyle={{
                            shadowOpacity: 1,
                            shadowColor: 'grey',
                            shadowOffset: { width: 2, height: 2 }
                        }}
                        sectionContainerStyle={{ marginBottom: 10 }}
                    />
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    section_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // width: S_WIDTH - 40,
        height: 80,
        //borderBottomWidth: 2,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        // shadowOpacity: 1,
        // shadowColor: 'grey',
        // shadowOffset: { width: 0, height: 0 }
    },
    section_img: {
        width: 15,
        height: 15
    },
    section_title_text: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingRight: 10
    },
    content_container: {
        //borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        // shadowOpacity: 1,
        // shadowColor: 'grey',
        // shadowOffset: { width: 2, height: 2 }
    }
});
