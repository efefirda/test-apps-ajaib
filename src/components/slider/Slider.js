import React from 'react'
import { ScrollView, View } from 'react-native'
import { Container } from '../container'

import styles from './styles'

const Slider = ({ children }) => {
    return (
        <Container>
            <View>
                <ScrollView styles={styles.slider} showsHorizontalScrollIndicator={false} horizontal>{children}</ScrollView>
            </View>
        </Container>
    )
}

export default Slider