import { View, Text,SectionList,Image } from 'react-native'
import React from 'react'

export default function HeaderAvatar() {

    datas = [
        {
            title:"Bill Gates",
            desc:"Microsoft Company",
            image:require("../../../assets/images/billgates.jpeg")
        },
        {
            title:"Elon musk",
            desc:"Tesla Company",
            image:require("../../../assets/images/elon_musk.jpeg")
        },
        {
            title:"Jeff Bezos",
            desc:"Amazon Company",
            image:require("../../../assets/images/jeff.jpeg")
        },
        {
            title:"Joe Belfiore",
            desc:"Microsoft Company",
            image:require("../../../assets/images/joe_belfiore.webp")
        },
        {
            title:"Joe Biden",
            desc:"President American",
            image:require("../../../assets/images/joe_biden.jpeg")
        },
      ]
      

  return (
    <View style={styles.container_avartar}>
        {this.datas.map((data,index)=>(
            <View>
                <Image style={styles.avatar} source={data.image}/>
                <Text>
                    {data.title}
                </Text>
            </View>
        ))}
        
       </View>
  )
}