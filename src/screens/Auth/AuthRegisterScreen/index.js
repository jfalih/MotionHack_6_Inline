import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {DEVICE_WIDTH, PRIMARY_COLOR} from '../../../configs/style';
import Button from '../../../components/Button';
import RemixIcon from 'react-native-remix-icon';
const AuthRegisterScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          padding: 20,
          width: '100%',
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <RemixIcon name="arrow-left-s-line" size={40} color="#000" />
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          padding: 20,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            alignSelf: 'flex-start',
            color: '#000',
            fontSize: 30,
            marginBottom: 20,
            fontFamily: 'Inter-Bold',
          }}>{`Daftarkan\nAkunmu`}</Text>
        <TextInput
          placeholder="Nama"
          placeholderTextColor="#eee"
          style={{
            height: 60,
            fontSize: 16,
            fontFamily: 'Inter-Regular',
            paddingHorizontal: 15,
            borderColor: '#eee',
            borderWidth: 1,
            color: '#000',
            borderRadius: 20,
            width: DEVICE_WIDTH - 40,
            marginBottom: 10,
            backgroundColor: '#FAFCFF',
          }}
        />
        <TextInput
          placeholder="Nomor Handphone / Email"
          placeholderTextColor="#eee"
          style={{
            height: 60,
            fontSize: 16,
            fontFamily: 'Inter-Regular',
            paddingHorizontal: 15,
            borderColor: '#eee',
            borderWidth: 1,
            color: '#000',
            borderRadius: 20,
            width: DEVICE_WIDTH - 40,
            marginBottom: 10,
            backgroundColor: '#FAFCFF',
          }}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#eee"
          style={{
            height: 60,
            fontSize: 16,
            fontFamily: 'Inter-Regular',
            paddingHorizontal: 15,
            borderColor: '#eee',
            borderWidth: 1,
            color: '#000',
            borderRadius: 20,
            width: DEVICE_WIDTH - 40,
            marginBottom: 20,
            backgroundColor: '#FAFCFF',
          }}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#eee"
          style={{
            height: 60,
            fontSize: 16,
            fontFamily: 'Inter-Regular',
            paddingHorizontal: 15,
            borderColor: '#eee',
            borderWidth: 1,
            color: '#000',
            borderRadius: 20,
            width: DEVICE_WIDTH - 40,
            marginBottom: 20,
            backgroundColor: '#FAFCFF',
          }}
        />
        <Button
          buttonStyle={{
            height: 60,
            marginBottom: 20,
            borderRadius: 20,
            width: DEVICE_WIDTH - 40,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: PRIMARY_COLOR,
          }}
          textStyle={{
            color: '#fff',
            fontFamily: 'Inter-Bold',
          }}
          text="Daftar Akun"
        />
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
                        marginRight:5,
                        borderRadius:30
                    }}>

                    </TouchableOpacity>    
                    <TouchableOpacity style={{
                        backgroundColor:'#f2f2f2',
                        width: 60,
                        marginLeft:5,
                        height: 60,
                        borderRadius:30
                    }}>

                    </TouchableOpacity>
                </View>
      </ScrollView>
      <View
        style={{
          padding: 20,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <Text
          style={{
            color: '#000',
            textAlign: 'center',
          }}>{`Dengan membuat akun kamu menyetujui Syarat & Ketentuan dan Kebijakan Privasi inline`}</Text>
      </View>
    </View>
  );
};

export default AuthRegisterScreen;
