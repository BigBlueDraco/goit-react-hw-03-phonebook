import React, { Component } from "react";
import PropTypes from 'prop-types';

import s from "components/Button/button.module.scss"
export class Button extends Component {
    render(){
        return(
            <button className={s.button} type={this.props.type||"button"} onClick={(e) => {this.props.func&&this.props.func(e)}}>{this.props.text}</button>
        )
    }        
}

Button.propTypes ={
    func: PropTypes.func,
    text: PropTypes.string.isRequired,
}