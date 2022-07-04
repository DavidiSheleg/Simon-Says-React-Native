import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

const ResultsScreen = () => {
    const navigation = useNavigation();
    const results = useSelector((state: RootState) => state.results);

    let topTen = [...results.data];
    topTen = topTen.sort(({ score: a }, { score: b }) => b - a);
    topTen = topTen.slice(0, 10);

    return (
        <View style={styles.root}>
            <Text style={styles.header}>Top 10 Results</Text>
            <FlatList
                data={topTen}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <Text>{item.name}</Text>
                        <Text>{item.score}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => `key${index}`}
                ItemSeparatorComponent={() => <View style={styles.lineStyle} />}
            />
            <View style={styles.btn}>
                <Button onPress={() => navigation.navigate('GameScreen')} title={'New Game'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        margin: 20,
    },
    header: {
        fontSize: 22,
        color: '#2196F3',
        marginVertical: 30,
    },
    btn: {
        width: 200,
        maxWidth: '80%',
        marginBottom: 20
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 150
    },
    lineStyle: {
        borderWidth: 0.3,
        borderColor: 'gray',
        marginVertical: 10
    }
});

export default ResultsScreen;