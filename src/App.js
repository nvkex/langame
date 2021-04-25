import { Route, Switch } from 'react-router';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import ModeContainer from './containers/ModeContainer';
import GuessMode from './components/GameModes/Guess/GuessMode';
import LearnMode from './components/GameModes/Learn/LearnMode';
import { useState } from 'react';
import { themeConfig } from './data';
import { ThemeProvider } from 'react-jss';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  var theme = themeConfig.light;
  if(darkMode){
    theme = themeConfig.dark;
  }
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Switch>

          <Route exact path="/" component={LandingPage} />
          <ModeContainer>
            <Switch>
              <Route exact path="/guess" component={GuessMode} />
              <Route exact path="/learn" component={LearnMode} />
            </Switch>
          </ModeContainer>

        </Switch>
      </ThemeProvider>
    </div >
  );
}

export default App;


/*
https://picsum.photos/
https://portal.clarifai.com/users/j8vnv4pavgbw/apps/4d00ea9a8e5c46d794705a4fb30f7aa2/model-mode
https://github.com/Clarifai/clarifai-nodejs-grpc
*/
