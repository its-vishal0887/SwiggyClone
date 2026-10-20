import React from 'react'
import Header from './components/Header';
import FoodOption from './components/FoodOption';
import BannerCard from './components/BannerCard';
import DelCities from './components/DelCities';
import FooterSection from './components/FooterSection';
// import RestaurentOption from './components/RestaurentOption';

const App = () => {
  return (
    <div>
      <Header/>
      <FoodOption/>
      {/* <RestaurentOption/> */}
      <BannerCard/>
      <DelCities/>
      <FooterSection/>
    </div>
  )
}

export default App