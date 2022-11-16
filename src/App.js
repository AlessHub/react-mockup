import './css/styles.css';
import LandingPage from './views/LandingPage';
import DiscoverPage from './views/DiscoverPage';
import RegisterPage from './views/RegisterPage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
function App() {
  return (
  <Router>
    <Routes>
      <Route exact path="/" element={<LandingPage/>}/>
      <Route exact path="/Discover" element={<DiscoverPage/>}/>
      <Route exact path="/Register" element={<RegisterPage/>}/>
    </Routes>
  </Router>
  )}

export default App