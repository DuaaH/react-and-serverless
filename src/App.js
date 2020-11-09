import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game from './pages/Game';
import HighScores from './pages/HighScores';
import GameOver from './pages/GameOver';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Container } from './styled/Container';
import { Main } from "./styled/Main";
import { GlobalStyle } from './styled/Global';
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const { isLoading } = useAuth0();

  return (
    <Router >
      <GlobalStyle />
      <Main>
        {isLoading && <p>Loading...</p>}
        {!isLoading && (
          <Container>
            <Navbar />
            <Switch>
              <Route path="/game" component={Game} />
              <Route path="/highScores" component={HighScores} />
              <Route path="/gameOver" component={GameOver} />
              <Route path="/" component={Home} />
            </Switch>
          </Container>
        )}
      </Main>
    </Router>
  );
}

export default App;
