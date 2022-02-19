import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {DEVICE_WIDTH, DIM_COLOR, PRIMARY_COLOR} from '../../../configs/style';
import GoogleLogo from './../../../assets/icons/GoogleLogo/index';
import FacebookLogo from './../../../assets/icons/FacebookLogo/index';
import AuthTemplate from '../../../templates/AuthTemplate';
import Input from './../../../components/Input/index';
import Button from './../../../components/Button/index';
const AuthRegisterScreen = ({navigation}) => {
  const [form, setForm] = React.useState({
      fullname: null,
      phone: null,
      password: null,
      c_password: null,
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
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
    console.log(form);
  }
  return (
    <AuthTemplate title={`Segera Daftarkan\nAkunmu`}>
        <Input onChangeText={(fullname) => onChangeText('fullname', fullname)} style={{
            marginBottom:10
        }} placeholder={"Nama Lengkap"}/>
        <Input onChangeText={(phone) => onChangeText('phone', phone)} style={{
            marginBottom:10
        }} placeholder={"Nomor Ponsel atau Email"}/>
        <Input secureTextEntry={true} onChangeText={(password) => onChangeText('password', password)} style={{
            marginBottom:10
        }} placeholder={"Password"}/>
        <Input secureTextEntry={true} onChangeText={(c_password) => onChangeText('c_password', c_password)} style={{
            marginBottom:20
        }} placeholder={"Konfirmasi Password"}/>
        <Button disabled={buttonDisabled} onPress={() => prosessLogin()} buttonStyle={{
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
        }} text="Buat Akun"/>     
        <View
          style={{
            marginBottom:20,
            flexDirection: 'row',
          }}>
          <Text style={{
              color: '#000',
              fontFamily:'Inter-Regular'
          }}>Sudah punya akun?</Text>
          <TouchableOpacity  onPress={() => navigation.navigate('AuthLogin')}  style={{
              marginLeft:5
          }}>
            <Text style={{
                color: PRIMARY_COLOR,
                fontFamily:'Inter-Bold'
            }}>Masuk yuk!</Text>
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
            }}>Atau Daftar Dengan</Text>
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
                height: 60,
                alignItems:'center',
                justifyContent:'center',
                marginRight:5,
                borderRadius:30
            }}>
              <GoogleLogo/>
            </TouchableOpacity>    
            <TouchableOpacity style={{
                backgroundColor:'#f2f2f2',
                width: 60,
                marginLeft:5,
                alignItems:'center',
                justifyContent:'center',
                height: 60,
                borderRadius:30
            }}>
              <FacebookLogo/>
            </TouchableOpacity>
        </View>
    </AuthTemplate>
  );
};

export default AuthRegisterScreen;
