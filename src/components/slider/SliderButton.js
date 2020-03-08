import React from 'react'
import { View } from 'react-native'

import { Button } from '../button'
import Slider from './Slider'

import stylesGlobal from '../../styles'

const SliderButton = props => {
    let { buttonText } = props
    return (
        <Slider>
            {buttonText.map((item, i) => {
                return (
                    <View style={[i == 0 && stylesGlobal.paddingLeft20, stylesGlobal.center]}><Button key={i} text={item.text} isActive={item.isActive} /></View>
                )
            })}
        </Slider>
    )
}

export default SliderButton