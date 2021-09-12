import React from 'react';

class App3 extends React.Component {
    state = {
        isLoading : true
    };
    //componentDidMount()는 제일 먼저 수행된다.
    //6초 후에 isLoading이 false로 변경되면서 We are ready가 노출된다.
    componentDidMount() {
        setTimeout(()=>{
            this.setState({isLoading:false});
        },6000);
    }
    render(){
        const {isLoading} = this.state;
        return  <div>{isLoading ? "Loading" : "We are ready"}</div>;
    }
}

export default App3;