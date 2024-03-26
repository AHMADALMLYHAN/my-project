import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import BestBook from './components/BestBook/BestBook'
import Banner from './components/Banner/Banner'
import AppStoreBanner from './components/AppStoreBanner/AppStoreBanner'
import AllBooks from './components/AllBooks/AllBooks'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'

//aos import 
import AOS from "aos";
import "aos/dist/aos.css"
import { useState } from 'react'
import Popup from './components/Popup/Popup'

const App = () => {

  const [orderPopup,setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-out-sine",
      delay:100,
    });
    AOS.refresh();
  },[]);



  return (
    <>
    <div className='bg-white dark:bg-gray-900 
    dark:text-white duration-200'>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <BestBook handleOrderPopup={handleOrderPopup}/>
      <Banner/>
      <AppStoreBanner/>
      <AllBooks/>
      <Testimonial/>
      <Footer/>
      <Popup handleOrderPopup={handleOrderPopup} orderPopup={orderPopup}/>
    </div>
    </>
  )
}

export default App 