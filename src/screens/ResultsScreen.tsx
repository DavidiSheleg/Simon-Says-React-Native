import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ResultsScreen = () => {
    const navigation = useNavigation();

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