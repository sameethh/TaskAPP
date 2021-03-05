import React from 'react'
import { View, Text} from 'react-native'


const Footer = ({count}) => {
    return(
        <View style={{flex:0.05,margin:5,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
            <View style={{flex:0.5,justifyContent:'center',alignItems:'flex-start'}}>
            <Text>
                Tasks added         {count}
            </Text>
            <Text>
                Tasks started       {count}
            </Text>
            </View>
            <View>
                <Text style={{fontWeight:'bold',fontSize:20}}>Status</Text>
            </View>
            <View style={{flex:0.5,justifyContent:'space-between',alignItems:'flex-end'}}>
            <Text>
                Tasks in progress {count}
            </Text>
            <Text>
                Tasks done {count}
            </Text>
            </View>
        </View>
     )}

export default Footer