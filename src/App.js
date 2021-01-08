import React,{Component} from 'react'
export default class FirstClass extends Component{
  constructor(props){
    super(props)
    this.state = {
      a:'',
      b:''
    }
  }
  
  render(){
    return(
      <div>
      <div>
      <input onChange={(e)=>{this.setState({a:e.target.value})}} value={this.state.a}/>
      <input onChange={(e)=>{this.setState({b:e.target.value})}} value={this.state.b}/>
      </div> 
      <div>
      <button onClick= {()=>{alert(parseInt(this.state.a)+parseInt(this.state.b))}}>ADD</button>
      <button onClick= {()=>{alert(parseInt(this.state.a)-parseInt(this.state.b))}}>SUB</button>
      <button onClick= {()=>{alert(parseInt(this.state.a)*parseInt(this.state.b))}}>MUL</button>
      <button onClick= {()=>{alert(parseInt(this.state.a)/parseInt(this.state.b))}}>DIV</button>
      <button onClick= {()=>{alert(parseInt(this.state.a)%parseInt(this.state.b))}}>MOD</button>
      </div>
      </div>
    )
  }
}