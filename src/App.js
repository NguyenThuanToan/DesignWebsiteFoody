import './App.css';
import Work from './Components/Work';
import About from './Components/About';
import Home from './Components/Home';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Work/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
