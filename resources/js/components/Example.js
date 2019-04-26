import React, {Component} from 'react';

export default class Example extends Component {
    constructor(props) {
        super(props);

        this.state = {
            total: 0,
            admins: 10,
        };
    }

    calculate() {
        this.setState((state, props) => ({
            total: Number(state.admins) + Number(props.users)
        }));
    }

    componentDidMount() {
        this.calculate();
    }

    render() {
        return (
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>Users</th>
                            <th>Admins</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{ this.props.users }</td>
                            <td>{ this.state.admins }</td>
                            <td>{ this.state.total }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}