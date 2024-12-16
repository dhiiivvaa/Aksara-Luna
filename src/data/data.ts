import { AnimationObject } from 'lottie-react-native';

export interface OnboardingData {
    id: number;
    animation: AnimationObject;
    text: string;
    textColor: string;
    backgroundColor: string;
}

const data: OnboardingData[] = [
    {
        id: 1,
        animation: require('../assets/animations/Lottie7.json'),
        text: 'Jogja, Buku, dan Kamu', 
        textColor: '#005b4f', // Hijau tua
        backgroundColor: '#D6CFB4',
    },
    {
        id: 2,
        animation: require('../assets/animations/Lottie1.json'),
        text: 'Yukk jelajahi toko buku terbaik di Jogja!!', 
        textColor: '#8B4513', // Cokelat
        backgroundColor: '#997C70',
    },
    {
        id: 3,
        animation: require('../assets/animations/Lottie8.json'),
        text: 'Temukan buku favoritmu melalui AksaráLuna', 
        textColor: 'black', // Hijau zaitun
        backgroundColor: '#A5B68D',
    },
];

export default data;
