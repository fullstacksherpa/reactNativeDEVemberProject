import MarkdownDisplay from '@/components/day3/MarkdownDisplay';

import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Pressable } from 'react-native'




const template = `
# Markdown editor
Hello **World**


`;

const EditorScreen = () => {
    const [content, setContent] = useState(template)
    const [tab, setTab] = useState('edit');
    return (
        <View style={styles.page}>
            <View style={styles.tabsContainer}>
                <Pressable onPress={()=> setTab('edit')} style={[styles.tab, {borderColor: tab === 'edit' ? 'mediumorchid': 'gray'}]}>
                    <Text style={styles.tabText}>Edit</Text>
                </Pressable>
                <Pressable onPress={()=> setTab('preview')}  style={[styles.tab, {borderColor: tab === 'preview' ? 'mediumorchid': 'gray'}]}>
                    <Text style={styles.tabText}>Preview</Text>
                </Pressable>
            </View>
            {tab === 'edit' ? (
                <TextInput value={content} multiline numberOfLines={50} style={styles.input} onChangeText={setContent} />
            ) : (
                <MarkdownDisplay>{content}</MarkdownDisplay>
            )}


        </View>
    )
}

export default EditorScreen;

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'whitesmoke',
        flex: 1,
        paddingHorizontal: 10,
    },
    input: {
        backgroundColor: 'white',
        flex: 1,
        padding: 20,
        paddingTop: 20,
        borderRadius: 10,
        fontSize: 16,
    },
    tabsContainer: {
        flexDirection: 'row',
        gap: 10,
        marginVertical: 10,

    },
    tab: {
        flex: 1,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center',

    },
    tabText: {
        fontFamily: 'Inter'
    },
    activeTab: {
        backgroundColor: 'green',
    }
})