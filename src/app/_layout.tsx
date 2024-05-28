import {Stack} from 'expo-router'
import {useFonts, Inter_900Black, Inter_400Regular} from '@expo-google-fonts/inter';
import {AmaticSC_400Regular, AmaticSC_700Bold} from '@expo-google-fonts/amatic-sc';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect, useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AnimatedSplashScreen from '@/components/day4/AnimatedSplashScreen';

// SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false)
  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    InterRegular: Inter_400Regular,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  })

  useEffect(() => {
    if (fontsLoaded || fontError)
    {
      // SplashScreen.hideAsync();
      setAppReady(true);
    }
  }, [fontsLoaded, fontError])

  if (!appReady)
  {
    return (
      <AnimatedSplashScreen />
    );
  }
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Stack screenOptions={{}}>
        <Stack.Screen name='index' options={{title: 'DEVember'}} />
      </Stack>
    </GestureHandlerRootView>
  )
}