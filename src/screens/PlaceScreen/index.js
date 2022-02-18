import React from 'react'
import { Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import RemixIcon from 'react-native-remix-icon';
import SwipeContainer from 'react-native-scroll-up-container';
import CardPlace from '../../components/CardPlace';
import { PRIMARY_COLOR } from '../../configs/style';
const PlaceScreen = () => {
    return(
        <SwipeContainer topComponentStyle={{
            backgroundColor:'#FAFCFF'
        }} topComponent={
            <View style={{
                flex:1
            }}></View>
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
            height:800,
            }}></View>
        </SwipeContainer>
    )
}

export default PlaceScreen;