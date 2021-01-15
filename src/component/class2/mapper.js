import React from "react";

export default class Mapper extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            a: [
                { name: "Jwell", codes: "React"}, 
                { name: "Jay", codes: "Android"},
                { name: "Riya", codes: "Node JS"}
            ],
            name: '',
            code: ''
        }
    }

    handleAdd = () => {
        var a1 = this.state.a;
        a1.push({name: this.state.name, codes: this.state.code});
        this.setState({
            a: a1
        })
    }

    handleDelete = (index) => {
        var a1 = this.state.a;
        a1.splice(index,1);
        this.setState({
            a: a1
        })
    }

    render(){
        return(
            <div>
                {this.state.a.map( 
                    (obj, index) => {
                        return(
                            <div>
                                {obj.name}-{obj.codes}
                                <button
                                    onClick={() => {this.handleDelete(index)}}
                                >
                                    delete
                                </button>
                            </div>
                        )
                    }
                )}
                <h5>ADD USER</h5>
                <input onChange={(e)=>{this.setState({name:e.target.value})}} />
                <input onChange={(e)=>{this.setState({code:e.target.value})}} />
                <button
                    onClick={this.handleAdd}
                >
                    add user
                </button>
            </div>
        )
    }
}