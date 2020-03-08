import React from 'react'
import { View, TextInput } from 'react-native'
import styles from './styles'
import { Icon } from '../icon'

import IconSearch from '../../assets/icons/search.png'

const SearchBar = () => {
    return (
        <View style={styles.search}>
            <Icon source={IconSearch} color="#d2d2d2" size={18} />
            <TextInput style={styles.searchBar} placeholder="Cari Artikel"></TextInput>
        </View>
    )
}

export default SearchBar