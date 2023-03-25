import React from 'react';

import Question from '../components/question.js';

import './quizStyles.css';

export class Quiz extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            questions: [{q: 'What is JSX?',
                        choices: ['a) A standalone programming language', 'b) A CSS framework', 'c) A syntactic extension of JavaScript that looks like HTML', 'd) A templating engine'],
                        indexCorrect: 2
                        }, 
                        {q: 'How can you include JavaScript directly within JSX?', 
                         choices: ['a) Using curly braces: { }', 'b) Using angle brackets: < >', 'c) Using square brackets: [ ]', 'd) Using parentheses: ( )'], 
                         indexCorrect: 0
                        },
                        {q: 'What is the purpose of ReactDOM.render() in a React application?', 
                        choices: ['a) To transpile JSX to JavaScript', 'b) To render React elements to the DOM', 'c) To create a new HTML element', 'd) To manage component state'], 
                        indexCorrect: 1
                        },
                        {q: 'Which one of the following is NOT a valid JSX expression?', 
                        choices: ['a) <div></div>', 'b) <br />', 'c) <br>', 'd) <p>Text</p>'], 
                        indexCorrect: 2
                        },
                        {q: 'How do you define an HTML class in JSX?', 
                        choices: ['a) class', 'b) className', 'c) Class', 'd) class_name'], 
                        indexCorrect: 0
                        }
                    
                    
                    ],
            amountCorrect: 0,
            questionNumber: 0
        }
        this.answeredCorrect = this.answeredCorrect.bind(this);
        this.answeredIncorrect = this.answeredIncorrect.bind(this);
    }
     answeredCorrect(){
         console.log('Answered Correct');
         if (this.state.questionNumber + 1 < this.state.questions.length){

            this.setState((state) => {
                return { amountCorrect: this.state.amountCorrect + 1,
                        questionNumber: this.state.questionNumber + 1 };
                    });
        } else {
            this.setState((state) => {
                return {amountCorrect: this.state.amountCorrect + 1} })
            console.log(`Amount Correct: ${this.state.amountCorrect} | Question Number: ${this.state.questionNumber} `)
            console.log('End of Questions')
            this.props.endOfQuestions(this.state.amountCorrect, this.state.questions.length);
        }
    }
     answeredIncorrect() {
        console.log('Answered Incorrect');
        if (this.state.questionNumber + 1 < this.state.questions.length){
            this.setState((state) => {
                return {questionNumber: this.state.questionNumber + 1 };
                    });
        } else {
            console.log(`Amount Correct: ${this.state.amountCorrect} | Question Number: ${this.state.questionNumber} `)
            console.log('End of Questions')
            this.props.endOfQuestions(this.state.amountCorrect, this.state.questions.length);
        }
     }


    render(){
        return (
            <div className='area'>
                <div className='q'>
                    <Question answeredIncorrect={this.answeredIncorrect} answeredCorrect={this.answeredCorrect} question={this.state.questions[this.state.questionNumber]}/>
                    <div className="homeIconParent"><a href="/"><div className='gg-home' /></a></div>
                    
                </div>

            </div>
        )
    }
}