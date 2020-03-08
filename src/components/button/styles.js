import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    buttonActive: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomColor: '#fff',
        borderBottomWidth: 3,
    },
    buttonDisable: {
        padding: 10,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderColor: '#d3d3d3', borderWidth: 2,
        marginRight: 10,
        borderRadius: 7,
    },
    text: {
        color: '#d3d3d3',
        fontWeight: '700'
    }
})

export default styles