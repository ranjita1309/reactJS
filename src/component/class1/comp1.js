import React from 'react'


export default class Comp1 extends React.Component {

    constructor(){
        super();
        this.state = {
            val : 500
        }
    }
    handleVal = (event) => {this.setState({
        val:event.target.value
        })
     }
    render() {
        return(

            <div>
                Hello From Jwell
               &nbsp; {this.state.val}
               <input onChange = {this.handleVal}></input>
            </div>
        )
    }
}
