import pizza from "../assets/pizza.jpg"
import burger from "../assets/burger.jpg"
import momo from "../assets/momo.jpg"
import pasta from "../assets/pasta.jpg"
import sandwich from "../assets/sandwich.jpg"
import steak from "../assets/steak.jpg"
import FoodMenu from "./FoodMenu"

function FoodMenuList() {
    const foodNames = [
        {name:'Pizza', Image: pizza, price: "20", ingredients: "Made with italian sauce, chicken and vegetables"},
        {name:'Burger', Image: burger, price: "12", ingredients: "Made with italian sauce, chicken and vegetables"},
        {name:'Momo', Image: momo, price: "22", ingredients: "Made with italian sauce, chicken and vegetables"},
        {name:'Pasta', Image: pasta, price: "25", ingredients: "Made with italian sauce, chicken and vegetables"},
        {name:'Sandwich', Image: sandwich, price: "4", ingredients: "Made with italian sauce, chicken and vegetables"},
        {name:'Steak', Image: steak, price: "29", ingredients: "Made with italian sauce, chicken and vegetables"},
    ]
  return (
    <FoodMenu foodNames={foodNames}/>
  )
}

export default FoodMenuList