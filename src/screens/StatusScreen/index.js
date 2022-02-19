import React from 'react'
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import RemixIcon from 'react-native-remix-icon';
import Header from '../../components/Header';
import { DIM_COLOR, PRIMARY_COLOR } from '../../configs/style';
import dataHistory from './../../dummies/dataHistory';
import Status from './../../components/Status/index';
const StatusScreen = ({ navigation }) => {
    const [type, setType] = React.useState('pemesanan');
    return(
        <View style={{
            flex:1
        }}>
            <Header title="Status"/>
            
            <View style={{
                flexDirection:'row',
                padding:10,
                height:70,
                backgroundColor:'#fff'
            }}>
                <TouchableOpacity disabled={type == 'pemesanan'} onPress={() => setType('pemesanan')} style={{
                    flex:1,
                    borderRadius:10,
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor: type == 'pemesanan' ? PRIMARY_COLOR : '#fff'
                }}>
                    <Text style={{
                        fontSize:14,
                        fontFamily:'Inter-Bold',
                        color:type == 'pemesanan' ? '#fff' : '#000'
                    }}>Pemesanan</Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={type == 'riwayat'} onPress={() => setType('riwayat')} style={{
                      flex:1,
                      borderRadius:10,
                      alignItems:'center',
                      justifyContent:'center',
                      backgroundColor: type == 'riwayat' ? PRIMARY_COLOR : '#fff'
                }}>
                    <Text style={{
                        fontSize:14,
                        fontFamily:'Inter-Bold',
                        color:type == 'riwayat' ? '#fff' : '#000'
                    }}>Riwayat</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
            data={dataHistory.filter(item => {
                return item.type == type
            })}
            contentContainerStyle={{
                padding:20
            }}
            renderItem={({item}) => (
                <Status onPress={() => navigation.navigate('DetailStatus', { item })} status={item.status}
                estimasi={item.estimasi}
                name={item.name}
                nomor={item.nomor}
                category={item.category}
                categoryIcon={item.categoryIcon} />
            )}/>
        </View>
    )
}

export default StatusScreen;