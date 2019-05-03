import React from 'react';
import {ThemeContext} from './context';

export default class SecondChildren extends React.Component {

    static contextType = ThemeContext;

    constructor(props) {
        super(props);
    }

    render() {
        let theme = this.context;

        return <button style={{backgroundColor: theme.background, color: theme.foreground}}>Button</button>
    }
}