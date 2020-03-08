import React from 'react'
import { View } from 'react-native'
import { SliderButton } from '../../../components/slider'

import stylesGlobal from '../../../styles'

const SectionButtonSlider = props => {
    let { buttonText } = props
    return (
        <View style={[stylesGlobal.marginTop20, stylesGlobal.width100, { height: 50 }]}>
            <SliderButton buttonText={buttonText} />
        </View>
    )
}

export default SectionButtonSlider