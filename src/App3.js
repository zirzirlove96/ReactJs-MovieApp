import React from 'react';
import PropTypes from 'prop-types';

class App3 extends React.Component{
    state = {
        isLoading: true
    }
    componentDidMount() {
        setTimeout(()=> {
            this.setState({isLoading: false});
        },6000);
    }/**6초 뒤에 state의 변화가 일어나게 했다. */
    render() {
        const {isLoading} = this.state
        return <div>{isLoading ? "Loading..." : "We are ready."}</div>
    }
}

export default App3;