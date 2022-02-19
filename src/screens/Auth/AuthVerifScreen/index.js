import { CommonActions } from '@react-navigation/native';
import React from 'react'
import { View, Text, TextInput } from 'react-native'
import CodeInput from 'react-native-confirmation-code-input';
import { useSelector, useDispatch } from 'react-redux';
import { DIM_COLOR, PRIMARY_COLOR } from '../../../configs/style';
import { changeAuth } from '../../../store/auth';
import AuthTemplate from '../../../templates/AuthTemplate';
const AuthVerifScreen = ({navigation}) => {
    const auth = useSelector(state => state.auth);
    const codeInputRef = React.useRef();
    const dispatch = useDispatch();
    const [alert, setAlert] = React.useState(null);
    const onProsesVerif = (isValid) => {
        if(isValid){
            dispatch(changeAuth('isAuth', true));
        } else {
            setAlert({
                isValid: false,
                message: 'Kode verifikasi salah nih :('
            })
        }
    }
    return(
        <AuthTemplate title={`Satu Langkah\nLagi!`}>
            <View style={{
                flex:1,
                padding:30,
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Text style={{
                    color:'#000',
                    fontSize:14,
                    marginBottom:20,
                    textAlign:'center',
                    fontFamily:'Inter-Regular'
                }}>Kami telah meingirimkan kode verifikasi ke { auth.authData.email ? 'email ' + auth.authData.email : 'nomor ' + auth.authData.numberphone }
                </Text>
                <CodeInput
                ref={codeInputRef}
                keyboardType="numeric"
                codeLength={4}
                compareWithCode='1234'
                autoFocus={true}          
                activeColor={PRIMARY_COLOR}
                inactiveColor={DIM_COLOR}
                codeInputStyle={{ 
                    width:60,
                    height:60,
                    color: DIM_COLOR,
                    backgroundColor:'#FAFCFF',
                    borderRadius:20,
                 }}
                onFulfill={(isValid, code) =>  onProsesVerif(isValid)}
                />

            </View>
        </AuthTemplate>
    )
}
export default AuthVerifScreen;