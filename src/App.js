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

function App() {
  return (
    <div className="App">
      <h1>Hello This is React Course</h1>

      {/**react에서는 javascript+html과 비슷하게 진행하는데
     * 여기에서 component에 값을 전달하여 component에서 값을 
     * html로 밀어넣어준다.
     * name="Baicon"이라는 property를 주었을 때 javascript의 함수와 같이
     * 받아낸다.
     */
      /**
    <Potato name="Kimchi"/>
    <Potato name="Ramen"/>
      */}

      {favFood.map(food => (
        <Potato key={food.id} name={food.name} description={food.desc} rating={food.rating} />
      ))}

      {/**favFood.map(Food) /**map은 list처럼 하나씩 출력해주고,
    Food는 return값으로 jsx 역할을 한다. */}
    </div>
  );
}

export default App;
