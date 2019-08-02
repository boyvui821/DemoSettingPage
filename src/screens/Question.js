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
    Dimensions
} from 'react-native';

import {TagComponent,QuestionComponent} from '../components'

const S_WIDTH = Dimensions.get('window').width
const S_HEIGHT = Dimensions.get('window').height

export default class Question extends Component {

    constructor(props) {
        super(props)
        this.state = {
            questions: [
                {
                    title: "Lợi ích của tín dụng tiêu dùng.",
                    content: "Bạn có thể mua sản phẩm mình thích mà không cần trả hết số tiền khi mua. Bạn có thể hoacj5 định ngân sách của mình với tín dụng tiêu dùng, bản có thể biết trước số tiền phải trả hàng tháng đã định sẵn trong hợp đồng. TÍn dụng tiêu dùng cho phép bạn sắp xếp ngân quỹ của mình. Bạn không phải dùng đến khoản tiền tiết kiệm để mua sản phẩm của mình",
                    isOpening: false,
                    id: 1,
                },
                {
                    title: "Ai có thể chyển tiền cho tôi",
                    content: "Bạn có thể mua sản phẩm mình thích mà không cần trả hết số tiền khi mua. Bạn có thể hoacj5 định ngân sách của mình với tín dụng tiêu dùng, bản có thể biết trước số tiền phải trả hàng tháng đã định sẵn trong hợp đồng. TÍn dụng tiêu dùng cho phép bạn sắp xếp ngân quỹ của mình. Bạn không phải dùng đến khoản tiền tiết kiệm để mua sản phẩm của mình",
                    isOpening: false,
                    id: 2
                },
                {
                    title: "Tôi quên mật khẩu để chuyển tiền thì phải làm sao",
                    content: "Bạn có thể mua sản phẩm mình thích mà không cần trả hết số tiền khi mua. Bạn có thể hoacj5 định ngân sách của mình với tín dụng tiêu dùng, bản có thể biết trước số tiền phải trả hàng tháng đã định sẵn trong hợp đồng. TÍn dụng tiêu dùng cho phép bạn sắp xếp ngân quỹ của mình. Bạn không phải dùng đến khoản tiền tiết kiệm để mua sản phẩm của mình",
                    isOpening: false,
                    id: 3
                },
                {
                    title: "Cần giấy tờ gì để ra phòng giao dịch nhận tiền",
                    content: "Bạn có thể mua sản phẩm mình thích mà không cần trả hết số tiền khi mua. Bạn có thể hoacj5 định ngân sách của mình với tín dụng tiêu dùng, bản có thể biết trước số tiền phải trả hàng tháng đã định sẵn trong hợp đồng. TÍn dụng tiêu dùng cho phép bạn sắp xếp ngân quỹ của mình. Bạn không phải dùng đến khoản tiền tiết kiệm để mua sản phẩm của mình",
                    isOpening: false,
                    id: 4
                },
                {
                    title: "Làm thế nào để lưu người nhận vào danh sách",
                    content: "Bạn có thể mua sản phẩm mình thích mà không cần trả hết số tiền khi mua. Bạn có thể hoacj5 định ngân sách của mình với tín dụng tiêu dùng, bản có thể biết trước số tiền phải trả hàng tháng đã định sẵn trong hợp đồng. TÍn dụng tiêu dùng cho phép bạn sắp xếp ngân quỹ của mình. Bạn không phải dùng đến khoản tiền tiết kiệm để mua sản phẩm của mình",
                    isOpening: false,
                    id: 5
                },
                {
                    title: "Giới hạn để chuyển tiền trong ngân sách là bao nhiêu",
                    content: "Bạn có thể mua sản phẩm mình thích mà không cần trả hết số tiền khi mua. Bạn có thể hoacj5 định ngân sách của mình với tín dụng tiêu dùng, bản có thể biết trước số tiền phải trả hàng tháng đã định sẵn trong hợp đồng. TÍn dụng tiêu dùng cho phép bạn sắp xếp ngân quỹ của mình. Bạn không phải dùng đến khoản tiền tiết kiệm để mua sản phẩm của mình",
                    isOpening: false,
                    id: 6
                }
            ],
            filterQuestions: []

        }
    }


    componentDidMount() {
        const questions = JSON.parse(JSON.stringify(this.state.questions))
        this.setState({
            filterQuestions: questions
        })
    }

    render() {

        const data = [
            { id: 1, label: 'Money' },
            { id: 2, label: 'Credit card' },
            { id: 3, label: 'Debit card' },
            { id: 4, label: 'Online payment' },
            { id: 5, label: 'Bitcoin' },
        ];

        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={styles.container}>
                    <TagComponent
                        data={data}
                        ref={(tag) => {
                            this.tagComponent = tag;
                        }}
                        tagPress={(item) => {

                            const itemsSelected = this.tagComponent.tag.itemsSelected

                            // const questions = this.state.questions
                            const questions = JSON.parse(JSON.stringify(this.state.questions))
                            console.log(questions)

                            var filter = questions

                            if (itemsSelected.length > 0) {
                                filter = questions.filter((question) => {
                                    return question.id == itemsSelected[0].id
                                });
                            }

                            this.setState({
                                filterQuestions: filter
                            },()=>{
                                console.log("Set questions complete")
                            })
                        }} />

                    <QuestionComponent questions={this.state.filterQuestions} />
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
        backgroundColor: '#eeeeee',
    }
});
