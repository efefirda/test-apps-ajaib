import ImageExample from '../../../assets/images/bali.png'

const buttonArray = [
    {
        text: 'Berita',
        isActive: true
    },
    {
        text: 'Komunitas',
        isActive: false
    },
    {
        text: 'Belajar',
        isActive: false
    },
]
const buttonText = [
    {
        text: 'Populer',
        isActive: false
    },
    {
        text: 'Reksa Dana',
        isActive: true
    },
    {
        text: 'Belajar',
        isActive: false
    },
    {
        text: 'Investor',
        isActive: false
    },
    {
        text: 'BUMN',
        isActive: false
    },

]
const recomended = [
    {
        title: 'CIMB-Principal Dana Saham Melonjak',
        desc: 'Return + 12.45%',
        color: '#3a83f9'
    },
    {
        title: 'RHB Dana Saham',
        desc: 'Return + 12.45%',
        color: '#3a83f9'

    },
    {
        title: 'Trimega Dana Saham yang Sangat Besar',
        desc: 'Return + 12.45%',
        color: '#3a83f9'

    },

]
const listTrending = [
    {
        title: 'Wow! Reksa Dana Saham TIdak Berisiko Jangka Panjang. Saham ini beresiko sangat tinggi',
        desc: 'Yahoo.com',
        duration: '7h',
        image: ImageExample,
        data: [
            {
                value: 'BBCA +0.11%',
                isMinus: false
            },
            {
                value: 'BBCA +0.11%',
                isMinus: false
            },
            {
                value: 'BBCA +0.11%',
                isMinus: false
            }
        ]
    },
    {
        title: 'Wow! Reksa Dana Saham Tidak Berisiko Jangka Panjang',
        desc: 'Yahoo.com',
        duration: '7h',
        image: ImageExample,
        data: [
            {
                value: 'BBCA -0.11%',
                isMinus: true
            },
            {
                value: 'BBCA -0.11%',
                isMinus: true
            }
        ]
    },
    {
        title: 'Wow! Reksa Dana Saham TIdak Berisiko Jangka Panjang',
        desc: 'Yahoo.com',
        duration: '7h',
        image: ImageExample,
        data: [
            {
                value: 'BBCA -0.11%',
                isMinus: true
            },
            {
                value: 'BBCA -0.11%',
                isMinus: true
            }
        ]
    },

]

export { buttonArray, buttonText, listTrending, recomended }