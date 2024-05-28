import {Button} from 'react-native';
import {Link, Stack} from 'expo-router';
import {SafeAreaView} from 'react-native-safe-area-context';
import MarkdownDisplay from '@/components/day3/MarkdownDisplay';

const description = `
# 📚 Today's Agenda
- Aminated Lottie Library
`

const DayDetailsScreen = () => {
    return (
        <SafeAreaView edges={[
            'bottom'
        ]} style={{flex: 1}}>
            <Stack.Screen options={{title: 'Day 4: Splash Animation'}} />
            <MarkdownDisplay >{description}</MarkdownDisplay>

            <Link href='/day4/animation' asChild>
                <Button title='Go to Animation' />
            </Link>
            <Link href='/day4/splash' asChild>
                <Button title='Go to Splash Animation' />
            </Link>
        </SafeAreaView>

    )
}

export default DayDetailsScreen;