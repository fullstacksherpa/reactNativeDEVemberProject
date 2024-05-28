import {View, StyleSheet, } from 'react-native';
import LottieView from 'lottie-react-native';
import {useRef} from 'react';


const AnimatedSplashScreen = () => {
	const animation = useRef<LottieView>(null);
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black'}}>

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

export default AnimatedSplashScreen;

const styles = StyleSheet.create({

});