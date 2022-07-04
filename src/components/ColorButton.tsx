import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
    color: string,
    onButtonClick: Function,
    isFlashing: boolean,
    disabled: boolean
}

const ColorButton = (props: Props) => {

    const { color, onButtonClick, isFlashing, disabled } = props;

    return (
        <TouchableOpacity disabled={disabled} style={styles(color, isFlashing).root} onPress={() => onButtonClick()}>
            
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