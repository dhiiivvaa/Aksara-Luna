import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
    useAnimatedScrollHandler,
    useAnimatedRef,
    useSharedValue,
} from 'react-native-reanimated';
import data, { OnboardingData } from '../data/data';
import RenderItem from '../components/RenderItem';

type OnboardingProps = {
    onFinish: () => void;
};

const OnboardingScreen = ({ onFinish }: OnboardingProps) => {
    const flatlistRef = useAnimatedRef<Animated.FlatList<OnboardingData>>();
    const x = useSharedValue(0);

    const onScroll = useAnimatedScrollHandler({
        onScroll: (event) => {
            x.value = event.contentOffset.x;
        },
    });

    return (
        <View style={styles.container}>
            <Animated.FlatList
                ref={flatlistRef}
                onScroll={onScroll}
                data={data}
                renderItem={({ item, index }) => (
                    <RenderItem item={item} index={index} x={x} onFinish={onFinish} />
                )}
                keyExtractor={(item) => item.id.toString()}
                scrollEventThrottle={16}
                horizontal={true}
                bounces={false}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8E6',
    },
});
