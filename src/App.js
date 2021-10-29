import logo from './assets/images/logo.svg';
import './App.css';
import Navbar from './components/navbar';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
    </div>
  );
}

export default App;
