import React from 'react'
import { View, Text } from 'react-native'
import { ButtonTab } from '../button'

import styles from './styles'
import stylesGlobal from '../../styles'

const Header = props => {
    let { text, buttonArray } = props;

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.text}>{text}</Text>
                <ButtonTab buttonArray={buttonArray} />
            </View>
        </View>

    )
}

export default Header