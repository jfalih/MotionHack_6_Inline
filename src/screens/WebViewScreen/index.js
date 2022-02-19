import React from 'react'
import Header from './../../components/Header/index';
import { WebView } from 'react-native-webview';
import { View } from 'react-native';
const WebViewScreen = ({
    route,
    navigation
}) => {
    const { uri, title } = route.params;

    return(
        <View style={{
            flex:1
        }}>
        <Header useBack title={title}/>
        <WebView source={{
            uri: uri
        }}/>
        </View>
    )
}

export default WebViewScreen;