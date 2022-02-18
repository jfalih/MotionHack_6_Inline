import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LogoWhite from '../../assets/icons/LogoWhite';
import Button from '../../components/Button';
import { DEVICE_WIDTH, PRIMARY_COLOR } from '../../configs/style';
const OnboardingScreen = ({ navigation }) => {
    return(
        <View style={{
            flex:1,
            backgroundColor:'#fff',
            padding:20
        }}>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
            }}>
                <LinearGradient colors={['#8CDBFD','#1D81F1']} style={{
                    borderRadius:10,
                    marginRight:5,
                    alignItems:'center',
                    justifyContent:'center',
                    width: 40,
                    height: 40,
                }}>
                <Image style={{
                    width: 10,
                    height: 20,
                }} source={require('../../assets/images/LogoWhite.png')}/>
                </LinearGradient>
                <Text style={{
                    fontFamily:'Inter-Bold',
                    color:'#000',
                    fontSize:24
                }}>inline</Text>
            </View>
            <View style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Image style={{
                    width: 250,
                    height: 250,
                }} source={require('../../assets/images/UndrawWelcome.png')}/>
            </View>
            <View>
                <Text style={{
                    color:'#000',
                    fontSize:22,
                    fontFamily:'Inter-Bold'
                }}>Selamat Datang!</Text>
                <Text style={{
                    color:'#000',
                    marginBottom:20,
                    fontFamily:'Inter-Regular'
                }}>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</Text>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between'
                }}>
                    <Button onPress={() => navigation.navigate('AuthLogin')} buttonStyle={{
                        width:DEVICE_WIDTH/2-20-5,
                        height: 60,
                        borderRadius:20,
                        alignItems:'center',
                        justifyContent:'center',
                        backgroundColor: PRIMARY_COLOR,
                    }} textStyle={{
                        fontFamily:'Inter-Bold',
                        fontSize:14,
                        color:'#fff'
                    }} text="Masuk"/>
                    <Button onPress={() => navigation.navigate('AuthRegister')} buttonStyle={{
                        width:DEVICE_WIDTH/2-20-5,
                        height: 60,
                        borderRadius:20,
                        alignItems:'center',
                        justifyContent:'center',
                        borderWidth:2,
                        borderColor: PRIMARY_COLOR,
                    }} textStyle={{
                        fontFamily:'Inter-Bold',
                        fontSize:14,
                        color:PRIMARY_COLOR
                    }} text="Daftar"/>
                </View>
            </View>
        </View>
    )
}
export default OnboardingScreen;