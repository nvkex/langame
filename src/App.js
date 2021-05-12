import { Route, Switch } from 'react-router';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import ModeContainer from './containers/ModeContainer';
import GuessMode from './components/GameModes/Guess/GuessMode';
import LearnMode from './components/GameModes/Learn/LearnMode';
import { useState } from 'react';
import Mahjong from './components/GameModes/Mahjong/Mahjong';
import { themeConfig } from './data';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.backgroundColor ? theme.backgroundColor : 'inherit'};
    background-image: ${({ theme }) => theme.backgroundImage ? theme.backgroundImage : 'inherit'};
  }
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div>
      {/* <ThemeContext.Provider value={darkMode}> */}
      <ThemeProvider theme={darkMode ? themeConfig.dark : themeConfig.light}>
        <GlobalStyle/>
          <Switch>

            <Route exact path="/" component={LandingPage} />
            <ModeContainer setDarkMode={setDarkMode} dark={darkMode}>
              <Switch>
                <Route exact path="/guess" component={GuessMode} />
                <Route exact path="/learn" component={LearnMode} />
                <Route exact path="/mahjong" component={Mahjong} />
              </Switch>
            </ModeContainer>

          </Switch>
      </ThemeProvider>
      {/* </ThemeContext.Provider> */}
    </div >
  );
}

export default App;
