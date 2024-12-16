import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    Header,
    LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
    title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.card}>
            <Text
                style={[
                    styles.cardTitle,
                    {
                        color: 'black',
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.cardDescription,
                    {
                        color: 'black',
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
}

function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <Header />
                <View
                    style={{
                        backgroundColor: '#a0522d',
                        padding: 20,
                    }}>
                    <Section title="Nama">
                        Dhiva Nur Isnaeni
                    </Section>
                    <Section title="NIM">
                        22/506069/SV/22054
                    </Section>
                    <Section title="Program Studi">
                        Sistem Informasi Geografis
                    </Section>
                    <Section title="Fakultas">
                        Departemen Teknologi Kebumian
                        Sekolah Vokasi Universitas Gadjah Mada
                    </Section>
                    <Section title="Link Media Sosial">
                        Get to know me closer!!!
                    </Section>
                    <LearnMoreLinks />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 8,
        padding: 20,
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 3, // For shadow on Android
        shadowColor: '#000', // For shadow on iOS
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        alignItems: 'center', // Untuk horizontal center
        justifyContent: 'center', // Untuk vertical center
        textAlign: 'center', // Menjaga teks tetap center jika lebih dari satu baris
    },
    cardTitle: {
        color: 'brown',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
    },
    cardDescription: {
        fontSize: 16,
        fontWeight: '400',
        marginTop: -7,
        textAlign: 'center'
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;