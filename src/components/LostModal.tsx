import React from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';


type Props = {
    resetGame: Function,
    navigateToResults: Function,
    isLost: boolean,
}

const LostModal = (props: Props) => {

    const { resetGame, navigateToResults, isLost } = props;

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
                    <Pressable style={[styles.button, styles.buttonClose]} onPress={() => resetGame()}>
                        <Text>New Game</Text>
                    </Pressable>
                    <Pressable style={[styles.button, styles.buttonClose]} onPress={() => navigateToResults()}>
                        <Text>Results Screen</Text>
                    </Pressable>
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
        margin: 20,
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
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
});

export default LostModal;