import React from 'react'
import { Text, TouchableOpacity, View, Image, ImageBackground, Alert } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import RemixIcon from 'react-native-remix-icon';
import SwipeContainer from 'react-native-scroll-up-container';
import { DEVICE_WIDTH, DIM_COLOR, PRIMARY_COLOR } from '../../configs/style';
import dataTempat from '../../dummies/dataTempat';
import CardPlace from './../../components/CardPlace/index';
import Button from './../../components/Button/index';
import DateTimePicker from './../../../node_modules/@react-native-community/datetimepicker/src/datetimepicker';
const PlaceScreen = ({
    route,
    navigation
}) => {
    const { item } = route.params;
    const [mode, setMode] = React.useState('date');
    const [date, setDate] = React.useState(new Date());
    const [show, setShow] = React.useState(false)
    const [form, setForm] = React.useState({
        layanan: null,
        jadwal: null
    });
    const getDateString = (tanggal) => {
        let dd = String(tanggal.getDate()).padStart(2, '0');
        let mm = String(tanggal.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = tanggal.getFullYear();

        today = dd + '/' + mm + '/' + yyyy;
        return today;
    }
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    const listEmpptyComponent = () => {
        return(
            <View style={{
                width: '100%',
                padding:20,
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
                }}>Data jadwal tidak ditemukan..</Text>
            </View>
        )
    }
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const onBooking = () => {
        if(item.status == 'Buka'){
            navigation.navigate('SuccessBooking',{item})
        } else {
            Alert.alert('Tempat tutup!', 'Tempat tutup nih :(')
        }
    }
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
                <View style={{
                    flexDirection:'row'
                }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <RemixIcon name="arrow-left-s-line" size={40} color="#fff"/>    
                </TouchableOpacity>
                <View style={{
                    marginLeft:'auto',
                    padding:10,
                    borderRadius:20,
                    paddingHorizontal:20,
                    backgroundColor:'#fff',
                }}><Text style={{
                    fontSize:14,
                    fontFamily:'Inter-Bold',
                    color: item.status == 'Buka' ? PRIMARY_COLOR : 'red',
                    marginBottom:2,
                    marginLeft:'auto'
                }}>{item.status}</Text></View>
                </View>
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
            <TouchableOpacity onPress={() => setForm({
                jadwal: form.jadwal,
                layanan: item.id
            })} style={{
                height: 40,
                borderRadius:25,
                paddingHorizontal:20,
                borderWidth:1,
                marginRight:10,
                alignItems:'center',
                justifyContent:'center',
                borderColor:form.layanan == item.id ? PRIMARY_COLOR : DIM_COLOR
            }}>
                <Text style={{
                    color: form.layanan == item.id ? PRIMARY_COLOR :DIM_COLOR,
                    fontFamily:'Inter-Bold'
                }}>{item.name}</Text>
            </TouchableOpacity>
            }/>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                marginBottom:20,
                justifyContent:'space-between'
            }}>
                <Text style={{
                    fontSize:20,
                    color:'#000',
                    fontFamily:'Inter-Bold'
                }}>Jadwal</Text>
                <TouchableOpacity onPress={() => setShow(true)} style={{
                    height: 40,
                    flexDirection:'row',
                    justifyContent:'center',
                    paddingHorizontal:20,
                    borderRadius:20,
                    alignItems:'center',
                    backgroundColor:'#f2f2f2'
                }}>
                    <RemixIcon name="calendar-line" color={DIM_COLOR} size={18}/>
                    <Text style={{
                        color: DIM_COLOR,
                        marginLeft:10,
                    }}>{getDateString(date)}</Text>
                </TouchableOpacity>
            </View>
            <FlatList
            style={{
                marginBottom:20,
            }}
            contentContainerStyle={{
                flexDirection:'row',
                flexWrap:'wrap'
            }}
            ListEmptyComponent={listEmpptyComponent}
            data={item.jadwal.filter(item => {
                return item.date == getDateString(date);
            })}
            renderItem={({item}) => 
            <TouchableOpacity onPress={() => setForm({
                jadwal: item.id,
                layanan: form.layanan
            })} style={{
                height: 40,
                marginBottom:10,
                borderRadius:25,
                paddingHorizontal:20,
                borderWidth:1,
                marginRight:10,
                alignItems:'center',
                justifyContent:'center',
                borderColor: form.jadwal == item.id ? PRIMARY_COLOR :DIM_COLOR
            }}>
                <Text style={{
                    color: form.jadwal == item.id ? PRIMARY_COLOR :DIM_COLOR,
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
                data={dataTempat.filter(val => {
                    if(val.id !== item.id){
                        return val
                    }
                })}
                style={{
                    width: '100%',
                    marginBottom:20
                }}
                renderItem={({item}) => (
                    <CardPlace onPress={() => navigation.navigate('Place', { item })} source={item.source}  title={item.title} description={item.description}/>
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
            <Button disabled={(form.layanan !== null && form.jadwal !== null) ? false : true} onPress={() => onBooking()} buttonStyle={{
                    height: 60,
                    borderRadius:20,
                    width:'100%',
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor: (form.layanan !== null && form.jadwal !== null) ? PRIMARY_COLOR : DIM_COLOR
                }} textStyle={{
                    color:'#fff',
                    fontFamily:'Inter-Bold'
                }} text="Booking"/> 
        </View>
        {show && (
        <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
            />
        )}
        </View>
    )
}

export default PlaceScreen;