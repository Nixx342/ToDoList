import React, {Component} from 'react';
import './App.css';
import AddTask from './Components/AddTask.js'
import Task from './Components/Task.js'

class App extends Component {
    state = {
        tasks: []
    }

    deleteTask(index){
        const tasks = this.state.tasks.concat()
        tasks.splice(index, 1)
        this.setState({tasks})
    }
    upPriority = (index) =>{
        const  tasks = [...this.state.tasks]
        tasks[index].priorit += 1
        this.setState({
            ...this.state,
            tasks
        })
    }
    downPriority= (index) =>{
        const  tasks = [...this.state.tasks]
        tasks[index].priorit = tasks[index].priorit - 1
        this.setState({
            ...this.state,
            tasks
        })
    }
    addTask = (task) => {
        this.setState({
            ...this.state,
            tasks: [...this.state.tasks, task]
        })
    }
    render() {
        const sortTasks = this.state.tasks.sort((a,b) => b.priorit - a.priorit)
        return(
            <div>
                <AddTask
                    addTask={this.addTask}
                />
                {
                    sortTasks && sortTasks.map((task,index) => {
                        return(
                            <Task
                                key={index}
                                name={task.name}
                                worker={task.worker}
                                priorit={task.priorit}
                                onDelete={this.deleteTask.bind(this, index)}
                                upPriority={this.upPriority.bind(this,index)}
                                downPriority={this.downPriority.bind(this,index)}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default App;
