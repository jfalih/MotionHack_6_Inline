import React from 'react'
import { Image, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import LogoWhite from '../../assets/icons/LogoWhite';
const SplashScreen = ({ navigation }) => {
    
    React.useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Onboarding');
        },2000);
    });
    return(
        <LinearGradient colors={['#8CDBFD','#1D81F1']} style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }}>
            <LogoWhite/>
            <Text style={{
                fontSize:28,
                marginTop:10,
                color:'#fff',
                fontFamily:'Inter-Bold'
            }}>inline</Text>
            <Text style={{
                color:'#fff',
                fontFamily:'Inter-Regular'
            }}>Antrean dalam genggaman</Text>
        </LinearGradient>
    )
}

export default SplashScreen;