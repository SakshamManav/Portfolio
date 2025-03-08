import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MainBody from './Components/MainBody';
import { useEffect } from 'react';
import About from './Components/About';
import Project from './Components/Project';
import  Contact  from './Components/Contact';
// import LetterGlitch from './Components/abcd';
// import Lightning from './Components/abcd';
import Squares from './Components/abcd';
import Particles from './Components/Particles';

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "black";
  }, []);
  return (
    <div className="App">
    {/* <Squares borderColor='#141414' direction='diagonal' speed={1}/> */}
    <Particles particleCount={300}/>
      <Navbar/>
      <MainBody/>
      <About/>
      <Project/>
      <Contact />
      
    </div>
  );
}

export default App;
