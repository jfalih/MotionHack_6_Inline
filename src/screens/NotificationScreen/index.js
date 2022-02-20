import React from 'react'
import { TouchableOpacity, ScrollView, Text, View, FlatList } from 'react-native'
import RemixIcon from 'react-native-remix-icon';
import Header from '../../components/Header';
import { DIM_COLOR, PRIMARY_COLOR } from '../../configs/style';
import dataNotification from '../../dummies/dataNotification';
const NotificationScreen = () => {
    const [type, setType] = React.useState('all')
    return(
        <View style={{
            flex:1
        }}>
            <Header useBack title="Notification"/>
            <View>
            <ScrollView horizontal>
            <TouchableOpacity disabled={type == 'all'} onPress={() => setType('all')} style={{
                backgroundColor:type == 'all' ? PRIMARY_COLOR : DIM_COLOR,
                padding:20,
                borderRightWidth:1,
                borderRightColor:'#eee',
                height: 60,
            }}>
                <Text style={{
                    color:'#fff',
                    fontFamily:'Inter-Bold'
                }}>Semua Notifikasi</Text>
            </TouchableOpacity>
            <TouchableOpacity disabled={type == 'read'} onPress={() => setType('read')} style={{
                backgroundColor:type == 'read' ? PRIMARY_COLOR : DIM_COLOR,
                padding:20,
                borderRightWidth:1,
                borderRightColor:'#eee',
                height: 60,
            }}>
                <Text style={{
                    color:'#fff',
                    fontFamily:'Inter-Bold'
                }}>Sudah Dibaca</Text>
            </TouchableOpacity>
            <TouchableOpacity disabled={type == 'unread'} onPress={() => setType('unread')} style={{
                backgroundColor:type == 'unread' ? PRIMARY_COLOR : DIM_COLOR,
                padding:20,
                borderRightWidth:1,
                borderRightColor:'#eee',
                height: 60,
            }}>
                <Text style={{
                    color:'#fff',
                    fontFamily:'Inter-Bold'
                }}>Belum Dibaca</Text>
            </TouchableOpacity>
            </ScrollView>
            </View>
            <FlatList  data={dataNotification.filter(val => {
                return val.type == type
            })} renderItem={({item}) => (
                <View style={{
                    flexDirection:'row',
                    backgroundColor:'#fff',
                    padding:20,
                    borderBottomWidth:1,
                    borderColor:'#eee'
                }}>
                    <RemixIcon name="checkbox-circle-line" size={24} color="#000" />
                    <View style={{
                        marginLeft:10
                    }}>
                        <Text style={{
                            color:'#000',
                            fontFamily:'Inter-Bold'
                        }}>{item.title}</Text>
                        <Text style={{
                            color:'#000',
                            fontFamily:'Inter-Regular'
                        }}>{item.description}</Text>
                    </View>
                </View>
            )}></FlatList>
        </View>
    )
}

export default NotificationScreen;