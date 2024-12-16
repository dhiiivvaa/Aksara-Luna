import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import Animated, { useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated';
import { SharedValue } from 'react-native-reanimated/lib/typescript/commonTypes';
import { OnboardingData } from '../data/data';

type Props = {
    item: OnboardingData;
    index: number;
    x: SharedValue<number>;
    onFinish: () => void;
};

const RenderItem = ({ item, index, x, onFinish }: Props) => {
    const { width: SCREEN_WIDTH } = useWindowDimensions();

    const circleAnimation = useAnimatedStyle(() => {
        const scale = interpolate(
            x.value,
            [
                (index - 1) * SCREEN_WIDTH,
                index * SCREEN_WIDTH,
                (index + 1) * SCREEN_WIDTH,
            ],
            [1, 4, 4],
            Extrapolate.CLAMP
        );
        return {
            transform: [{ scale: scale }],
        };
    });

    return (
        <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
            <View style={styles.circleContainer}>
                <Animated.View
                    style={[
                        {
                            width: SCREEN_WIDTH,
                            height: SCREEN_WIDTH,
                            backgroundColor: item.backgroundColor,
                            borderRadius: SCREEN_WIDTH / 2,
                        },
                        circleAnimation,
                    ]}
                />
            </View>
            <View>
                <LottieView
                    source={item.animation}
                    style={{ width: SCREEN_WIDTH * 0.9, height: SCREEN_WIDTH * 0.9 }}
                    autoPlay
                    loop
                />
            </View>
            <Text style={[styles.itemText, { color: item.textColor }]}>{item.text}</Text>
            {index === 2 && ( // Show button only on the last screen
                <TouchableOpacity
                    style={styles.button}
                    onPress={onFinish}
                >
                    <Text style={styles.buttonText}>Let's Go</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default RenderItem;

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 120,
        backgroundColor: '#FFF8E6',
    },
    itemText: {
        textAlign: 'center',
        fontSize: 44,
        fontWeight: 'bold',
        marginBottom: 10,
        marginHorizontal: 20,
    },
    circleContainer: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: -40,
    },
    button: {
        backgroundColor: '#005b4f',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
