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

import { TagSelect } from 'react-native-tag-select';

const S_WIDTH = Dimensions.get('window').width

export default class TagComponent extends Component {
    constructor(props) {
      super(props)
        this.state = {
            currItem:[]
        }
    }
  
    render() {
      return (
          <TagSelect
            {...this.props}
            value={this.state.currItem}
            theme="default"
            max={1}
            ref={(tag)=>{
                this.tag = tag
            }}
            onItemPress={this.props.tagPress}
            data={this.props.data}
            containerStyle={styles.tags_container}
            itemStyle={styles.tag_item}
            itemLabelStyle={styles.tag_item_text}
          />
      );
    }
  }
  
  const styles = StyleSheet.create({
    tags_container: {
      width: S_WIDTH - 20,
      paddingVertical: 20,
      marginBottom:20
    },
    tag_item: {
      // borderWidth: 2,
      // borderColor: 'red'
      backgroundColor:'white',
      shadowColor:'grey',
      shadowOpacity:1,
      shadowOffset:{width:2,height:5}
    },
    tag_item_text: {
      fontSize:15,
      fontWeight:'500',
      color: '#616161'
    }
  });
  