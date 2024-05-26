import { PropsWithChildren } from 'react';
import { StyleSheet, ScrollView } from 'react-native'
import Markdown from 'react-native-markdown-display';


const MarkdownDisplay = ({children}: PropsWithChildren) => {
    return (
        <ScrollView style={styles.page} contentInsetAdjustmentBehavior='automatic'>
            <Markdown style={markdownStyles}>
                {children}
            </Markdown>
        </ScrollView>
    )
}

export default MarkdownDisplay;

const markdownStyles = StyleSheet.create({
    heading1: {
        fontFamily: 'Inter',
        color: '#212020',
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 40,
    },
    heading2: {
        fontFamily: 'Inter',
        color: '#404040',
        lineHeight: 30,
    },
    body: {
        fontSize: 16,
        lineHeight: 24,
    }
})

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: 10,
    }
})