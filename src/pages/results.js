import React from 'react';


import './resultsStyles.css';

export class Results extends React.Component {
    constructor (props){
        super(props);
        console.log(props);
    }
    render(){
        return (
        <div className='box'> 
            <div className='page'><p className='rainbow'>CONGRATULATIONS YOU GOT {this.props.amountCorrect} / {this.props.numberOfQuestions} CORRECT!</p></div>
        </div>
        )}
}