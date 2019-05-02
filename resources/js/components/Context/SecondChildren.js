import React from 'react';
import {ThemeContext} from './context';

export default class SecondChildren extends React.Component {

    static contextType = ThemeContext;

    constructor(props) {
        super(props);
    }

    render() {
        return <span>Hello {this.context}</span>
    }
}