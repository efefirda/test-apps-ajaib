import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Container } from '../container'
import styles from './styles'
import stylesGlobal from '../../styles'

const ButtonTab = props => {
    let { buttonArray } = props
    return (
        <Container>
            <View style={[stylesGlobal.row, stylesGlobal.width100, stylesGlobal.spaceEvently, { marginTop: 20 }]}>
                {buttonArray.map((item, i) => {
                    return (
                        <TouchableOpacity style={item.isActive ? styles.buttonActive : styles.buttonDisable}>
                            <Text style={[!item.isActive && stylesGlobal.opacity50, stylesGlobal.whiteColor, stylesGlobal.text16, stylesGlobal.textBold]}>{item.text}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </Container>
    )
}

export default ButtonTab