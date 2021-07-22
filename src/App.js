import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import ConfirmLocation from './ConfirmLocation';
import LandingPage from './LandingPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/confirm-location"><ConfirmLocation /></Route>
        <Route exact path="/landing-page"><LandingPage /></Route>
      </Router>
    </div>
  );
}

export default App;
