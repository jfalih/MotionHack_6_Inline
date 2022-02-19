import React from 'react';
import { StyleSheet, TextInput } from 'react-native'
import { DEVICE_WIDTH, DIM_COLOR, PRIMARY_COLOR } from '../../configs/style';
const Input = ({
    placeholder,
    onChangeText,
    secureTextEntry = false,
    style,
}) => {
    const [focus, setFocus] = React.useState(false);
    const [disabled, setDisabled] = React.useState(true);
    const [text, setText] = React.useState('');
    return(
        <TextInput 
            onFocus={() => {
                setFocus(true) 
                setDisabled(false)
            }}
            onBlur={() => {
                setFocus(false)
                setDisabled(true)
            }}
            secureTextEntry={secureTextEntry}
            value={text}
            disabled={disabled}
            onChangeText={(text) => {
                onChangeText && onChangeText(text);
                setText(text);
            }} 
            placeholder={placeholder} 
            placeholderTextColor={focus ? PRIMARY_COLOR : DIM_COLOR} 
            style={[inputStyle.input({focus}), style]}
        />
    )
}

export default Input;

const inputStyle = StyleSheet.create({
    input: ({focus}) =>  ({
        height: 60,
        fontSize:16,
        fontFamily:'Inter-Regular',
        paddingHorizontal:15,
        borderColor: focus ? PRIMARY_COLOR : DIM_COLOR,
        borderWidth:1,
        color: focus ? PRIMARY_COLOR : DIM_COLOR,
        borderRadius:20,
        width:DEVICE_WIDTH - 40,
        backgroundColor:'#FAFCFF'
    })
})