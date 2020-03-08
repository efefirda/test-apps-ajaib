import React from 'react'
import { Image, View } from 'react-native'

import styles from './styles'

const Icon = props => {
    let { color, size, source } = props

    let iconStyles = [styles.images]
    let containerStyles = [styles.icon]
    if (color) {
        iconStyles.push({ tintColor: color })
    }
    if (size) {
        containerStyles.push({ width: size, height: size })
    }
    return (
        <View style={containerStyles}>

            <Image source={source} style={iconStyles} />
        </View>
    )
}

export default Icon