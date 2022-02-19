import React from 'react'
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
    
const Button = ({
    buttonStyle,
    textStyle,
    text,
    onPress,
    disabled,
    loading,
    activityIndicatorColor,
}) => (
    <TouchableOpacity 
    disabled={loading ? loading : disabled}
    onPress={onPress} 
    style={buttonStyle}>
        {loading ?
            <ActivityIndicator size="small" color={activityIndicatorColor} />
            :
            <Text style={textStyle}>{text}</Text>
        }
    </TouchableOpacity>
)
export default Button;