import React from 'react'
import { View, Text, Image } from 'react-native'
import { RNCamera } from 'react-native-camera';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RemixIcon from 'react-native-remix-icon';
import Header from './../../components/Header/index';
const ScanScreen = () => {
    const [flash, setFlash] = React.useState(false);
    return(
        <View style={{
            flex:1
        }}>
            <Header useBack title="Scan Qr" />
            <RNCamera flashMode={
                flash ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off    
            } style={{
                flex:1
            }}/>
            <View style={{
                position: 'absolute',
                top:100,
                alignItems:'center',
                width: '100%',
                justifyContent:'center'
            }}>
                <Text style={{
                    color:'#fff',
                    fontSize:24,
                    marginBottom:50,
                    fontFamily:'Inter-Bold'
                }}>Arahkan Kode Qr</Text>
                <Image style={{
                    width:250,
                    height:250,
                    marginBottom:50,
                }} source={
                    require('../../assets/icons/Scan.png')
                }/>
                <TouchableOpacity onPress={() => setFlash(!flash)}>
                    <RemixIcon name={flash ? "flashlight-fill" : "flashlight-line" } color="#fff" size={40}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default ScanScreen;