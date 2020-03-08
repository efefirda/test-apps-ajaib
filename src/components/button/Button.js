import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './styles'

const Button = props => {
    let { isActive, text } = props

    let buttonStyles = [styles.button]
    let textStyles = [styles.text]

    if (isActive) {
        buttonStyles.push({ borderColor: '#3a83f9', borderWidth: 2, backgroundColor: '#f8fbff', height: 40 })

        textStyles.push({ color: '#3a83f9', fontWeight: '700', })
    }
    return (
        <TouchableOpacity style={buttonStyles}>
            <Text style={textStyles}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button