import React from 'react';
import PropsTypes from 'prop-types';

function Food({name, picture, rating}){
  return (
  <div>
    <h2>I Like {name}</h2>
    <h4>{rating} / 5.0</h4>
    <img src={picture}/>
  </div>
  );
}

Food.PropsTypes = {
  name : PropsTypes.string.isRequired,
  picture : PropsTypes.string.isRequired,
  rating : PropsTypes.number.isRequired
}

const foodList = [
  {
    id:1,
    name: "kimchi",
    image: "https://www.seriouseats.com/thmb/KoF1E0wKOWhPLGaSy0gI3hZAXfk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20210527-baechu-kimchi-vicky-wasik-seriouseats-seriouseats-3-18a2d6d7d1d74a7a82cb13ed350218be.jpg",
    rating: 4.7
  },
  {
    id:2,
    name: "bibimbab",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/330px-Dolsot-bibimbap.jpg",
    rating:5.0
  }
]
//Array 형식 

/*function renderFood(dish)
{
 return <Food name={dish.name} picture={dish.image}/> ;
}*/

function App(){
  return(
    <div>
      <h1>Hello!!! Jiyoung!</h1>
      {foodList.map(dish=>(
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
    </div>
  );
}

export default App;
