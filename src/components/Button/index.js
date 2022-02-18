import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
    
const Button = ({
    buttonStyle,
    textStyle,
    text,
    onPress
}) => (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
)
export default Button;