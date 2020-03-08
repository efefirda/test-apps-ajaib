import React from 'react'
import { View } from 'react-native'
import styles from './styles'

const Container = props => {
    let { paddingHorizontal, children, marginTop } = props
    let containerStyles = [styles.container];
    if (paddingHorizontal) {
        containerStyles.push({ paddingHorizontal: paddingHorizontal })
    }
    if (marginTop) {
        containerStyles.push({ marginTop: marginTop })
    }
    return (
        <View style={containerStyles}>{children}</View>
    )
}

export default Container