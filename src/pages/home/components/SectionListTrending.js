import React from 'react'
import { View } from 'react-native'
import { CardTrending } from '../../../components/card'
import { Container } from '../../../components/container'
const SectionListTrending = props => {
    let { data } = props
    return (
        <Container marginTop={30}>
            {data.map((item, i) => {
                return (
                    <CardTrending title={item.title} desc={item.desc} image={item.image} data={item.data} />
                )
            })}
        </Container>)
}

export default SectionListTrending