import './App.css';
import Education from './components/Education';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Home/>
            <Education/>
        </div>
    );
}

export default App;
