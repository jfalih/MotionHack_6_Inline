import React from 'react'
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native'
import RemixIcon from 'react-native-remix-icon';
import { DIM_COLOR, PRIMARY_COLOR } from '../../configs/style';
import { dataChat } from '../../dummies/dataChat';
import Header from './../../components/Header/index';
const ChatScreen = ({ navigation }) => {
    return(
        <View style={{
            flex:1
        }}>
            <Header title="Chat"/>
            <FlatList renderItem={({item}) => (
                 <TouchableOpacity onPress={() => console.log('ini')} style={{
                    flexDirection:'row',
                    alignItems:'center',
                    borderBottomWidth:1,
                    borderBottomColor:'#eee',
                    backgroundColor:'#fff',
                    padding:20,
                }}>
                    <Image source={item.img} style={{
                        height: 50,
                        width: 50,
                        marginRight:10,
                        borderRadius:30
                    }}/>
                    <View style={{
                        flex:1
                    }}>
                        <Text style={{
                            color:'#000',
                            fontSize:16,
                            fontFamily:'Inter-Bold'
                        }}>{item.from}</Text>
                        <View style={{
                            flexDirection:'row',
                            alignItems:'center'
                        }}>
                            {item.status == 'UNREAD' && <RemixIcon name="mail-send-fill" size={16} color={PRIMARY_COLOR}/> }
                            <Text style={{
                                color:'#000',
                                marginLeft: item.status == 'UNREAD' ? 5 : 0
                            }}>{item.message.length > 20 ? item.message.substring(0,20)+'...' : item.message}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{
                            color:  item.status == 'READ' ? DIM_COLOR : PRIMARY_COLOR,
                            fontSize:12,
                            fontFamily:'Inter-Bold'
                        }}>8.30</Text>
                        {item.status == 'UNREAD' &&
                        <View style={{
                            width: 20,
                            alignItems:'center',
                            justifyContent:'center',
                            marginLeft:'auto',
                            height: 20,
                            borderRadius:10,
                            backgroundColor:PRIMARY_COLOR
                        }}>
                            <Text style={{
                                color:'#fff',
                                fontSize:12,
                                fontFamily:'Inter-Bold'
                            }}>1</Text>
                        </View>
                        }
                    </View>
                </TouchableOpacity>
            )} data={dataChat} style={{
                flex:1,
            }}>
            </FlatList>
        </View>
    )
}

export default ChatScreen;