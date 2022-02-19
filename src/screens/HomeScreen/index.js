import React from 'react'
import { Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import RemixIcon from 'react-native-remix-icon';
import SwipeContainer from 'react-native-scroll-up-container';
import CardPlace from '../../components/CardPlace';
import { PRIMARY_COLOR } from '../../configs/style';
import dataTempat from '../../dummies/dataTempat';
import { useSelector } from 'react-redux';
import dataCategory from '../../dummies/dataCategory';
import NumberFormat from 'react-number-format';
const HomeScreen = ({ navigation }) => {
  
    const auth = useSelector(state => state.auth);
    return(
        <SwipeContainer topComponentStyle={{
            backgroundColor:'#FAFCFF'
        }} topComponent={
            <View style={{
                flex:1,
            }}>
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    padding:20,
                    justifyContent:'center',
                }}>
                    <View style={{
                        height: 40,
                        marginRight:10,
                        flex:1,
                        alignItems:'center',
                        paddingHorizontal:20,
                        flexDirection:'row',
                        borderWidth:1,
                        borderColor:'#eee',
                        backgroundColor:'#fff',
                        borderRadius:25
                    }}>
                        <RemixIcon name="search-2-line" size={24} color="#ddd"/>
                        <Text style={{
                            marginLeft:10,
                            color:"#ddd"
                        }}>Cari ticket, tempat disini.</Text>
                    </View>
                    <TouchableOpacity style={{
                        width: 30,
                        height: 30,
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <RemixIcon name="notification-2-fill" size={30} color={PRIMARY_COLOR}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    paddingLeft:20,
                    flexDirection:'row',
                    alignItems:'center',
                }}>
                    <View>
                        <Text style={{
                            color:'#000',
                            fontSize:20,
                            fontFamily:'Inter-Regular'
                        }}>Hai,</Text>
                        <Text style={{
                            fontFamily:'Inter-Bold',
                            fontSize:28,
                            color:'#000'
                        }}>{auth.authData.fullname}</Text>
                    </View>
                    <View style={{
                        backgroundColor:PRIMARY_COLOR,
                        padding:10,
                        marginLeft:'auto',
                        borderTopLeftRadius:10,
                        borderBottomLeftRadius:10
                    }}>
                         <Text style={{
                            color:'#fff',
                            fontSize:14,
                            fontFamily:'Inter-Bold'
                        }}>Saldo </Text>
                         <NumberFormat
                            value={auth.authData.balance}
                            displayType={'text'}
                            thousandSeparator={'.'}
                            decimalSeparator={','}
                            prefix="Rp"
                            renderText={(value) => 
                                <Text style={{
                                    color:'#fff',
                                    fontSize:20,
                                    fontFamily:'Inter-Bold'
                                }}>{value}</Text> 
                            }/>
                    </View>
                </View>
                <View style={{
                    width: '100%',
                    padding:20,
                    flexDirection:'row',
                    justifyContent:'space-evenly'
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Scan')} style={{
                        width: 70,
                        alignItems:'center'
                    }}>
                    <View style={{
                        width: 50,
                        height: 50,
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                        <RemixIcon name="qr-scan-line" size={34} color={PRIMARY_COLOR}/>
                    </View>
                        <Text style={{
                            color:'#000',
                            fontFamily:'Inter-Regular'
                        }}>Scan Qr</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('History')} style={{
                        width: 70,
                        alignItems:'center'
                    }}>
                    <View style={{
                        width: 50,
                        height: 50,
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                        <RemixIcon name="history-line" size={34} color={PRIMARY_COLOR}/>
                    </View>
                        <Text style={{
                            color:'#000',
                            fontFamily:'Inter-Regular'
                        }}>History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('WebView',{
                        title:'Topup Dana',
                        uri: 'https://www.dana.id/'
                    })} style={{
                        width: 70,
                        alignItems:'center'
                    }}>
                    <View style={{
                        width: 50,
                        height: 50,
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                        <RemixIcon name="add-circle-line" size={34} color={PRIMARY_COLOR}/>
                    </View>
                        <Text style={{
                            color:'#000',
                            fontFamily:'Inter-Regular'
                        }}>Topup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        } translateY={260} overValue={50} bottomComponentStyle={{
            position: 'absolute',
            width: '100%',
            elevation:1,
            borderTopWidth:1,
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
            <FlatList
                horizontal
                data={dataCategory}
                style={{
                    width: '100%',
                    marginBottom:20
                }}
                renderItem={({item}) => (
                    <View style={{
                        width: 70,
                        marginRight:15,
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Category', {
                        item
                    })} style={{
                        width: 70,
                        height: 70,
                        alignItems:'center',
                        justifyContent:'center',
                        borderRadius:20,
                        backgroundColor:PRIMARY_COLOR
                    }}>
                        <RemixIcon name={item.icon} size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={{
                        color:'#000',
                        marginTop:5,
                        fontFamily:'Inter-Regular'
                    }}>{item.text}</Text>
                    </View>
                )}
            >
            </FlatList>
            <Text style={{
                color:'#000',
                fontSize:18,
                marginBottom:20,
                fontFamily:'Inter-Bold'
            }}>Rekomendasi Untukmu</Text>
            <FlatList
                horizontal
                data={dataTempat}
                style={{
                    width: '100%',
                    marginBottom:20
                }}
                renderItem={({item}) => (
                    <CardPlace source={item.source} onPress={() => navigation.navigate('Place', { item })} title={item.title} description={item.description}/>
                )}
            >
            </FlatList>
            <View style={{
                marginBottom:20,
            }}>
            <Text style={{
                color:'#000',
                fontSize:18,
                fontFamily:'Inter-Bold'
            }}>Populer Disekitar</Text>
            <Text style={{
                color:PRIMARY_COLOR,
                fontSize:24,
                fontFamily:'Inter-Bold'
            }}>Bandung</Text>
            </View>
            <FlatList
                horizontal
                data={dataTempat}
                style={{
                    width: '100%',
                    marginBottom:20
                }}
                renderItem={({item}) => (
                    <CardPlace  source={item.source}  title={item.title} description={item.description}/>
                )}
            >
            </FlatList>
        </SwipeContainer>
    )
}

export default HomeScreen;