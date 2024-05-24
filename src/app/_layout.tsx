import {Stack} from 'expo-router'
import { useFonts, Inter_900Black, Inter_400Regular } from '@expo-google-fonts/inter';
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



export default function RootLayout(){
    const [fontsLoaded, fontError] = useFonts({
        Inter: Inter_900Black,
        InterRegular: Inter_400Regular,
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold,
      })
    
      useEffect(() => {
        if (fontsLoaded || fontError) {
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded, fontError])
    
      if (!fontsLoaded && !fontError) {
        return null;
      }
    return (
         <GestureHandlerRootView style={{flex: 1}}>
        <Stack screenOptions={{}}>
          <Stack.Screen name='index' options={{title: 'DEVember'}} />
        </Stack>
        </GestureHandlerRootView>
    )
}