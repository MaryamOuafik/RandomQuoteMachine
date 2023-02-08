import React, { Component} from "react";
import quotes from "../quotes";

class NextButton extends Component {
    state = {
    };
    render(){
        return (
        <button id="new-quote" onClick={this.props.onClick} style={{ backgroundColor : this.props.color }}>New quote</button>
        );
    }
}

export default NextButton ;