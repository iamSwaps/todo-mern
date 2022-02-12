import { Component } from "react";
import API from "./../api/api"

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);                                                       
    this.state = {
      _id:"",
      title: "",
      desc: "",
    };
    
  }

  
  onChangeDesc(e) {
    this.setState({
      desc: e.target.value,
    });
  }
  
  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  

  async handleSubmit(e){
    e.preventDefault();
    await API.get('allTodo')
      .then(res=>{
        const count = res.data.length;
        this.setState({
          _id:count+1
        })
    })
    console.log("id "+this.state._id+" added");
    const doc =
      {
        _id:this.state._id,
        title:this.state.title, 
        desc:this.state.desc
      };
    API.post('newTodo', doc )
    .then(res=>{
      console.log(res.data);
    })
    .catch(err=>{
      console.log(err)
    })
    this.setState({
      title:" ",
      desc:" "
    })
  }
  
  render() {
    return (
      <div className="cardcontainer">
        <div className="card">
          <div className="cardcontent">
            <form onSubmit={this.handleSubmit}>
              <label>Title :</label>
              <br />
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.onChangeTitle}
              />
              <br />
              <br />
              <label>Note:</label> <br />
              <input
                type="text"
                name="content"
                rows="10"
                value={this.state.desc}
                onChange={this.onChangeDesc}
              />
            <button type="submit" className="btn">Confirm</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
