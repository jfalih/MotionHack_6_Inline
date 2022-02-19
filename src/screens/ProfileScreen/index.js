import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import SwipeContainer from 'react-native-scroll-up-container';
import Header from '../../components/Header';
import RemixIcon from 'react-native-remix-icon';
import { DIM_COLOR, PRIMARY_COLOR } from '../../configs/style';
import { useSelector, useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';
import { changeAuth } from '../../store/auth';
import { CommonActions } from '@react-navigation/native';

const ProfileScreen = ({ navigation }) => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const onPressLogout = () => {
    }
    return(
        <SwipeContainer topComponentStyle={{
            backgroundColor:'#FAFCFF'
        }} topComponent={
            <View style={{
                flex:1,
                padding:20
            }}>
                <Text style={{
                    fontSize:24,
                    marginBottom:20,
                    fontFamily:'Inter-Bold',
                    color:'#000'
                }}>Profile</Text>
                <View style={{
                    flexDirection:'row'
                }}>
                <Image source={require('../../assets/icons/orang.png')} style={{
                    width: 80,
                    height:80,
                    borderRadius:40,
                    backgroundColor:'red'
                }} />
                <View style={{
                    marginLeft:10
                }}>
                    <Text style={{
                        fontSize:16,
                        color:'#000',
                        fontFamily:'Inter-Bold'
                    }}>Hai,</Text>
                    <Text style={{
                        fontSize:24,
                        fontFamily:'Inter-Bold',
                        color:'#000'
                    }}>Andrew</Text>
                    <Text style={{
                        color:'#000',
                    }}>{auth.authData.email}</Text>
                </View>
                </View>
            </View>
        } translateY={200} overValue={50} bottomComponentStyle={{
            position: 'absolute',
            width: '100%',
            elevation:1,
            borderTopWidth:1,
            height: 800,
            borderColor:'#eee',
            borderTopLeftRadius:20,
            borderTopRightRadius:20,
            paddingBottom:80,
            backgroundColor:'#fff',
            padding:20
        }} useLine={false}>
            <View style={{
                alignSelf:'center',
                width: 50,
                height: 3,
                borderRadius:2,
                marginBottom:20,
                backgroundColor: PRIMARY_COLOR
            }}></View>
            <TouchableOpacity style={{
                padding:20,
                flexDirection:'row',
                borderColor:'#eee',
                alignItems:'center',
                borderWidth:1,
            }}>
                <RemixIcon name="settings-2-line" color={DIM_COLOR} size={24}/>
                <Text style={{
                    color:'#000',
                    marginLeft:5,
                    fontFamily:'Inter-Regular',
                    fontSize:14,
                }}>Pengaturan Akun</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                padding:20,
                borderColor:'#eee',
                flexDirection:"row",
                alignItems:'center',
                borderWidth:1,
            }}>
                <RemixIcon name="question-line" color={DIM_COLOR} size={24}/>
                <Text style={{
                    color:'#000',
                    fontSize:14,
                    marginLeft:5,
                    fontFamily:'Inter-Regular',
                }}>Bantuan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                padding:20,
                flexDirection:'row',
                borderColor:'#eee',
                alignItems:'center',
                borderWidth:1,
            }}>
                <RemixIcon name="information-line" color={DIM_COLOR} size={24}/>
                <Text style={{
                    color:'#000',
                    marginLeft:5,
                    fontFamily:'Inter-Regular',
                    fontSize:14,
                }}>Syarat Dan Ketentuan</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={{
                padding:20,
                flexDirection:'row',
                borderColor:'#eee',
                alignItems:'center',
                borderWidth:1,
            }}>
                <RemixIcon name="article-line" color={DIM_COLOR} size={24}/>
                <Text style={{
                    color:'#000',
                    marginLeft:5,
                    fontFamily:'Inter-Regular',
                    fontSize:14,
                }}>Kebijakan</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={{
                padding:20,
                flexDirection:'row',
                borderColor:'#eee',
                alignItems:'center',
                borderWidth:1,
            }}>
                <RemixIcon name="feedback-line" color={DIM_COLOR} size={24}/>
                <Text style={{
                    color:'#000',
                    marginLeft:5,
                    fontFamily:'Inter-Regular',
                    fontSize:14,
                }}>Feedback</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressLogout()} style={{
                padding:20,
                flexDirection:'row',
                borderColor:'#eee',
                alignItems:'center',
                borderWidth:1,
            }}>
                <RemixIcon name="logout-box-line" color={DIM_COLOR} size={24}/>
                <Text style={{
                    color:'#000',
                    marginLeft:5,
                    fontFamily:'Inter-Regular',
                    fontSize:14,
                }}>Keluar</Text>
            </TouchableOpacity>
        </SwipeContainer>

    )
}

export default ProfileScreen;