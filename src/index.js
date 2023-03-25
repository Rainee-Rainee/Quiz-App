import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';

import { Welcome } from './pages/welcome.js';
import {Quiz} from './pages/quiz.js';
import {Results} from './pages/results.js';

function AppWrapper() {
    const navigate = useNavigate();
    return <App navigate={navigate} />;
  }
  
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            results: {
                amountCorrect: 0,
                numberOfQuestions: 0,
            }
        }
        this.endOfQuestions = this.endOfQuestions.bind(this);
    }

    endOfQuestions(howManyCorrect, howManyQuestions){
        console.log('Redirecting');
        this.setState((state)=>{
            return {
                results: {
                          amountCorrect: howManyCorrect,
                          numberOfQuestions: howManyQuestions
                }
                
            }
        });
        console.log(this.state.results);
        this.props.navigate('/results');
    }

    render(){
        return (
            
                
            <div>
                <Routes>
                    <Route path="/results" element={ <Results amountCorrect={ this.state.results.amountCorrect} numberOfQuestions={this.state.results.numberOfQuestions}/> } />
                    <Route path="/" element={<Welcome />} />
                    <Route path="/quiz" element={<Quiz endOfQuestions={this.endOfQuestions}/>}/>
                </Routes>
            </div>
        )
    }
}

render(<Router><AppWrapper /></Router>, document.getElementById('root'));