import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import ColorButton from '../components/ColorButton';
import LostModal from '../components/LostModal';
import useGame from '../hooks/useGame';
import { useDispatch } from 'react-redux';
import { addResult } from '../redux/resultsSlice';

const GameScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { score, currentFlashColor, isLost, flashCount, startGame, resetGame, AddStepToUserSteps } = useGame();

    useFocusEffect(
        useCallback(() => {
            resetGame();
        }, []));

    const navigateToResults = (userName: string) => {
        dispatch(addResult({ name: userName, score }));
        navigation.navigate('ResultsScreen');
    }

    const controls = [
        {
            key: 0,
            color: 'green',
        },
        {
            key: 1,
            color: 'red',
        },
        {
            key: 2,
            color: 'yellow',
        },
        {
            key: 3,
            color: 'blue',
        },
    ];

    return (
        <View style={styles.root}>
            <View style={styles.container}>
                {
                    controls.map(({ key, color }) => (
                        <ColorButton
                            key={key}
                            onButtonClick={() => AddStepToUserSteps(key)}
                            color={color}
                            isFlashing={currentFlashColor === key ? true : false}
                            disabled={flashCount > 0}
                        />
                    ))
                }
            </View>

            <View style={styles.btn}>
                <Button onPress={() => startGame()} title={'Start'} />
            </View>

            <View>
                <Text>Score: {score}</Text>
            </View>

            <LostModal
                resetGame={resetGame}
                navigateToResults={navigateToResults}
                isLost={isLost}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        margin: 20,
    },
    btn: {
        width: 200,
        maxWidth: '80%',
        marginBottom: 20
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 200,
        maxHeight: '40%',
        marginTop: 50,
        marginBottom: 230
    },
});

export default GameScreen;