import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

const ResultsScreen = () => {
    const navigation = useNavigation();
    const results = useSelector((state: RootState) => state.results);

    console.log(results);
    return (
        <View style={styles.root}>
            <Text>Results Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
});

export default ResultsScreen;