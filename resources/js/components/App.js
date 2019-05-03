import React from 'react';
import Parent from './Context/Parent';
import Main from './Context2/Main';
import ErrorBoundary from "./ErrorBoundary";
import Clock from "./Clock";
import InnerErrorBoundary from "./InnerErrorBoundary";

export default class App extends React.Component {
    render() {
        return (
            <ErrorBoundary>
                <InnerErrorBoundary>
                    <Clock/>
                </InnerErrorBoundary>
            </ErrorBoundary>
        )
    }
}