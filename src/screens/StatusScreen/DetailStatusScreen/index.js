import React from 'react'
import { Image, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import QRCode from 'react-native-qrcode-svg';
import { useSelector } from 'react-redux';
import Header from '../../../components/Header';
import { PRIMARY_COLOR } from '../../../configs/style';

const DetailStatuScreen = ({
    route,
    navigation
}) => {
    const { item } = route.params;
    const auth = useSelector(state => state.auth);
    return(
        <View style={{
            flex:1
        }}>
            <Header useBack title="Detail Antrean"/>
            <View style={{
                flex:1,
                padding:20
            }}>
                <View style={{
                    padding:20,
                    backgroundColor:'#fff',
                    borderRadius:20,
                }}>
                    <View style={{
                        flexDirection:'row',
                        marginBottom:20,
                        alignItems:'center',
                    }}>
                        <LinearGradient colors={['#8CDBFD','#1D81F1']} style={{
                            borderRadius:10,
                            marginRight:5,
                            alignItems:'center',
                            justifyContent:'center',
                            width: 30,
                            height: 30,
                        }}>
                        <Image style={{
                            width: 8,
                            height: 16,
                        }} source={require('../../../assets/images/LogoWhite.png')}/>
                        </LinearGradient>
                        <Text style={{
                            fontFamily:'Inter-Bold',
                            color:'#000',
                            fontSize:16
                        }}>inline</Text>
                    </View>
                    <View style={{
                        alignItems:'center',
                        marginBottom:20,
                        justifyContent:'center'
                    }}>
                    <QRCode
                        size={200}
                        value={item.nomor}
                    />
                    </View>
                    <View style={{
                        alignItems:'center',
                        justifyContent:'center',
                        marginBottom:20
                    }}>
                    <Text style={{
                        color:'#000',
                        fontFamily:'Inter-Regular'
                    }}>Nomor Antrean</Text>
                    <Text style={{
                        fontSize:30,
                        fontWeight:"bold",
                        color:'#000'
                    }}>{item.nomor}</Text>
                    </View>
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center'
                    }}>
                        <Text style={{
                            fontSize:14,
                            color:'#000',
                            fontFamily:'Inter-Regular'
                        }}>{`Tanggal\nPemesanan`}</Text>
                        
                        <Text style={{
                            fontSize:12,
                            color:'#000',
                            fontFamily:'Inter-Bold'
                        }}>{item.pemesanan}</Text>
                    </View>
                </View>
                <View style={{
                    padding:20,
                    backgroundColor:"#fff",
                    borderRadius:20,
                    borderTopColor:'#eee',
                    borderTopWidth:1,
                }}>
                    <View style={{
                        flexDirection:"row",
                        justifyContent:'space-between',
                        alignItems:'center',
                        marginBottom:5
                    }}>
                        <Text style={{
                            fontSize:12,
                            color:'#000',
                            fontFamily:'Inter-Regular'
                        }}>Pemesan</Text>
                        <Text style={{
                            fontSize:12,
                            color:'#000',
                            fontFamily:'Inter-Bold'
                        }}>{auth.authData.fullname}</Text>
                    </View>
                    <View style={{
                        flexDirection:"row",
                        justifyContent:'space-between',
                        alignItems:'center',
                        marginBottom:5
                    }}>
                        <Text style={{
                            fontSize:12,
                            color:'#000',
                            fontFamily:'Inter-Regular'
                        }}>Tempat</Text>
                        <Text style={{
                            fontSize:12,
                            color:'#000',
                            fontFamily:'Inter-Bold'
                        }}>{item.name}</Text>
                    </View>
                    <View style={{
                        flexDirection:"row",
                        justifyContent:'space-between',
                        alignItems:'center',
                        marginBottom:5
                    }}>
                        <Text style={{
                            fontSize:12,
                            color:'#000',
                            fontFamily:'Inter-Regular'
                        }}>Estimasi</Text>
                        <Text style={{
                            fontSize:12,
                            color:'#000',
                            fontFamily:'Inter-Bold'
                        }}>{item.estimasi}</Text>
                    </View>
                    <View style={{
                        flexDirection:"row",
                        justifyContent:'space-between',
                        alignItems:'center',
                    }}>
                        <Text style={{
                            fontSize:12,
                            color:'#000',
                            fontFamily:'Inter-Regular'
                        }}>Status</Text>
                        <View style={{
                            backgroundColor:PRIMARY_COLOR,
                            padding:5,
                            paddingHorizontal:10,
                            borderRadius:5
                        }}>
                            <Text style={{
                                fontFamily:'Inter-Bold',
                                color:'#fff'
                            }}>{item.status}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default DetailStatuScreen;