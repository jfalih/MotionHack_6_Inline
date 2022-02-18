import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { PRIMARY_COLOR } from '../../configs/style';

const BottomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ 
        flexDirection: 'row',
        height: 60,
        alignItems:'center',
        backgroundColor:'#fff',
        borderTopColor:'#f2f2f2',
        borderTopWidth:1,
    }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
                flex:1,
                alignItems:'center',
            }}
          >
            {options.tabBarIcon({
                focused: isFocused,
                color: isFocused ? PRIMARY_COLOR : '#878787',
                size: 22
            })}
            {isFocused ?
            <View style={{
                borderRadius:10,
                marginTop:5,
                paddingHorizontal:10,
                backgroundColor :  PRIMARY_COLOR 
            }}>
                <Text style={{ 
                    color:  '#fff' ,
                    fontSize:12,
                    fontFamily:'Inter-Regular'
                }}>
                {label}
                </Text>
            </View>
            : 
            <Text style={{ 
                color:  '#878787' ,
                fontSize:12,
                fontFamily:'Inter-Regular'
            }}>
                {label}
            </Text>
            }
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default BottomTabBar;