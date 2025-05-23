import Logo from './assets/Logo';
import './App.css'
import Navbar from './assets/Navbar';
import Slider from './assets/Slider'
import Service from './assets/Service';
import Device from './assets/Device';
import Refurbished from './assets/Refurbished';
import Laptop from './assets/Laptop';
import Exclusive from './assets/Exclusive';
import Banner from './assets/Banner';
import Tranding from './assets/Tranding';
import Last from './assets/Last'
import Footer from './assets/Footer';
import Customer from './assets/Customer'
import About from './assets/About'
function App() {
  

  return (
    <div>
      <Logo/>
      <Navbar/>
      <Slider/>
      <Service/>
      <Device/>
      <Refurbished/>
      <Laptop/>
      <Exclusive/>
      {/* <Banner/> */}
      <Customer/>
      <Tranding/>
      <Last/>
      <About/>
      <Footer/>
    </div>
    
  )
}

export default App;
