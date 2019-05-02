import React from 'react';
import SecondChildren from './SecondChildren';


export default class FirstChildren extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SecondChildren/>
        )
    }
}