import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps, StyleSheet} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({title, ...rest}: ButtonProps){
    return (
        <TouchableOpacity {...rest}
            style={styles.buttom}
            activeOpacity={0.7}
        >
            <Text style={styles.buttomText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttom: {
        backgroundColor: '#C0C0C0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 46,
        width: 231,
        paddingHorizontal: 10
    },
    buttomText: {
        color: '#000',
        fontSize: 17
    }
})