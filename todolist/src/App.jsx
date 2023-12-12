import React,{Component} from 'react'
import './App.css'
import ToDoItem from './components/todoitem'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      input : "",
      todolist : [],
    }
  }
  // creating a arrow function which changes the input using setState which gets called on onChange event 
  inputchange = (e) =>{
    this.setState({input : e.target.value})
  }
  formSubmit = (e) => {
    e.preventDefault()
    if(this.state.input.length>0)  
    this.setState({
      input : "",
      todolist : [...this.state.todolist, this.state.input]
    })
    console.log(this.state.todolist)
  }

  updateItem = (newItem,index) => {
    // created a copy of my todolist
    let arr = this.state.todolist
    arr.splice(index,1,newItem)
    this.setState({
      todolist : arr
    })
  }
  deleteitem = (index) => {
    let arr = this.state.todolist
    arr.splice(index,1)
    this.setState({
      todolist : arr
    })
  }
  render (){
  return (
    <>
      
      <h1>To Do List</h1>
      <form onSubmit={this.formSubmit}>
        <input type="text" onChange={this.inputchange} value={this.state.input} />
        <button>Add</button>
      </form>
      <p>{this.state.input}</p>

      <div className="toDoList">
        <h2>🗒️ List ✨</h2>
        {this.state.todolist.length==0?(<h2>List is empty</h2>):( this.state.todolist.map((e,idx)=>{
          return (
          < ToDoItem e={e} idx={idx} updateItem={this.updateItem} deleteitem={this.deleteitem} />
          )
          }))}
       
      </div>
    </>
  )
  }
}


