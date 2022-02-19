import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import RemixIcon from 'react-native-remix-icon';
const Header = ({title, useBack, rightComponent}) => {
    const navigation = useNavigation();
    return(
        <View style={{
            height: 60,
            borderBottomWidth:1,
            borderColor:'#eee',
            flexDirection:'row',
            alignItems:'center',
            backgroundColor:'#fff',
            paddingHorizontal:20
        }}>
            {useBack && 
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <RemixIcon name="arrow-left-s-line" size={40} color="#000"/>    
            </TouchableOpacity>
            }
            <Text style={{
                color:'#000',
                fontSize:18,
                fontFamily:'Inter-Bold'
            }}>{title}</Text>
            {rightComponent}
        </View>
    )
}
export default Header;