import React from "react";
import { TouchableOpacity, Text, View, StyleProp, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
    changeFunction: (text: string) => void;
    textButton: string;
    style?: StyleProp<ViewStyle | TextStyle>;
}

export const SimpleButton: React.FC<ButtonProps> = ({ changeFunction, textButton, style }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => changeFunction(textButton)}
                style={style}
            >
                <Text>{textButton}</Text>
            </TouchableOpacity>
        </View>
    );
};