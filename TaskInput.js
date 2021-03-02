import React from 'react'
import { View, Text, TextInput }  from 'react-native'



const TaskInput = (props) => {

    return (
        <View style ={{ borderWidth:2,margin:20,marginHorizontal:80,padding :10}}> 
            <TextInput
               placeholder={'Please add some Tasks'}
               onSubmitEditing={props.AddTask}
               onChangeText={(text) => props.InputChange(text)}
            />
        </View>
    )



}

export default TaskInput