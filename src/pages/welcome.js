import React from 'react';

import Title from '../components/title.js';
import Ripple from '../components/ripple.js';

import './welcomeStyles.css';

export class Welcome extends React.Component {
    constructor (props){
        super(props);
    }
    render(){
        return (
        <div className='container'>
            <Ripple />
            <div className="title"><a href="/quiz"><Title /></a></div>
        </div>
        )}
}