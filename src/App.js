import { Route, Switch } from 'react-router';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
