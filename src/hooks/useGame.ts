import React, { useEffect, useState } from "react";
import Sound from "react-native-sound";

export default function useGame() {

    const [currentUserSteps, setCurrentUserSteps] = useState<Array<number>>([]);
    const [selectedSteps, setSelectedSteps] = useState<Array<number>>([]);
    const [flashCount, setFlashCount] = useState<number>(0);
    const [currentFlashColor, setCurrentFlashColor] = useState<number | null>();
    const [isLost, setIsLost] = useState<boolean>(false);

    const score: number = selectedSteps.length;

    const clickSound = new Sound('clicksound.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the click sound', error);
            return;
        }
    });

    const flashSound = new Sound('flashsound.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the flash sound', error);
            return;
        } 
    });

    const flashColorAction = () => {
        const currentColor = selectedSteps[flashCount - 1];
        setCurrentFlashColor(currentColor);
        setFlashCount(flashCount - 1);
        flashSound.play();
 
        const delay = setTimeout(() => {
            setCurrentFlashColor(null);
        }, 1000);

    }


    function getRandomStep(): number {
        const min = Math.ceil(0);
        const max = Math.floor(3);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const resetGame = () => {
        setCurrentUserSteps([]);
        setSelectedSteps([]);
        setIsLost(false);
    }

    const startGame = () => {
        setIsLost(false);
        const randomStep = getRandomStep();
        setCurrentUserSteps([]);
        setSelectedSteps([randomStep]);
        setFlashCount(1);
    }

    const AddStep = () => {
        const randomStep = getRandomStep();
        setSelectedSteps([randomStep, ...selectedSteps]);
        setCurrentUserSteps([]);
        setFlashCount(selectedSteps.length + 1);
    }

    const AddStepToUserSteps = (key: number) => {
        setCurrentUserSteps([key, ...currentUserSteps]);
        clickSound.play();
    }

    // Flash the colors
    useEffect(() => {
        if (flashCount == 0) {
            return;
        }
        const id = setInterval(flashColorAction, 1500);
        return () => {
            clearInterval(id);
        }

    }, [flashCount]);

    // Check if the user finish selection
    useEffect(() => {
        const selectedStepsLen = selectedSteps.length;
        const currentUserStepsLen = currentUserSteps.length;
        if (selectedStepsLen == 0 || currentUserStepsLen == 0)
            return;

        if (selectedStepsLen === currentUserStepsLen) {
            for (let i = 0; i < selectedStepsLen; i++) {
                if (selectedSteps[i] !== currentUserSteps[i]) {
                    setIsLost(true);
                    return;
                }
            }
            console.log('Next Step');
            AddStep();
        }
    }, [currentUserSteps]);

    return {
        score,
        currentFlashColor,
        isLost,
        flashCount,
        startGame,
        resetGame,
        AddStepToUserSteps
    }

}