import React from 'react'
import { View, Text } from 'react-native'
import stylesGlobal from '../../styles'
import { Container } from '../container'
import CardImage from './CardImage'
const CardTrending = props => {
    let { image, title, desc, data } = props
    return (
        <Container paddingHorizontal={20}>
            <View style={stylesGlobal.row}>
                <View style={stylesGlobal.width70}>
                    <Text style={[stylesGlobal.text16, stylesGlobal.textBold]}>{title}</Text>
                    <Text style={[stylesGlobal.marginTop10, stylesGlobal.opacity50, stylesGlobal.text11]}>{desc}</Text>
                </View>
                <View style={[stylesGlobal.width30, stylesGlobal.rightCenter]}>
                    <CardImage image={image} width={70} height={70} />
                </View>
            </View>
            <View style={[stylesGlobal.row, { marginTop: 20, marginBottom: 20 }]}>

                {data.map((item, i) => {
                    return (
                        <Text style={{ fontSize: 14, marginRight: 30, fontWeight: '500', color: !item.isMinus ? 'green' : 'red' }}>{item.value}</Text>
                    )
                })}
            </View>
        </Container>
    )
}

export default CardTrending