import React from 'react'
import { View, Image, Text, ScrollView } from 'react-native'
import { Container } from '../../components/container'
import { Header } from '../../components/header'
import { SearchBar } from '../../components/form'
import stylesGlobal from '../../styles'
import { Seperator } from '../../components/seperator'
import SectionBaner from './components/SectionBanner'
import SectionButtonSlider from './components/SectionButtonSlider'
import SectionRekomendasi from './components/SectionRekomendasi'
import SectionListTrending from './components/SectionListTrending'

import { buttonArray, buttonText, listTrending, recomended } from './services/dataDummy'

const Home = () => {

    return (
        <Container>
            <ScrollView>
                <Header text="News & Feeds" buttonArray={buttonArray} />
                <SearchBar />
                <SectionButtonSlider buttonText={buttonText} />
                <Seperator />
                <SectionBaner />
                <Seperator />
                <SectionRekomendasi data={recomended} />
                <SectionListTrending data={listTrending} />
            </ScrollView>
        </Container>
    )
}

export default Home