import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const Card = props => {
    let { height, width, children, color, padding } = props;
    let cardStyles = [styles.card]
    if (width) {
        cardStyles.push({ width: width })
    }
    if (height) {
        cardStyles.push({ height: height })
    }
    if (color) {
        cardStyles.push({ backgroundColor: color })
    }
    if (padding) {
        cardStyles.push({ padding: padding })
    }
    return (
        <View style={cardStyles}>
            {children}
        </View>
    )
}

export default Card