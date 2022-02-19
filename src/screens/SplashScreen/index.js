import React from 'react'
import { Image, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import LogoWhite from '../../assets/icons/LogoWhite';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
const SplashScreen = ({ navigation }) => {
    const auth = useSelector(state => state.auth);
    React.useEffect(() => {
        setTimeout(() => {
            auth.isAuth ?
            navigation.dispatch(
                CommonActions.reset({
                index: 1,
                routes: [
                    { name: 'TabNav' },
                ],
                })
            )
            :
            navigation.dispatch(
                CommonActions.reset({
                index: 1,
                routes: [
                    { name: 'Onboarding' },
                ],
                })
            );
        },2000);
    },[]);
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