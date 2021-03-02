import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  Button
} from 'react-native'

import Header from './Header.js'
import TaskInput from './TaskInput.js'
import Tasks from './Tasks'
import Footer from './Footer'



const TaskExplorer = () => {

  useEffect(() => {
  },[])

  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState()


  const AddTask = (event) => {
    const { text } = event.nativeEvent
      if (text) {
      text ? setTasks((tasks) => [...tasks,{id:Math.random().toString(),title:text}]) : console.warn('Add task error')
      } else if(input){
        setTasks((tasks) => [...tasks,{id:Math.random().toString(),title:input}])
      }
 }
  
  const removeTask = (id) => {
    console.log(tasks)
    setTasks((tasks) => tasks.filter(task => id != task.id))
  }

  const InputChange = (text) => {
    setInput(text)
  }

  return ( 
    <SafeAreaView style={{flex:1,backgroundColor:'teal'}}>
        <Header customHeader={'Tasking App'}/>
          <View style={{flex:1,backgroundColor:'white'}}>
            <TaskInput 
              AddTask={AddTask}
              InputChange={InputChange}
              />
              <View style={{flex:0.07,borderWidth:1,borderColor:'black',backgroundColor:'black',marginHorizontal:140}}>
                  <Button onPress={AddTask} title={'Add Task'}  color="white"/>
              </View>
              <View style={{flex:0.88}}>
                <Tasks 
                  DATA={tasks}
                  removeTask={removeTask}
                  />
                </View>
          </View>
        <Footer count={tasks.length}/>
      </SafeAreaView>
)}

export default TaskExplorer