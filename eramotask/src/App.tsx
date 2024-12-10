
import AllCoupons from "./components/AllCoupons"
import Brands from "./components/Brands"
import CouponsSlider from "./components/CouponsSlider"
import Discount from "./components/discount"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Info from "./components/Info"
import Maqalat from "./components/maqalat"
import Navbar from "./components/Navbar"
import SliderComponent from "./components/SliderComponent"
import SpeacialCoupon from "./components/SpeacialCoupon"




const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <SliderComponent />
      <CouponsSlider />
      <Brands />
      <Info />
      <AllCoupons />
      <SpeacialCoupon />
      <Maqalat />
      <Discount />
      <Footer />
    </main>
  )
}

export default App