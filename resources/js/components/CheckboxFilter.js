import React from 'react';

export default class CheckboxFilter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filters: [1, 3],
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let target = event.target;

        this.setState((state) => {
            return {
                filters: target.checked
                    ? state.filters.concat([parseInt(target.value)])
                    : state.filters.filter(filter => filter != target.value)
            }
        });
    }

    render() {
        return (
            this.props.choices.map((choice) => {
                return (
                    <label key={choice.id}>
                        <input name="filters[]" type="checkbox"
                               value={choice.id}
                               checked={this.state.filters.includes(choice.id)}
                               onChange={this.handleChange}/>
                        {choice.title}
                    </label>
                )
            })
        )
    }
}