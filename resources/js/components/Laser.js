import React from 'react';

export default class Laser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: false,
        };

        this.toggleStatusByBinding = this.toggleStatusByBinding.bind(this);
    }

    // toggleByClassField = () => {
    //     this.setState(state => ({
    //         status: !state.status
    //     }));
    // };

    toggleStatusByBinding() {
        this.setState(state => ({
            status: !state.status
        }));
    }

    toggleStatusByListenerType() {
        this.setState(state => ({
            status: !state.status
        }));
    }

    render() {
        return (
            <div className="container">
                <button onClick={this.toggleStatusByBinding}>Toggle Laser Status By Binding</button>
                {/*<button onClick={this.toggleByClassField}>Toggle Laser Status By Class Field</button>*/}
                <button onClick={(e) => this.toggleStatusByListenerType(e)}>Toggle Laser Status By Listener Type</button>
                <h1>Laser Status: {this.state.status ? 'true' : 'false'}</h1>
            </div>
        );
    }
}