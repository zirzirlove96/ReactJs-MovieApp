import React from 'react';
import PropTypes from 'prop-types';

/**
function Food(dish){
  return <Potato name={dish.name} description={dish.desc}/>
}
 */

 
const favFood = [
  {
    id: 1,
    name: "Baicon",
    desc: "This is Baicon",
    rating: 4.7
  },
  {
    id: 2,
    name: "Kimchi",
    desc: "This is Kimchi",
    rating: 3.5
  }];

function Potato({ name, description, rating }) {
  return <div>
    <h1>I Love {name}</h1>
    <h3>{description}</h3>
    <h4>점수 : {rating}</h4>
  </div>
}

Potato.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

class App extends React.Component {
  state={
    count: 0
  }

  add = () => {
    /**this.setState({count:this.state.count+1})*/
    this.setState(current => ({count: current.count + 1}))
    /**this.state.count를 사용하지 않고 current가 this.state.count가 되어
     * 직접 사용하지 않게 해준다.
     */

  }

  minus = () => {
    this.setState(current => ({count:current.count-1}))
  }
  /**add, minus function을 이용 , 
   * setState를 이용하여 render는 refresh 되고 
   * render함수를 호출해 준다.
   */

  render() {
    return <div>
        <h1>The number is: {this.state.count}</h1>
          <button onClick={this.add}>Add</button>
          <button onClick={this.minus}>Minus</button>
          </div>
  }
}

/**
function App() {
  return (
    <div className="App">
      <h1>Hello This is React Course</h1>

    {react에서는 javascript+html과 비슷하게 진행하는데
      여기에서 component에 값을 전달하여 component에서 값을 
      html로 밀어넣어준다.
      name="Baicon"이라는 property를 주었을 때 javascript의 함수와 같이
      받아낸다.
     
    <Potato name="Kimchi"/>
    <Potato name="Ramen"/>
      }

      {favFood.map(food => (
        <Potato key={food.id} name={food.name} description={food.desc} rating={food.rating} />
      ))}

      {favFood.map(Food) map은 list처럼 하나씩 출력해주고,
    Food는 return값으로 jsx 역할을 한다. }
    </div>
  );
} */

export default App;
