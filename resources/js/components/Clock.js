import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Clock',
            date: new Date(),
        };
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (<div>{this.state.name} # {this.state.date.toLocaleTimeString2()}</div>)
    }
}