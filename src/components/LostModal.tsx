import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';


type Props = {
    resetGame: Function,
    navigateToResults: Function,
    isLost: boolean,
    inputValue: string,
    setInputValue: Function
}

const LostModal = (props: Props) => {

    const { resetGame, navigateToResults, isLost, inputValue, setInputValue } = props;

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isLost}
            onRequestClose={() => {
                resetGame();
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text>You Lost!</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setInputValue}
                        value={inputValue}
                        placeholder="Enter your name"
                    />
                    <View style={styles.buttonsRow}>
                        <Pressable style={[styles.button, styles.successButton]} onPress={() => resetGame()}>
                            <Text>New Game</Text>
                        </Pressable>
                        <Pressable style={[styles.button, styles.infoButton]} onPress={() => navigateToResults(inputValue)}>
                            <Text>Send Results</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    input: {
        height: 40,
        margin: 14,
        borderWidth: 1,
        padding: 12,
    },
    buttonsRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    successButton: {
        backgroundColor: "#52D756",
        marginRight: 20,
    },
    infoButton: {
        backgroundColor: "#2196F3",
    },
});

export default LostModal;