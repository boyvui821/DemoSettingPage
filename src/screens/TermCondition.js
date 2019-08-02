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
    ScrollView
} from 'react-native';

const S_WIDTH = Dimensions.get('window').width
const S_HEIGHT = Dimensions.get('window').height

export default class TermCondition extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title:"Điều Khoản Và Điều Kiện Sử Dụng Hợp Đồng Trực Tuyến",
            term:"- Thành lập ngày 7 tháng 9 năm 2007, Công ty TNHH MTV Tài Chính Việt  Société Générale (SGVF), tên ban đầu của HD SAISON, là công ty tài chính phi ngân hàng 100% vốn nước ngoài đầu tiên được Ngân hàng Nhà nước Việt Nam cấp giấy phép hoạt động với số vốn đầu tư lên đến 520 tỷ đồng. Mục tiêu hoạt động của SGVF là cung cấp những giải pháp tài chính trong lĩnh vực tiêu dùng cá nhân."

           + "- Chỉ sau 1 năm hoạt động, SGVF đã cung cấp dịch vụ cho hơn 35.000 lượt khách hàng, mở hơn 200 điểm giới thiệu dịch vụ và giải ngân hơn 400 tỷ đồng tại Thành phố Hồ Chí Minh. Năm 2008 công ty thành lập chi nhánh Hà Nội nhằm mục đích mở rộng quy mô và phạm vi hoạt động và đem đến dịch vụ tài chính tốt nhất và kịp thời cho ngưới tiêu dùng khu vực miền Bắc."
            
            +"- Năm 2009, SGVF mở rộng dịch vụ tại Đà Nẵng và các tỉnh miền Tây như Cần Thơ, Tiền Giang, Vĩnh Long, Đồng Tháp và An Giang."
            
            +"- Trong vòng 3 năm, đến năm 2010, SGVF đã giải ngân cho khách hàng gần 2.000 tỷ đồng để mua hàng chục nghìn xe gắn máy, TV, tủ lạnh, máy vi tính, nâng cao chất lượng cuộc sống cho hơn 100.000 lượt khách hàng. "
            
            +"- Năm 2012, SGVF đã có mặt trên 44 tỉnh thành và phục vụ hơn 350.000 lượt khách hàng."
            
            +"- Tháng 10/2013, SGVF trực thuộc Ngân hàng TMCP Phát triển TP.HCM (HDBank)  và đổi tên thành Công ty Tài chính TNHH MTV Ngân hàng TMCP Phát triển TP.HCM, gọi tắt là HDFinance."
            
            +"- Năm 2014, HDFinance có mặt tại khắp 63 tỉnh thành Việt Nam và phục vụ hơn 750.000 lượt khách hàng. Tháng 4/2015, công ty ra mắt dịch vụ Du lịch đi trước, trả sau."
            
            +"- Với sự góp vốn đầu tư chiến lược từ tập đoàn tài chính Credit Saison (Nhật Bản), ngày 22/4/2015, HDFinance chính thức đổi tên thành Công ty Tài chính trách nhiệm hữu hạn HD SAISON hay gọi tắt là HD SAISON. Từ tháng 5 đến cuối năm 2015, HD SAISON đã phát triển mạng lưới điểm giới thiệu dịch vụ thần tốc với hơn 4.500 điểm trên toàn quốc."
            
            +"- Tháng 11/2018, Ngân hàng Nhà nước đã chấp thuận cho HD SAISON tăng vốn điều lệ lên 1.400 tỷ đồng, giúp nâng cao năng lực hoạt động của công ty. Sở hữu mạng lưới giới thiệu dịch vụ rộng lớn tại 14.000 điểm, hợp tác với hơn 9.000 đối tác, phục vụ trên 5 triệu khách hàng, HD SAISON hiện là một trong những công ty tài chính lớn mạnh nhất Việt Nam."
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={styles.container}>
                    <View style={styles.sub_container}>
                        <ScrollView style={{flex:1}} contentContainerStyle={styles.scroll_container}>
                            <Text style={styles.title_text}>{this.state.title}</Text>
                        
                            <Text style={styles.content_text}>{this.state.term}</Text>
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:20
    },
    sub_container:{
        flex:1, 
        width:'100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius:10,
        backgroundColor:'white',
        shadowOpacity:1,
        shadowColor:'grey',
        shadowOffset:{width:0, height:2}
        
    },
    scroll_container:{
        justifyContent:'flex-start',
        alignItems:'center',
        padding:20
    },
    title_text:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:10
    },
    content_text:{
        fontSize:16
    }
});
