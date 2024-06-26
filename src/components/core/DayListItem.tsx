import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

type DayListItem = {
    day: number;
}

export default function DayListItem({day}: DayListItem) {
    return (
        <Link href={`/day${day}`} asChild>
        <Pressable style={styles.box}>
            <Text style={styles.text}>{day}</Text>
        </Pressable>
        </Link>
    ) 
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#f9ede3',
        flex: 1,
        aspectRatio: 1,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#9b4521',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    text: {
        color: '#9b4521',
        fontSize: 70,
        fontFamily: 'AmaticBold'
    }
})