import React from 'react';

export default class CheckboxFilter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filters: [1,2],
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let target = event.target;

        console.log(target.name, target.value);
    }

    render() {
        return (
            this.props.choices.map((choice) => {
                return (
                    <label key={choice.id}>
                        <input name="filters[]" type="checkbox"
                               value={choice.id}
                               checked={this.state.filters}
                               onChange={this.handleChange}/>
                        { choice.title }
                    </label>
                )
            })
        )
    }
}