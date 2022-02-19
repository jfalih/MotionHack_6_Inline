import React from 'react'
import { View, TouchableOpacity, Text, ScrollView, StyleSheet } from 'react-native'
import RemixIcon from 'react-native-remix-icon'
import { useNavigation } from '@react-navigation/native';

const AuthTemplate = ({
    children,
    title,
}) => {
    const navigation = useNavigation();
    return(
        <View style={authLoginStyle.wrapper}>
            <View style={authLoginStyle.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <RemixIcon name="arrow-left-s-line" size={40} color="#000"/>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={authLoginStyle.scrollContainer}>
                <Text style={authLoginStyle.titleContent}>{title}</Text>
                {children}    
            </ScrollView>
            <View style={{
                padding: 20,
                width: '100%',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#fff'
            }}>
                <Text style={{
                    color:'#000',
                    textAlign:'center'
                }}>{`Dengan membuat akun kamu menyetujui Syarat & Ketentuan dan Kebijakan Privasi inline`}</Text>
            </View>
        </View>
    )
}

const authLoginStyle = StyleSheet.create({
    wrapper: {
        flex:1,
        backgroundColor:'#fff'
    },
    header: {
        padding:20,
        width: '100%',
        backgroundColor:'#fff'
    },
    scrollContainer: {
        alignItems:'center',
        padding:20,
        justifyContent:'center'
    },
    titleContent:{
        alignSelf:'flex-start',
        color:'#000',
        fontSize:30,
        marginBottom:20,
        fontFamily:'Inter-Bold'
    }
})

export default AuthTemplate