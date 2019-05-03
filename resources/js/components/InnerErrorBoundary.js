import React from 'react';

export default class InnerErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }

    static getDerivedStateFromError(error) {
        return {
            error: error,
        };
    }

    componentDidCatch(error, errorInfo) {
        console.log("Inner Error Boundary Catches Error");
    }

    render() {
        if (this.state.error) {
            return 'Error in Inner Error Boundary';
        }

        return this.props.children;
    }
}