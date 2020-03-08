import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    //width
    width100: {
        width: '100%'
    },
    width20: {
        width: '20%'
    },
    width80: {
        width: '80%'
    },
    width30: {
        width: '30%'
    },
    width70: {
        width: '70%'
    },

    //align
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightCenter: {
        alignItems: 'flex-end',
        justifyContent: 'center',
    },

    //flex
    row: {
        flexDirection: 'row'
    },

    //space
    spaceEvently: {
        justifyContent: 'space-evenly'
    },

    //text
    text16: {
        fontSize: 16
    },
    text11: {
        fontSize: 11
    },
    text20: {
        fontSize: 20
    },
    text18: {
        fontSize: 18
    },
    textBold: {
        fontWeight: '500'
    },

    //color
    blueColor: {
        color: '#3a83f9'
    },
    greyColor: {
        color: '#f4f4f4'
    },
    whiteColor: {
        color: '#fff'
    },

    //opacity
    opacity50: {
        opacity: 0.5
    },

    //margin
    marginBottom10: {
        marginBottom: 10
    },
    marginBottom20: {
        marginBottom: 20
    },
    marginTop20: {
        marginTop: 20
    },
    marginTop10: {
        marginTop: 10
    },
    marginLeft20: {
        marginLeft: 20
    },

    //padding
    paddingHorizontal20: {
        paddingHorizontal: 20
    },
    paddingRight20: {
        paddingRight: 20
    },
    paddingLeft20: {
        paddingLeft: 20
    }

})

export default styles