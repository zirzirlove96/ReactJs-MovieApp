import React from 'react';

//React Component에서 확장된 상황
//class Component로 react Componentn로 부터 확장되고 screen에 표시된다. screen에 표시되는 것을 render method 안에 넣어줘야 한다.
//react는 자동적으로 나의 class component의 render method를 실행한다.
class App2 extends React.Component
{
    state = {
        count:0
    };
    add = () => {
        //this.state.count +=1 ;
        this.setState(current => ({count:current.count+1}));
        //this.state.count 는 외부의 state에 의존하므로 좋지 않음
        // current 속성을 사용하여 count를 늘려주기
    }
    minus = () => {
        //this.state.count -= 1;
        this.setState({count:this.state.count-1});
    }
    render(){
        return <div>
            <h1>This Number Is {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
        </div>
    }
}

export default App2;