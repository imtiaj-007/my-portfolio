import './App.css';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Home/>
            <Education/>
            <Experience />
            <Achievements/>
            <Projects/>
            <Skills/>
            <Footer/>
        </div>
    );
}

export default App;
