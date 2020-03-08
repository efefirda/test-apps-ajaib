import React from 'react'
import { View, Text } from 'react-native'
import { Container } from '../../../components/container'

import { CardImage } from '../../../components/card'
import ImageExample from '../../../assets/images/bali.png'
import stylesGlobal from '../../../styles'

const SectionBaner = () => {
    return (
        <Container marginTop={20} paddingHorizontal={20}>
            <CardImage image={ImageExample} width="100%" height={200} />
            <Text style={{ fontSize: 18, marginTop: 20 }}>Wow! Reksa Dana Saham Tidak Beresiko Jangka Panjang</Text>

            <Text style={{ fontSize: 11, marginTop: 10, opacity: 0.3 }}>BBC 6h</Text>

            <View style={[stylesGlobal.row, { marginTop: 20, marginBottom: 20 }]}>
                <Text style={{ marginRight: 30, fontWeight: '500', color: 'green' }}>BBCA+0.11%</Text>

                <Text style={{ marginRight: 30, fontWeight: '500', color: 'green' }}>BBCA+0.11%</Text>
                <Text style={{ marginRight: 30, fontWeight: '500', color: 'green' }}>BBCA+0.11%</Text>
            </View>
        </Container>

    )
}

export default SectionBaner