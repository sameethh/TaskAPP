import React, { useState, useEffect } from 'react'
import {
  View,
  SafeAreaView,Button
} from 'react-native'

import Header from './components/Header'
import TaskInput from './components/TaskInput'
import Tasks from './components/Tasks'
import Footer from './components/Footer'



const TaskExplorer = () => {

  useEffect(() => {
  },[tasks])

  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState()
  const [visible, Visibility] = useState(false)


  const AddTask = (event) => {
    Visibility(false)
    if (event) {
      const { text } = event.nativeEvent
      text ? setTasks((tasks) => [...tasks, {
        id: Math.random().toString(),
        title: text
      }]) : console.warn('Add task error')
    } else if (input) {
      setInput('')
      setTasks((tasks) => [...tasks, {
        id: Math.random().toString(),
        title: input
      }])
    }
  }
  
  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter(task => id != task.id))
  }

  const InputChange = (text) => {
    setInput(text)
  }

  return ( 
    <SafeAreaView style={{flex:1,backgroundColor:'teal'}}>
        <Header customHeader={'Task App'}/>
          <View style={{flex:1,backgroundColor:'white'}}>
            <TaskInput 
              visible={visible}
              AddTask={AddTask}
              InputChange={InputChange}
              Visibility={(flag) => Visibility(flag)}
              />
              <View style={{ borderWidth: 1,
                    borderColor: 'black',
                    backgroundColor: 'black'}}>
                    <Button  title={'START'}  color="white" onPress={() => Visibility(true)}/>
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