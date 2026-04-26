import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [data, setData] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts');
            let result = await response.json();

            setData(result);
        }

        fetchData();
        
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                contentContainerStyle={styles.listContainer}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemBody}>{item.body}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
    },
    listContainer: {
        padding: 20,
        gap: 10
    },
    item: {
        backgroundColor: '#ffffff',
        elevation: 4,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
    itemTitle: {
        fontWeight: 700,
        fontSize: 16
    },
    itemBody: {
        fontWeight: 300,
        fontSize: 12,
        marginTop: 6

    }
})