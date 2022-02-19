import React from 'react'
import { View, TouchableOpacity, Text, Image, FlatList } from "react-native"
import Header from "../../components/Header"
import RemixIcon from 'react-native-remix-icon';
import { PRIMARY_COLOR } from '../../configs/style';
import dataTempat from './../../dummies/dataTempat';

const CategoryScreen = ({
    route,
    navigation
}) => {
    const { item } = route.params;
    const listEmpptyComponent = () => {
        return(
            <View style={{
                padding:20,
                backgroundColor:'#fff',
                borderRadius:20,
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Image style={{
                    width:120,
                    height: 120,
                    marginBottom:10
                }} source={require('../../assets/images/NoData.png')}/>
                <Text style={{
                    color:'#000',
                    fontFamily:'Inter-Regular'
                }}>Data tempat belum ada nih :(</Text>
            </View>
        )
    }
    return(
        <View style={{
            flex:1
        }}>
            <Header useBack rightComponent={
                <TouchableOpacity onPress={() => navigation.navigate('Search')} style={{
                    marginLeft:'auto'
                }}>
                    <RemixIcon name="search-line" size={24} color="#000"/>    
                </TouchableOpacity>
            } title={item.text}/>
            <View style={{
                flexDirection:'row',
                paddingHorizontal:20,
                padding:5,
                backgroundColor:'#fff'
            }}>
                <Text style={{
                    fontFamily:'Inter-Regular',
                    color:'#000'
                }}>Layanan Sekitar:</Text>
                <Text style={{
                    fontFamily:'Inter-Bold',
                    marginLeft:5,
                    color:'#000',
                }}>Bandung</Text>
            </View>
            <FlatList
            style={{
                padding:20,
            }}
            ListEmptyComponent={listEmpptyComponent}
            data={dataTempat.filter(val => {
                return val.category.id == item.id
            })}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('Place', {
                    item
                })} style={{
                    flexDirection:'row',
                    marginBottom:10,
                    alignItems:'center',
                    justifyContent:'center', 
                }}>
                    <Image style={{
                        height: 130,
                        width: 80,
                        borderTopLeftRadius:10,
                        borderBottomLeftRadius:10                    
                     }} source={
                        item.source
                    }/>
                    <View style={{
                        flex:1,
                        height: 140,
                        padding:10,
                        borderRadius:10,
                        backgroundColor:'#fff'
                    }}>
                        <View style={{
                            flexDirection:'row',
                            alignItems:'center',
                            marginBottom:10,
                            justifyContent:'space-between'
                        }}>
                            <View>
                                <Text style={{
                                    fontSize:14,
                                    fontFamily:'Inter-Regular',
                                    color:'#000'
                                }}>{item.category.name}</Text>
                            </View>
                            <View >
                                <Text style={{
                                    fontSize:14,
                                    fontFamily:'Inter-Bold',
                                    color: item.status == 'Buka' ? PRIMARY_COLOR : 'red',
                                    marginBottom:2,
                                    marginLeft:'auto'
                                }}>{item.status}</Text>
                            </View>
                        </View>
                        <Text style={{
                            color:'#000',
                            fontSize:20,
                            fontFamily:'Inter-Bold  '
                        }}>{item.title}</Text>
                        <View style={{
                            flexDirection:'row',
                            alignItems:'center',
                            marginTop:'auto',
                        }}>
                            <RemixIcon name="map-pin-line" size={14} color="#000"/>
                            <Text style={{
                                fontSize:12,
                                marginLeft:5,
                                color:'#000',
                                fontFamily:'Inter-Regular'
                            }}>{item.address.substring(0,28)+'...'}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}

export default CategoryScreen;