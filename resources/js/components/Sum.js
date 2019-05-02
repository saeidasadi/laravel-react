import React from 'react';
import {add} from '../services/Math';



export default class Sum extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            a: 0,
            b: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let target = event.target;

        this.setState({
            [target.name]: parseInt(target.value),
        });
    }

    render() {
        return (
            <div>
                <input type="number" name="a" value={this.state.a} onChange={this.handleChange} />
                <span> + </span>
                <input type="text" name="b" value={this.state.b} onChange={this.handleChange}/>
                <span> = { add(this.state.a, this.state.b) }</span>
            </div>
        )
    }
}