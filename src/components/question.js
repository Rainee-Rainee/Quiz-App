import React from "react";

import './questionStyles.css';

export default class Question extends React.Component{
    constructor(props){
        super(props);
        this.correctOrIncorrect = this.correctOrIncorrect.bind(this);
        }
    
    correctOrIncorrect(choiceIndex, indexCorrect){
        if (choiceIndex === indexCorrect){
            return 'correct'
        } else {
            return 'incorrect'
        }
    }

    render(){
        
        const answers = this.props.question.choices.map((item, index)=>{
            return (
            <div>
                <button key={index} 
                        className="answerButton" 
                        onClick={ ()=>{if (this.correctOrIncorrect(index, this.props.question.indexCorrect)==='correct'){
                                        this.props.answeredCorrect();} else {
                                            this.props.answeredIncorrect();
                                        }}
                                }>
                        {item}
                </button>
            </div>)
        })

        return (
        <div className="questionBox">
            <div className="question">{this.props.question.q}</div>
            <div className="answer">{answers}</div>
        </div>
        )
    }
}
