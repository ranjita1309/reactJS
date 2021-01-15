import React from "react";
export default class SumAvg2 extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            sum: 0,
            avg: 0

        }
    }

    handleClick = () => {

        this.setState({
            sum: parseInt(this.props.vala)+parseInt(this.props.valb)
        },function(){
            this.setState({
                avg: this.state.sum/2
            })
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Calculate</button>
                <br/>Sum: {this.state.sum}
                <br/>Average: {this.state.avg}
            </div>
        )
    }
}