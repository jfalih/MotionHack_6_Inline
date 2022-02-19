import React from 'react'
import { View } from 'react-native'
import { RNCamera } from 'react-native-camera';
import Header from './../../components/Header/index';
const ScanScreen = () => {
    return(
        <View style={{
            flex:1
        }}>
            <Header useBack title="Scan Qr" />
            <RNCamera style={{
                flex:1
            }}/>
        </View>
    )
}
export default ScanScreen;