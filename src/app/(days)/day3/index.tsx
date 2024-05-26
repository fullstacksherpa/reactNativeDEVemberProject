import {  Button } from 'react-native';
import { Link, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import MarkdownDisplay from '@/components/day3/MarkdownDisplay';

const description = `
# 📚 Today's Agenda
- Integrating Markdown with **ReactNative**
- Markdown syntax overview
- Styling Markdown content
- Recap with Q/A session
`

const DayDetailsScreen = () => {
    return (
        <SafeAreaView edges={[
            'bottom'
        ]} style={{ flex: 1 }}>
            <Stack.Screen options={{ title: 'Day 3: Markdown' }} />
            <MarkdownDisplay >{description}</MarkdownDisplay>

            <Link href='/day3/editor' asChild>
                <Button title='Go to editor' />
            </Link>
        </SafeAreaView>
        
    )
}

export default DayDetailsScreen;