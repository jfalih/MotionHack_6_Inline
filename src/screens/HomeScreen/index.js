import React from 'react'
import { Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import RemixIcon from 'react-native-remix-icon';
import SwipeContainer from 'react-native-scroll-up-container';
import CardPlace from '../../components/CardPlace';
import { PRIMARY_COLOR } from '../../configs/style';
const HomeScreen = () => {
    const data = [{
        id: 1,
        text:'Resto',
        icon:'restaurant-2-line'
    },{
        id: 2,
        text:'Transport',
        icon:'roadster-line'
    },{
        id: 3,
        text:'Ticket',
        icon:'ticket-line'
    },{
        id: 4,
        text:'Kesehatan',
        icon:'empathize-line'
    },{
        id: 5,
        text:'Service',
        icon:'service-line'
    }];
    const dataTempat = [{
        id: 1,
        title: 'Polres Bandung',
        description: 'Lorem ipsum dolor sit amet. test lipsum'
    },{
        id: 2,
        title: 'Curug Badak',
        description: 'Lorem ipsum dolor sit amet. test lipsum'
    }];
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
                        }}>Andrew</Text>
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
                        <Text style={{
                            color:'#fff',
                            fontSize:20,
                            fontFamily:'Inter-Bold'
                        }}>Rp10.000.000</Text>
                    </View>
                </View>
                <View style={{
                    width: '100%',
                    padding:20,
                    flexDirection:'row',
                    justifyContent:'space-evenly'
                }}>
                    <TouchableOpacity style={{
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
                    <TouchableOpacity style={{
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
                    <TouchableOpacity style={{
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
                data={data}
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
                    <TouchableOpacity style={{
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
                    <CardPlace title={item.title} description={item.description}/>
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
                    <CardPlace title={item.title} description={item.description}/>
                )}
            >
            </FlatList>
        </SwipeContainer>
    )
}

export default HomeScreen;