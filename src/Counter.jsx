import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {count:0 }
    }
    handleIncrease= (e)=>{
        e.preventDefault();
        // console.log("increased");
        this.setState({count:this.state.count +1})
    }
    handleDecrease= (e)=>{
        e.preventDefault();
        console.log("decreased")
        this.setState({count:this.state.count -1})
    }
    handleIncreaseByAmount= (e)=>{
        e.preventDefault();
        console.log("increasedbyamount")
        this.setState({count:this.state.count +30})
    }
    render() {
        return (
            <div>
                <h1>COUNT:{this.state.count}</h1>
                <button onClick= {this.handleIncrease}>increase</button>
                <button onClick= {this.handleDecrease}>deincrease</button>
                <button onClick= {this.handleIncreaseByAmount}>increaseByAmount</button>
            </div>
        );
    }
}

export default Counter;
