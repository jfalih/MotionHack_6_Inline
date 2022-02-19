import React from 'react'
import { TouchableOpacity, View, Text,  } from 'react-native'
import RemixIcon from "react-native-remix-icon"
import { PRIMARY_COLOR } from '../../configs/style'

const renderStatus = (status) => (
    <View style={{
        backgroundColor:PRIMARY_COLOR,
        padding:5,
        paddingHorizontal:10,
        borderRadius:5
    }}>
        <Text style={{
            fontFamily:'Inter-Bold',
            color:'#fff'
        }}>{status}</Text>
    </View>
)

const Status = ({
    onPress,
    status,
    estimasi,
    name,
    nomor,
    category,
    categoryIcon
}) => {
    return(        
        <TouchableOpacity onPress={() => onPress()} style={{
            flexDirection:'row',
            marginBottom:10,
            alignItems:'center',
            justifyContent:'center', 
        }}>
            <View style={{
                height: 130,
                width: 80,
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:PRIMARY_COLOR,
                borderTopLeftRadius:10,
                borderBottomLeftRadius:10
            }}>
                <RemixIcon name={categoryIcon} size={24} color="#fff" />
                <Text style={{
                    color:'#fff',
                    fontFamily:'Inter-Regular',
                    fontSize:12,
                    marginTop:2
                }}>{category}</Text>
            </View>
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
                            fontSize:12,
                            fontFamily:'Inter-Regular',
                            color:'#000'
                        }}>Nomor Antrean</Text>
                        <Text style={{
                            color:'#000',
                            fontSize:22,
                            fontFamily:'Inter-Bold'
                        }}>{nomor}</Text>
                    </View>
                    <View >
                        <Text style={{
                            fontSize:12,
                            fontFamily:'Inter-Regular',
                            color:'#000',
                            marginBottom:2,
                            marginLeft:'auto'
                        }}>Status</Text>
                        {renderStatus(status)}
                    </View>
                </View>
                <Text style={{
                    color:'#000',
                    fontSize:14,
                    fontFamily:'Inter-Regular'
                }}>{name}</Text>
                <View style={{
                    flexDirection:'row',
                    alignItems:'center',
                    marginTop:'auto',
                    justifyContent:'space-between'
                }}>
                    <View>
                        <Text style={{
                            fontSize:12,
                            color:'#000',
                            fontFamily:'Inter-Regular'
                        }}>Estimasi</Text>
                        <Text style={{
                            fontSize:12,
                            color:'#000',
                            fontFamily:'Inter-Regular'
                        }}>{estimasi}</Text>
                    </View>
                    <View>
                        <RemixIcon name="qr-code-line" size={20} color="#000"/>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Status;