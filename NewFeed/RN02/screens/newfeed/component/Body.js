import { View, Text,FlatList,Image, ScrollView } from 'react-native'
import React from 'react'
import styles from '../styles/styles'

export default function Body() {

    let dataBody =[
        {
            name : "Vladimir Putin",
            status : "Lorem Ipsum is simple dummy Text",
            image :  require("../../../assets/images/putin.jpeg"),
            statusOnline : "1 minutes",
            detailBody :"Chào mọi người. Tên của tôi là Thùy Linh. Tôi là 1 cô gái 12 tuổi. Khi tôi nhìn bản thân mình trong gương tôi thấy mình là cô gái tóc vàng với mái tóc dài, thẳng, mắt đen. Về ngoại hình của tôi, tôi không cao lắm và mảnh khảnh. Tôi chưa bao giờ nghĩ mình là 1 cô gái xinh đẹp, tôi ước mình có thể xinh hơn trong từng ngày. Tôi nghĩ rằng tôi thậm chí còn nóng nảy, khá dè dặt, điềm tĩnh và tự lập. Nhưng thỉnh thoảng tôi có thể đánh mất sự điềm tĩnh của mình và trở thành một người vừa nóng giận vừa buồn bực." 
        },
        {
            name : "Elonmusk",
                status : "Lorem Ipsum is simple dummy Text",
                image :  require("../../../assets/images/elon_musk.jpeg"),
                statusOnline : "4 minutes",
                detailBody :"Chào mọi người. Tên của tôi là Thùy Linh. Tôi là 1 cô gái 12 tuổi. Khi tôi nhìn bản thân mình trong gương tôi thấy mình là cô gái tóc vàng với mái tóc dài, thẳng, mắt đen. Về ngoại hình của tôi, tôi không cao lắm và mảnh khảnh. Tôi chưa bao giờ nghĩ mình là 1 cô gái xinh đẹp, tôi ước mình có thể xinh hơn trong từng ngày. Tôi nghĩ rằng tôi thậm chí còn nóng nảy, khá dè dặt, điềm tĩnh và tự lập. Nhưng thỉnh thoảng tôi có thể đánh mất sự điềm tĩnh của mình và trở thành một người vừa nóng giận vừa buồn bực." 
        },
        {
            name : "Joe Biden",
            status : "Lorem Ipsum is simple dummy Text",
            image :  require("../../../assets/images/joe_biden.jpeg"),
            statusOnline : "1 minutes",
            detailBody :"Chào mọi người. Tên của tôi là Thùy Linh. Tôi là 1 cô gái 12 tuổi. Khi tôi nhìn bản thân mình trong gương tôi thấy mình là cô gái tóc vàng với mái tóc dài, thẳng, mắt đen. Về ngoại hình của tôi, tôi không cao lắm và mảnh khảnh. Tôi chưa bao giờ nghĩ mình là 1 cô gái xinh đẹp, tôi ước mình có thể xinh hơn trong từng ngày. Tôi nghĩ rằng tôi thậm chí còn nóng nảy, khá dè dặt, điềm tĩnh và tự lập. Nhưng thỉnh thoảng tôi có thể đánh mất sự điềm tĩnh của mình và trở thành một người vừa nóng giận vừa buồn bực." 
        },
        {
            name : "Mark",
                status : "Lorem Ipsum is simple dummy Text",
                image :  require("../../../assets/images/mark.jpeg"),
                statusOnline : "1 minutes",
                detailBody :"Chào mọi người. Tên của tôi là Thùy Linh. Tôi là 1 cô gái 12 tuổi. Khi tôi nhìn bản thân mình trong gương tôi thấy mình là cô gái tóc vàng với mái tóc dài, thẳng, mắt đen. Về ngoại hình của tôi, tôi không cao lắm và mảnh khảnh. Tôi chưa bao giờ nghĩ mình là 1 cô gái xinh đẹp, tôi ước mình có thể xinh hơn trong từng ngày. Tôi nghĩ rằng tôi thậm chí còn nóng nảy, khá dè dặt, điềm tĩnh và tự lập. Nhưng thỉnh thoảng tôi có thể đánh mất sự điềm tĩnh của mình và trở thành một người vừa nóng giận vừa buồn bực." 
        },
       
      ]

    _renderItem = (data,index) =>{
    return <ScrollView>
    <View style={styles.body_container} keyExtractor={(contact, index) => String(index)}>
        <View style={styles.body_container__header}>
            <Image style = {styles.body_img} source={data.item.image}/>
            <View style = {styles.body_container__status}>
                <View>
                    <Text style={{fontSize : 14, fontWeight : "600"}}>
                    {data.item.status}
                    </Text>
                </View>
                <View style={styles.body_container__status_item}>
                    <Text>{data.item.name}</Text>
                    <Text>{data.item.statusOnline}</Text>
                </View>
            </View>
            <Image style = {styles.body_container__desc__img} source={require('../../../assets/images/menu.png')}/>

        </View>
        <View style={styles.body_container__desc}>
            <Text>
            {data.item.detailBody}
            </Text>
        </View>
        <View style={styles.body_container__desc__item}>
            <Image style = {styles.body_container__desc__img} source={require('../../../assets/heart.png')}/>
            <Text style={{marginRight:10}}>3</Text>
            <Image style = {styles.body_container__desc__img} source={require('../../../assets/comment.png')}/>
            <Text style={{marginRight:10}}>3</Text>
        </View>
    </View>
    </ScrollView>
    }

  return (
        <FlatList
            data={dataBody} //bắt buộc và phải là 1 mảng
            renderItem={(data) => _renderItem(data)} //bắt buộc , trả ra giao diện của từng phần tử đã duyệt trong mảng
            keyExtractor={(data)=> data.toString()}
            // numColumns = {"2"}
            /> 
  )
}