import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
    color: string,
    onButtonClick: Function,
    buttonKey: number,
    isActive: boolean
}

const ColorButton = (props: Props) => {

    const { color, onButtonClick, buttonKey, isActive } = props;

    return (
        <TouchableOpacity style={styles(color, isActive).root} onPress={() => onButtonClick()}>
            
        </TouchableOpacity>
    )
}

const styles = (color: string, isActive: boolean)  => StyleSheet.create({
    root: {
        flexBasis: '50%',
        width: '100%',
        height: '100%',
        backgroundColor: color,
        opacity: isActive ? 0.2 : 1
    }
});

export default ColorButton;