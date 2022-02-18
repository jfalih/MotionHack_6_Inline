
import React from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native';

const CardPlace = ({title, source, onPress, description}) => {
    return(
        <TouchableOpacity onPress={onPress} style={{
            marginRight:15,
            width: 180,
            height: 220,
            borderRadius:20,
        }}>
            <Image resizeMode="cover" style={{
                width:180,
                height:220,
                borderRadius:20
            }} source={source}/>
            <View style={{
                width: 180,
                height: 220,
                padding:10,
                borderRadius:20,
                position: 'absolute',
                backgroundColor:'rgba(0,0,0,0.5)',
            }}>
                <View style={{
                    marginTop:'auto'
                }}>
                    <Text style={{
                        color:'#fff',
                        fontSize:18,
                        fontFamily:'Inter-Bold'
                    }}>{title}</Text>
                    <Text style={{
                        color:'#fff',
                        fontFamily:'Inter-Regular'
                    }}>{description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CardPlace