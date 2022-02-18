import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import RemixIcon from 'react-native-remix-icon';
import { PRIMARY_COLOR } from '../../configs/style';
const ChatScreen = () => {
    return(
        <View style={{
            flex:1
        }}>
            <View style={{
                height: 60,
                borderBottomWidth:1,
                borderColor:'#eee',
                justifyContent:'center',
                backgroundColor:'#fff',
                paddingHorizontal:20
            }}>
                <Text style={{
                    color:'#000',
                    fontSize:18,
                    fontFamily:'Inter-Bold'
                }}>Chat</Text>
            </View>
            <View style={{
                flex:1,
            }}>
                <TouchableOpacity style={{
                    flexDirection:'row',
                    alignItems:'center',
                    borderBottomWidth:1,
                    borderBottomColor:'#eee',
                    backgroundColor:'#fff',
                    padding:20,
                }}>
                    <View style={{
                        height: 50,
                        width: 50,
                        marginRight:10,
                        backgroundColor:'red',
                        borderRadius:30
                    }}></View>
                    <View style={{
                        flex:1
                    }}>
                        <Text style={{
                            color:'#000',
                            fontSize:16,
                            fontFamily:'Inter-Bold'
                        }}>Polres Bandung</Text>
                        <View style={{
                            flexDirection:'row',
                            alignItems:'center'
                        }}>
                            <RemixIcon name="mail-send-fill" size={16} color={PRIMARY_COLOR}/>
                            <Text style={{
                                color:'#000',
                                marginLeft:5
                            }}>lipsum ini lipsum dolor sit amet..</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{
                            color: PRIMARY_COLOR,
                            fontSize:12,
                            fontFamily:'Inter-Bold'
                        }}>8.30</Text>
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
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ChatScreen;