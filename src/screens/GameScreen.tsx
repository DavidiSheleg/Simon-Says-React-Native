import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { Button, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import ColorButton from '../components/ColorButton';
import LostModal from '../components/LostModal';
import useGame from '../hooks/useGame';

const GameScreen = () => {
    const navigation = useNavigation();
    const { score, currentFlashColor, isLost, startGame, resetGame, AddStepToUserSteps } = useGame();

    useFocusEffect(
        useCallback(() => {
            resetGame();
        }, []));

    const navigateToResults = () => navigation.navigate('ResultsScreen');

    return (
        <View style={styles.root}>
            <View style={styles.btn}>
                <Button onPress={() => startGame()} title={'Start'} />
            </View>

            <View style={styles.container}>
                <ColorButton onButtonClick={() => AddStepToUserSteps(0)} color={'green'} buttonKey={0} isActive={currentFlashColor === 0 ? true : false} />
                <ColorButton onButtonClick={() => AddStepToUserSteps(1)} color={'red'} buttonKey={1} isActive={currentFlashColor === 1 ? true : false} />
                <ColorButton onButtonClick={() => AddStepToUserSteps(2)} color={'yellow'} buttonKey={2} isActive={currentFlashColor === 2 ? true : false} />
                <ColorButton onButtonClick={() => AddStepToUserSteps(3)} color={'blue'} buttonKey={3} isActive={currentFlashColor === 3 ? true : false} />
            </View>

            <View>
                <Text>Score: {score} {isLost.toString()}</Text>
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