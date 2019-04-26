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


function Welcome(props) {
    return <h2>Welcome Home {props.name}</h2>;
}


const element = (
  <div>
      <Welcome name="Saeid"></Welcome>
      <Welcome name="Ali"></Welcome>
      <Welcome name="Ahmad"></Welcome>
      <Example firstName="Saeid"/>
  </div>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);

