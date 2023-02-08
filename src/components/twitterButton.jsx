import React, { Component} from "react";
import quotes from "../quotes";

class TwitterButton extends Component {
    state = {
    };
    render(){
        const url = 'https://twitter.com/intent/tweet?text='+ this.props.text +'\" '+this.props.author

        return (
        <a id="tweet-quote" href={ url } target="_top" style={{ backgroundColor: this.props.color }}><i class="fa fa-twitter"></i></a>
        );
    }
}

export default TwitterButton ;