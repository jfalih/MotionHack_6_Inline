import React from 'react'
import { View, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { DEVICE_WIDTH, DIM_COLOR, PRIMARY_COLOR } from '../../../configs/style';
import Button from '../../../components/Button';
import GoogleLogo from '../../../assets/icons/GoogleLogo';
import FacebookLogo from './../../../assets/icons/FacebookLogo/index';
import Input from '../../../components/Input';
import AuthTemplate from '../../../templates/AuthTemplate';
import dataUser from '../../../dummies/dataUser';
import { LocalPushNotification } from '../../../services/LocalPushNotification';
import { useSelector, useDispatch } from 'react-redux';
import { changeAuth } from '../../../store/auth';

const AuthLoginScreen = ({ navigation }) => {
    const [form, setForm] = React.useState({
        phone: null,
        password: null,
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(true);
    const [loading, setLoading] = React.useState(false);
    const auth = useSelector(state => state);
    console.log(auth);
    const dispatch = useDispatch();
    const [alert, setAlert] = React.useState(null);
    const onChangeText = (formName, value) => {
        setForm({
          ...form,
          [formName]: value,
        })
        if(form.fullname !== null && 
          form.phone !== null && 
          form.password !== null && 
          form.c_password !== null){
          setButtonDisabled(false)
        } 
    }

    const onPressLogin = () => {
        setLoading(true);
        setButtonDisabled(true);
        dataUser.map(val => {
            if(val.email == form.phone && val.password == form.password 
                || val.phone == form.phone && val.password == form.password){
                setTimeout(() => {
                    LocalPushNotification();
                    dispatch(changeAuth('authData', val));
                    navigation.navigate('AuthVerif');
                }, 1500);
            } else {        
                setLoading(false);
                setButtonDisabled(false);
            }
        })
    }
    return(
        <AuthTemplate title={`Selamat Datang\nKembali`}>
            <Input style={{
                marginBottom:10
            }} onChangeText={(phone) => onChangeText('phone', phone)} placeholder={"Nomor Handphone atau Email"}/>
            <Input secureTextEntry={true} onChangeText={(password) => onChangeText('password', password)} style={{
                marginBottom:20
            }} placeholder={"Password"}/>
            <Button activityIndicatorColor="#fff" loading={loading} disabled={buttonDisabled} onPress={() => onPressLogin()} buttonStyle={{
                height: 60,
                marginBottom:20,
                borderRadius:20,
                width:DEVICE_WIDTH - 40,
                alignItems:'center',
                justifyContent:'center',
                backgroundColor: buttonDisabled ? DIM_COLOR : PRIMARY_COLOR
            }} textStyle={{
                color:'#fff',
                fontFamily:'Inter-Bold'
            }} text="Masuk"/>          
            <View
            style={{
                marginBottom:20,
                flexDirection: 'row',
            }}>
            <Text style={{
                color: '#000',
                fontFamily:'Inter-Regular'
            }}>Belum punya akun?</Text>
            <TouchableOpacity 
            onPress={() => navigation.navigate('AuthRegister')}
            style={{
                marginLeft:5
            }}>
                <Text style={{
                    color: PRIMARY_COLOR,
                    fontFamily:'Inter-Bold'
                }}>Daftar yuk!</Text>
            </TouchableOpacity>
            </View>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                marginBottom:20
            }}>
                <View style={{
                    height:1,
                    backgroundColor:'#878787',
                    borderRadius:2,
                    width:(DEVICE_WIDTH - 40) / 2 - 80,
                }}>
                </View>
                <Text style={{
                    color:'#000',
                    fontFamily:'Inter-Regular',
                    marginHorizontal:10,
                    fontSize:12
                }}>Atau Masuk Dengan</Text>
                <View style={{
                    height:1,
                    borderRadius:2,
                    backgroundColor:'#878787',
                    width:(DEVICE_WIDTH - 40) / 2 - 80,
                }}>
                </View>
            </View>
            <View style={{
                flexDirection:'row'
            }}>
                <TouchableOpacity style={{
                    backgroundColor:'#f2f2f2',
                    width: 60,
                    alignItems:'center',
                    justifyContent:'center',
                    height: 60,
                    marginRight:5,
                    borderRadius:30
                }}>
                    <GoogleLogo />
                </TouchableOpacity>    
                <TouchableOpacity style={{
                    backgroundColor:'#f2f2f2',
                    width: 60,
                    alignItems:'center',
                    justifyContent:'center',
                    marginLeft:5,
                    height: 60,
                    borderRadius:30
                }}>
                    <FacebookLogo/>
                </TouchableOpacity>
            </View>
        </AuthTemplate>
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
export default AuthLoginScreen;