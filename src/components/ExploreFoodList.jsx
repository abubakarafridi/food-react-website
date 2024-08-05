import pizzaImage from '../assets/pizza.jpg';
import burgerImage from '../assets/burger.jpg';
import momoImage from '../assets/momo.jpg';
import ExploreFood from './ExploreFood';

function ExploreFoodList() {
  const foods = [
    { name: 'Pizza', Image: pizzaImage },
    { name: 'Burger', Image: burgerImage },
    { name: 'Momo', Image: momoImage },
  ];
  return (
    <ExploreFood foods={foods}/>
  );
}

export default ExploreFoodList;
