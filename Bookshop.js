import React, { useState } from 'react';
import DataBookshop from './data/bookshop.json';
import { FlatList, Text, View, TouchableOpacity, Linking, StyleSheet, Image, Modal, Button } from 'react-native';

const Bookshop = () => {
    const [selectedBookshop, setSelectedBookshop] = useState(null); // State untuk menyimpan data toko yang dipilih
    const [modalVisible, setModalVisible] = useState(false); // State untuk mengontrol visibilitas modal

    const openModal = (item) => {
        setSelectedBookshop(item);
        setModalVisible(true);
    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={DataBookshop}
                numColumns={2} // Membagi menjadi 2 kolom
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={
                    <Text style={styles.header}>List Bookshop</Text>
                }
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.cardContainer}
                        onPress={() => openModal(item)} // Membuka modal saat card ditekan
                    >
                        <View style={styles.card}>
                            <Image source={{ uri: item.image }} style={styles.cardImage} />
                            <Text style={styles.cardTitle}>{item.bookstore}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />

            {selectedBookshop && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)} // Menutup modal saat back ditekan
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={[styles.subtitle, {fontWeight: 'bold', fontSize: 22}]}>{selectedBookshop.bookstore}</Text>
                            <Text style={styles.modalTitle}>{selectedBookshop.bookshop}</Text>
                            <Image source={{ uri: selectedBookshop.image }} style={styles.modalImage} />
                            <Text style={styles.subtitle}>
                                <Text style={{ fontWeight: 'bold' }}>Address: </Text> {selectedBookshop.address}
                            </Text>
                            <Text style={styles.subtitle}>
                                <Text style={{ fontWeight: 'bold' }}>Opening hours: </Text> {selectedBookshop.hours}
                            </Text>
                            <Text style={styles.subtitle}>
                                <Text style={{ fontWeight: 'bold' }}>Rate: </Text> {selectedBookshop.ratings}
                            </Text>
                            <Text style={styles.subtitle}>
                                <Text style={{ fontWeight: 'bold' }}>Extra Space: </Text> {selectedBookshop.area}
                            </Text>
                            <Text style={styles.subtitle}>
                                <Text style={{ fontWeight: 'bold' }}>Location: </Text>{selectedBookshop.latitude}, {selectedBookshop.longitude}
                            </Text>
                            <View style={styles.buttonRow}>
                                <Button
                                    title="Navigate"
                                    onPress={() =>
                                        Linking.openURL(
                                            'google.navigation:q=' +
                                            selectedBookshop.latitude +
                                            ',' +
                                            selectedBookshop.longitude
                                        )
                                    }
                                />
                                <Button title="Close" onPress={() => setModalVisible(false)} />
                            </View>
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    );
};

export default Bookshop;

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        margin: 5, // Jarak antar card
        alignItems: 'center',
    },
    header: {
        paddingVertical: 15,
        backgroundColor: '#a0522d',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#a0522d',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
        margin: 3,
        width: 150, // Ukuran card kecil
        height: 180, // Sesuaikan tinggi card
    },
    cardImage: {
        width: 120,
        height: 120,
        borderRadius: 8,
        
    },
    cardTitle: {
        marginTop: 8,
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        flexWrap: 'wrap',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '90%',
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: -9,
    },
    modalImage: {
        width: 200,
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
    },
    subtitle: {
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: -1,
    },
    buttonRow: {
        flexDirection: 'row', // Tata letak horizontal
        justifyContent: 'space-between', // Menjaga jarak antar tombol
        marginTop: 20, // Jarak dari elemen di atas
        width: '100%', // Memenuhi lebar modal
        paddingHorizontal: 20, // Jarak dari tepi kanan dan kiri
    },
});
