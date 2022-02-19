import { CommonActions } from '@react-navigation/native';
import React from 'react'
import { Image, Text, View } from 'react-native'
import Button from '../../components/Button';
import Header from '../../components/Header'
import { PRIMARY_COLOR } from '../../configs/style';
import dataHistory from './../../dummies/dataHistory';
const SuccessBookingScreen = ({ route, navigation }) => {
    const { item } = route.params;
    return(
        <View style={{
            flex:1,
        }}>
            <Header useBack title={item.title}/>
            <View style={{
                marginTop:50,    
                alignItems:'center',
                justifyContent:'center'
            }}>
            <View style={{
                padding:30,
                borderRadius:20,
                backgroundColor:'#fff',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Image style={{
                    width:200,
                    height:200,
                }} source={require('../../assets/images/Undraw_Success.png')}/>
                <Text style={{
                    color:'#000',
                    fontFamily:'Inter-Bold',
                    fontSize:24
                }}>Yeay!</Text>
                <Text style={{
                    color:'#000',
                    fontFamily:'Inter-Regular'
                }}>Antrian kamu berhasil dibooking..</Text>
            </View>
            </View>
            <View style={{
            position:'absolute',
            bottom:0,
            width:'100%',
            padding:10,
            paddingHorizontal:20,
            borderTopWidth:1,
            borderTopColor:'#eee',
            backgroundColor:'#fff',
        }}>
            <Button onPress={() => navigation.dispatch(
                CommonActions.reset({
                index: 1,
                routes: [
                    { name: 'TabNav' },
                    { name: 'DetailStatus', params: {
                        item: dataHistory[5]
                     } },
                ],
                })
            )} buttonStyle={{
                    height: 60,
                    borderRadius:20,
                    width:'100%',
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor: PRIMARY_COLOR
                }} textStyle={{
                    color:'#fff',
                    fontFamily:'Inter-Bold'
                }} text="Detail Tiket"/> 
        </View>
        </View>
    )
}

export default SuccessBookingScreen;