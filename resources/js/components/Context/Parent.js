import React from 'react';
import {ThemeContext} from './context';
import FirstChildren from './FirstChildren';

export default class Parent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ThemeContext.Provider value={'dsds'}>
                <FirstChildren/>
            </ThemeContext.Provider>
        )
    }
}