import React from 'react'
import { Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import RemixIcon from 'react-native-remix-icon';
import SwipeContainer from 'react-native-scroll-up-container';
import { DEVICE_WIDTH, PRIMARY_COLOR } from '../../configs/style';
import dataTempat from '../../dummies/dataTempat';
import CardPlace from './../../components/CardPlace/index';
import Button from './../../components/Button/index';
const PlaceScreen = ({
    route,
    navigation
}) => {
    const { item } = route.params;
    return(
        <View style={{
            flex:1
        }}>
        <SwipeContainer topComponentStyle={{
            backgroundColor:'#FAFCFF'
        }} topComponent={
            <ImageBackground 
            style={{
                flex:1,
                padding:20
            }}
            source={item.source}>
                <View style={{
                    flex:1
                }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <RemixIcon name="arrow-left-s-line" size={40} color="#fff"/>    
                </TouchableOpacity>
                <View style={{
                    position:'absolute',
                    left:0, 
                    flexDirection:'row',
                    bottom: 50}}>
                    <View style={{
                        flex:2
                    }}>           
                    <Text style={{
                        color:'#fff',
                        fontFamily:'Inter-Regular',
                        fontSize:14
                    }}>{item.category.name}</Text>
                    <Text style={{
                        color:'#fff',
                        fontFamily:'Inter-Bold',
                        fontSize:24
                    }}>{item.title}</Text>         
                    </View>
                    <View style={{
                        flexDirection:'row',
                        marginTop:'auto',
                    }}>
                        <TouchableOpacity style={{
                            flexDirection:'row',
                            alignItems:'center',
                            backgroundColor:'#fff',
                            padding:5,
                            height: 30,
                            marginRight:5,
                            paddingHorizontal:10,
                            borderRadius:20
                        }}>
                            <RemixIcon size={14} name="phone-fill"/>
                            <Text style={{
                                color:'#000',
                                marginLeft:5,
                                fontFamily:'Inter-Regular'
                            }}>Telepon</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection:'row',
                            alignItems:'center',
                            backgroundColor:'#fff',
                            padding:5,
                            height: 30,
                            paddingHorizontal:10,
                            borderRadius:20
                        }}>
                            <RemixIcon size={14} name="chat-3-line"/>
                            <Text style={{
                                color:'#000',
                                marginLeft:5,
                                fontFamily:'Inter-Regular'
                            }}>Chat</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            </ImageBackground>
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
            <Text style={{
                fontSize:20,
                color:'#000',
                marginBottom:10,
                fontFamily:'Inter-Bold'
            }}>Alamat</Text>
            <Text style={{
                color:'#000',
                marginBottom:20,
                fontFamily:'Inter-Regular'
            }}>{item.address}</Text>
            <Text style={{
                fontSize:20,
                color:'#000',
                marginBottom:10,
                fontFamily:'Inter-Bold'
            }}>Layanan</Text>
            <FlatList
            horizontal
            style={{
                marginBottom:20
            }}
            data={item.layanan}
            renderItem={({item}) => 
            <TouchableOpacity style={{
                height: 40,
                borderRadius:25,
                paddingHorizontal:20,
                borderWidth:1,
                marginRight:10,
                alignItems:'center',
                justifyContent:'center',
                borderColor:'#848484'
            }}>
                <Text style={{
                    color:'#848484',
                    fontFamily:'Inter-Bold'
                }}>{item.name}</Text>
            </TouchableOpacity>
            }/>
            <Text style={{
                fontSize:20,
                color:'#000',
                marginBottom:10,
                fontFamily:'Inter-Bold'
            }}>Jadwal</Text>
            <FlatList
            style={{
                marginBottom:20,
            }}
            contentContainerStyle={{
                flexDirection:'row',
                flexWrap:'wrap'
            }}
            data={item.jadwal}
            renderItem={({item}) => 
            <TouchableOpacity style={{
                height: 40,
                marginBottom:10,
                borderRadius:25,
                paddingHorizontal:20,
                borderWidth:1,
                marginRight:10,
                alignItems:'center',
                justifyContent:'center',
                borderColor:'#848484'
            }}>
                <Text style={{
                    color:'#848484',
                    fontFamily:'Inter-Bold'
                }}>{item.name}</Text>
            </TouchableOpacity>
            }/>
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
            }}>{item.title}</Text>
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
            <Button onPress={() => navigation.navigate('Home')} buttonStyle={{
                    height: 60,
                    borderRadius:20,
                    width:'100%',
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor: PRIMARY_COLOR
                }} textStyle={{
                    color:'#fff',
                    fontFamily:'Inter-Bold'
                }} text="Booking"/> 
        </View>
        </View>
    )
}

export default PlaceScreen;