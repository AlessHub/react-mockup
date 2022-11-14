import './css/styles.css';
import Navbar from './components/Navbar';
import LandingPage from './views/LandingPage';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
    </div>
  );
}

export default App;