import React from 'react';
import Todo from './../components/Todo';
import API from './../api/api'

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.onDelhandler=this.onDelhandler.bind(this)
    this.state={
      todos:[],
      tp:1
    }
  }

  componentDidMount(){
    API.get('allTodo')
      .then(res=>{
        const todos = res.data;
        this.setState({ todos });
      })
  }
  
  async onDelhandler(){
    await API.get('allTodo')
      .then(res=>{
        const todos = res.data;
        this.setState({ todos });
      })
  }

  render(){
    return (
      <div className='cardcontainer'>
        {
          this.state.todos
              .map(todos =>
                <Todo key={todos._id} _id={todos._id} title={todos.title} desc={todos.desc} onDel={this.onDelhandler}/>
              )
        }
      </div>
    );
  }
}

