import ReactDOM from "react-dom";
import React from "react";
import Example from "./components/Example";

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/Example');

import Clock from './components/Clock';
import Laser from "./components/Laser";
import CheckboxFilter from './components/CheckboxFilter';


function Welcome(props) {
    return <h2>Welcome Home {props.name}</h2>;
}

let choices = [
    {id: 1, title: "Option 1"},
    {id: 2, title: "Option 2"},
    {id: 3, title: "Option 3"},
];

const element = (
    <div>
        <CheckboxFilter choices={choices}/>
    </div>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);

