import './App.css'
import TopNavBar from './components/TopNavBar'
import SearchBox from './components/SearchBox'
import FoodMenuList from './components/FoodMenuList'
import ExploreFoodList from './components/ExploreFoodList'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <TopNavBar/>
    <SearchBox/>
    <ExploreFoodList/>
    <FoodMenuList/>
    <Footer/>
    </>
  )
}

export default App
