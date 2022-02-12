import {  Component } from "react";
import Modal from "./Modal";
import API from './../api/api'


export default class Todo extends Component {
  //const [modalopen, setmodalopen]=useState(false);
  constructor(props){
    super(props);
    this.deleteHandler=this.deleteHandler.bind(this)
    this.onNoHandler=this.onNoHandler.bind(this)
    this.onYesHandler=this.onYesHandler.bind(this)
    this.state={
      modalopen:false
    }
  }

  deleteHandler() {
    this.setState({modalopen:true});
  }

  onNoHandler(){
    this.setState({modalopen:false});
  }

  async onYesHandler(){
    console.log("id "+this.props._id+" deleted")
    await API.delete(`delTodo/${this.props._id}`)
      .then(res=>{
        console.log(res.data);
      })
      this.props.onDel();
    this.setState({modalopen:false});
  }

  render(){
    return (
      <div className="card" >
        <div className="cardcontent">
          <h2>{this.props.title}</h2>
          <p>{this.props.desc}</p>
          <button className="btn " onClick={this.deleteHandler}>
            Delete
          </button>
        </div>
        {this.state.modalopen ? <Modal text={this.props.title} onYes={this.onYesHandler} onNo={this.onNoHandler}/>:null}
      </div>
    );
  }
}


