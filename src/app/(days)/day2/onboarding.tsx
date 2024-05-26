import { Stack, router } from "expo-router";
import { Text, View, StyleSheet, SafeAreaView, Pressable } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { GestureDetector, Gesture, Directions } from 'react-native-gesture-handler';
import Animated, { BounceInRight, FadeIn, FadeOut, SlideInLeft, SlideInRight, SlideOutLeft, SlideOutRight } from 'react-native-reanimated';

const onboardingSteps = [
    {
        icon: 'attach-money',
        title: 'Welcome #DEVember',
        description: 'Daily React Native tutorials with notJustDev.',
    },
    {
        icon: 'settings-applications',
        title: 'Learn and Grow together',
        description: 'Learn React Native by Building 24 projects to enhance your skills',
    },
    {
        icon: 'local-fire-department',
        title: 'Keep Firing ReactNative',
        description: 'it is about consistency and dedication. 2 hour per day for 30 days.',
    },
]


export default function OnboardingScreen() {
    const [screenIndex, setScreenIndex] = useState(0);

    const data = onboardingSteps[screenIndex];

    const onContinue = () => {
        const isLastScreen = screenIndex === onboardingSteps.length - 1;
        if (isLastScreen) {
            endOnboarding()
        } else {
            setScreenIndex(screenIndex + 1);
        }
    }

    const onBack = () => {
        const isLastScreen = screenIndex === 0;
        if (isLastScreen) {
            endOnboarding()
        } else {
            setScreenIndex(screenIndex - 1);
        }
    }

    const endOnboarding = () => {
        setScreenIndex(0)
        router.back();
    }


    const swipes = Gesture.Simultaneous(
        Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
        Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack),
    );
    return (
        
        <SafeAreaView style={styles.page}>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar style="light" />
            <View style={styles.stepIndicatorContainer}>
                {onboardingSteps.map((step, index) => (
                    <View key={index} style={[styles.stepIndicator, { backgroundColor: index == screenIndex ? '#cef202' : 'grey' }]} />
                ))}
            </View>

            <GestureDetector gesture={swipes}>
                <View style={styles.pageContent} key={screenIndex}>

                     <Animated.View entering={FadeIn} exiting={FadeOut}>
                    <MaterialIcons name={data.icon as any} size={190} color="#cef202" style={styles.image} />
                    </Animated.View>

                    <View style={styles.footer}>
                        <Animated.Text entering={SlideInRight} exiting={SlideOutLeft} style={styles.title}>{data.title}</Animated.Text>

                        <Animated.Text entering={SlideInRight.delay(200)} exiting={SlideOutLeft.delay(200)} style={styles.description}>{data.description}</Animated.Text>
                        <View style={styles.buttonsRow}>
                            <Text style={styles.buttonText} onPress={endOnboarding}>Skip</Text>
                            <Pressable onPress={onContinue} style={styles.button}>
                                <Text style={styles.buttonText}>Continue</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </GestureDetector>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    page: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#15141a',
        padding: 20,
    },
    image: {
        alignSelf: 'center',
        margin: 20,
        marginTop: 60,

    },
    title: {
        color: '#fdfdfd',
        fontSize: 50,
        fontWeight: 'bold',
        fontFamily: 'Inter',
        letterSpacing: 1.3,
        marginVertical: 20,
    },
    pageContent: {
        padding: 20,
        flex: 1,
    },
    description: {
        color: 'gray',
        fontSize: 18,
        fontFamily: 'InterRegular',
        lineHeight: 28,
    },
    footer: {
        marginTop: 'auto'
    },
    buttonsRow: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,

    },
    button: {
        backgroundColor: '#302e38',
        borderRadius: 50,
        alignItems: 'center',
        flex: 1,
    },
    buttonText: {
        color: '#fdfdfd',
        fontFamily: 'Inter',
        fontSize: 16,
        padding: 15,
        paddingHorizontal: 25,
    },
    stepIndicatorContainer: {
        flexDirection: 'row',
        gap: 8,
        marginHorizontal: 7
    },
    stepIndicator: {
        flex: 1,
        height: 3,
        backgroundColor: 'gray',
        borderRadius: 10,
    },
})