import { Pressable, Text, StyleSheet } from 'react-native'
import { Link } from 'expo-router'

export default function DayDetails() {
    return (
        <Link href={'/'} asChild>
            <Pressable style={styles.container}><Text style={styles.text}>Hello, I am Single Page</Text></Pressable>
        </Link>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontFamily: 'Amatic',
        color: 'black',
    }
})