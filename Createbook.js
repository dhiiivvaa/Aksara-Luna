import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, TextInput, Button, StyleSheet, Text } from 'react-native';

const Createdata = () => {
    const jsonUrl = 'http://192.168.1.27:3000/bookshops';
    const [bookshop, setBookshop] = useState('');
    const [address, setAddress] = useState('');
    const [hours, setHours] = useState('');
    const [rating, setRating] = useState('');
    const [area, setArea] = useState('');

    const submit = () => {
        const data = {
            bookshop: bookshop,
            address: address,
            hours: hours,
            rating: rating,
            area: area,
        };

        fetch('http://192.168.1.27:3000/bookshops', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                alert('Data tersimpan');
                setBookshop('');
                setAddress('');
                setHours('');
                setRating('');
                setArea('');
            })
            .catch((error) => {
                console.error(error);
                alert('Terjadi kesalahan saat menyimpan data');
            });
    };

    return (
        <SafeAreaView>
            <View>
                <Text style={styles.title}>Add Bookshop</Text>
                <ScrollView style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Bookshop Name"
                        placeholderTextColor="grey"
                        value={bookshop}
                        onChangeText={(value) => setBookshop(value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Address"
                        placeholderTextColor="grey"
                        value={address}
                        onChangeText={(value) => setAddress(value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Opening Hours"
                        placeholderTextColor="grey"
                        value={hours}
                        onChangeText={(value) => setHours(value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Rating"
                        placeholderTextColor="grey"
                        value={rating}
                        onChangeText={(value) => setRating(value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Extra Space"
                        placeholderTextColor="grey"
                        value={area}
                        onChangeText={(value) => setArea(value)}
                    />

                    <Button title="Save" style={styles.button} onPress={submit} />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default Createdata;

const styles = StyleSheet.create({
    title: {
        paddingVertical: 12,
        backgroundColor: '#deb887',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    form: {
        padding: 10,
        marginBottom: 100,
    },
    input: {
        color: 'green', // Warna teks yang dimasukkan pengguna
        borderWidth: 1,
        borderColor: '#777',
        borderRadius: 8,
        padding: 8,
        width: '100%',
        marginVertical: 5,
    },
    button: {
        marginVertical: 10,
    },
});
