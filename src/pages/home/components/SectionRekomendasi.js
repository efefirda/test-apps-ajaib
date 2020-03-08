import React from 'react'
import { View, Text } from 'react-native'
import { Container } from '../../../components/container'
import { SliderCard } from '../../../components/slider'
import stylesGlobal from '../../../styles'
const SectionRekomendasi = props => {
    let { data } = props
    return (
        <Container marginTop={20}>
            <Text style={[stylesGlobal.paddingHorizontal20, stylesGlobal.marginBottom20, stylesGlobal.text18, stylesGlobal.textBold]}>Rekomendasi Reksa Dana Hari Ini</Text>
            <SliderCard data={data} />
        </Container >
    )
}

export default SectionRekomendasi