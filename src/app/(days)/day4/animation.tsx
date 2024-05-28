import {View, Text, StyleSheet, Button} from 'react-native';
import LottieView from 'lottie-react-native';
import {useRef} from 'react';

const AnimationScreen = () => {
    const animation = useRef<LottieView>(null);
    return (
        <View>
            <LottieView
                ref={animation}
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: '#fff',
                }}
                source={require('@assets/lottie/netflix.json')}
            />

            <Button title='Play' onPress={() => animation.current?.play()} />
            <Button title='Pause' onPress={() => animation.current?.pause()} />
        </View>
    )

}

export default AnimationScreen;

const styles = StyleSheet.create({

});