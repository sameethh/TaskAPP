import React from 'react'
import { View, Text} from 'react-native'


const Footer = ({count}) => {
    return(
        <View style={{flex:0.05,margin:5,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
            <View style={{flex:0.5,justifyContent:'center',alignItems:'center'}}>
                <Text>
                 New {count}
                </Text>
                <Text>
                Started To-do
                </Text>
            </View>
            <View>
                <Text style={{fontWeight:'bold',fontSize:20}}>Status</Text>
            </View>
            <View style={{flex:0.5,justifyContent:'space-between',alignItems:'center'}}>
                <Text>
                Progress To-do
                </Text>
                <Text>
                Done To-do
                </Text>
            </View>
        </View>
     )}

export default Footer