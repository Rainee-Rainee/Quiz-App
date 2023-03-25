import React from "react";

import titleStyles from './titleStyles.css';

export default class Title extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div>
            <div className="rainbow-border"><p className="shaking">Welcome to React Quiz!</p></div>
            
        </div>)
    }
}

