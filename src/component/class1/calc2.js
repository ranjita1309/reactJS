import React from "react";
export default class Calc2 extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            result: this.props.valc
        }
    }

    add = () => {

        this.setState({
            result: parseInt(this.props.vala)+parseInt(this.props.valb)
        })
    }

    sub = () => {

        this.setState({
            result: parseInt(this.props.vala)-parseInt(this.props.valb)
        })
    }


    mul = () => {

        this.setState({
            result: parseInt(this.props.vala)*parseInt(this.props.valb)
        })
    }

    div = () => {
        
        this.setState({
            result: parseInt(this.props.vala)/parseInt(this.props.valb)
        })
    }

    mod = () => {

        this.setState({
            result: parseInt(this.props.vala)%parseInt(this.props.valb)
        })
    }


    render(){
        return(
            <div>
                <button onClick={this.add}>+</button>
                <button onClick={this.sub}>-</button>
                <button onClick={this.mul}>*</button>
                <button onClick={this.div}>/</button>
                <button onClick={this.mod}>%</button>
                Result : {this.state.result}
               
            </div>
        )
    }
}