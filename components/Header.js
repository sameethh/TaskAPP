import React from 'react'
import { View, Text} from 'react-native'


const Header = (props) => (
    <View style={{flexDirection:'row',justifyContent:'space-between',margin:10,marginHorizontal:10,}}>
        <View>
            <Text>icon</Text>
        </View>
        <View style={{alignItems:'center'}}>
            <Text style={{fontWeight:'bold',fontSize:20}}>
               {props.customHeader}
            </Text>
        </View>
        <View>
            <Text>icon</Text>
        </View>
    </View>
        
)
export default Header