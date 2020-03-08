import React from 'react'
import { Image, View } from 'react-native'

import Card from './Card'

import styles from './styles'

const CardImage = props => {
    let { image, width, height } = props
    return (
        <Card width={width} height={height}>
            <Image source={image} style={styles.images} resizeMode='cover' />
        </Card>
    )
}

export default CardImage