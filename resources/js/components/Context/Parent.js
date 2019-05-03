import React from 'react';
import {ThemeContext, themes} from './context';
import FirstChildren from './FirstChildren';

export default class Parent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ThemeContext.Provider value={themes.green}>
                <FirstChildren/>
            </ThemeContext.Provider>
        )
    }
}