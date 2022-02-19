import React from 'react'
import { FlatList, View, Text } from 'react-native';
import RemixIcon from 'react-native-remix-icon';
import NumberFormat from 'react-number-format';
import DanaLogo from '../../assets/icons/DanaLogo';
import Header from '../../components/Header';
import { DIM_COLOR, PRIMARY_COLOR } from '../../configs/style';
import dataTopup from './../../dummies/dataTopup';

const HistoryScreen = () => {
    return(
        <View style={{
            flex: 1,
        }}>
            <Header useBack title="History"/>
            <FlatList
            data={dataTopup}
            style={{
                padding:20
            }}
            renderItem={({item}) => (
                <View style={{
                    flexDirection:'row',
                    borderRadius:5,
                    backgroundColor:'#fff',
                    alignItems:"center",
                    padding:20,
                    borderBottomColor:DIM_COLOR,
                    marginBottom:10
                }}>
                    <View style={{
                        width:50,
                        height: 50,
                        alignItems:'center',
                        justifyContent:'center',
                        marginRight:10,
                        borderRadius:10,
                        backgroundColor:'#FAFCFF'
                    }}>
                        <DanaLogo/>
                        <View style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                        }}>
                            { item.type == 'in' && <RemixIcon name="arrow-right-line" size={14} color={ PRIMARY_COLOR}/> }
                            { item.type == 'out' && <RemixIcon name="arrow-left-line" size={14} color="red"/> }
                            { item.type == 'topup' && <RemixIcon name="add-circle-line" size={14} color={PRIMARY_COLOR}/> }
                        </View>
                    </View>
                    <View>
                        <Text style={{
                            color:'#000',
                            fontSize:16,
                            fontFamily:'Inter-Bold'
                        }}>{item.title}</Text>
                        <Text style={{
                            color:'#000',
                            fontSize:12,
                            fontFamily:'Inter-Regular'
                        }}>{item.time}</Text>
                    </View>
                    <NumberFormat
                    value={item.total}
                    displayType={'text'}
                    thousandSeparator={'.'}
                    decimalSeparator={','}
                    prefix="Rp"
                    renderText={(value) => <Text style={{
                        marginLeft:'auto',
                        color:'#000',
                        fontFamily:'Inter-Bold'
                    }}>{value}</Text> }
                    />
                    
                </View>
            )}
            />
        </View>
    )
}

export default HistoryScreen;