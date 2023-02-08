import React, { Component} from "react";
import quotes from "../quotes";
import NextButton from "./nextButton";
import TwitterButton from "./twitterButton";
import "../style.css";
import { colors } from "../colors";

class Box extends Component {
    
    constructor(props) {
        
        super(props);
        this.previousQuote = Math.floor(Math.random() * quotes.length)
        this.previousColor = Math.floor(Math.random() * colors.length)
       this.state = { 
        quote : quotes[this.previousQuote],
        color : colors[this.previousColor]
    };
    
        this.handleNext = this.handleNext.bind(this);
      }
      handleNext() {
        let newQuote = null ;
        do{
         newQuote = Math.floor(Math.random() * quotes.length) 
        }
        while(this.previousQuote === newQuote);
        this.previousQuote = newQuote ;
        this.setState({ quote : quotes[this.previousQuote]})

        let newColor = null ;
        do{
         newColor = Math.floor(Math.random() * colors.length) 
        }
        while(this.previousColor === newColor);
        this.previousColor = newColor ;
        this.setState({ color : colors[this.previousColor]})
    }
    render(){
        const url = 'https://twitter.com/intent/tweet?text=\"'+ this.state.quote.text +'\" '+this.state.quote.author
        return (
            <div id="container" style={{ backgroundColor : this.state.color }}>
        <div id="quote-box">
            <p id="text" style={{ color : this.state.color }}><i class="fa fa-quote-left"> </i>  {this.state.quote.text}  <i class="fa fa-quote-right"></i></p>
            <p id="author" style={{ color : this.state.color }}>_ {this.state.quote.author}</p>
            <div className="buttons">
            <NextButton onClick={ this.handleNext } color={this.state.color} /> <TwitterButton color={this.state.color} text={ this.state.quote.text } author={ this.state.quote.author }/>
            {/* <a href={ url } id="tweet-quote" style={{ backgroundColor : this.state.color }}><i class="fa fa-twitter"></i></a> */}
            </div>
            
        </div></div>
        );
    }
}

export default Box ;