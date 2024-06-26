import {View, Text, StyleSheet, Button} from 'react-native';
import LottieView from 'lottie-react-native';
import {useRef} from 'react';
import {Stack} from 'expo-router'

const AnimationScreen = () => {
	const animation = useRef<LottieView>(null);
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>
			<Stack.Screen options={{headerShown: false}} />
			<LottieView
				ref={animation}
				autoPlay
				style={{
					width: '80%',
					maxWidth: 400,
					height: 900,
				}}
				source={require('@assets/lottie/netflix.json')}
			/>
		</View>
	)

}

export default AnimationScreen;

const styles = StyleSheet.create({

});