import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Services from './component/Services/Services';
import Intro from './component/Intro/Intro';
import Experience from './component/Experience/Experience';
import Works from './component/Works/Works';
import Resume from './component/Resume/Resume';
import Portfolio from './component/Portfolio/Portfolio';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div
    className="App"
    
  >
    <Header/>
    <Intro/>
    <Services/>
    {/* <Experience/> */}
    {/* <Works/> */}
    <Portfolio/>
    <Resume/>
    <Contact/>
    <Footer/>

    </div>
  );
}

export default App;
