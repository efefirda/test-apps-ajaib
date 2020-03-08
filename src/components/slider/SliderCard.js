import React from 'react'
import { View, Text } from 'react-native'

import { Card } from '../card'
import Slider from './Slider'
import stylesGlobal from '../../styles'
const SliderCard = props => {
    let { data } = props
    return (
        <Slider>
            {data.map((item, i) => {
                return (
                    <View style={[stylesGlobal.paddingRight20, i == 0 && stylesGlobal.paddingLeft20]}>
                        <Card width={200} height={100} color={item.color} padding={15}>
                            <Text style={[stylesGlobal.text18, stylesGlobal.marginBottom10, stylesGlobal.whiteColor]}>{item.title.length > 30 ? item.title.slice(0, 30) + '...' : item.title}</Text>
                            <Text style={stylesGlobal.whiteColor}>{item.desc}</Text>
                        </Card>
                        <Text style={[stylesGlobal.marginTop10, stylesGlobal.opacity50, stylesGlobal.text11]}> 199 orang berinvestasi disini</Text>
                    </View>
                )
            })}
        </Slider>
    )
}

export default SliderCard