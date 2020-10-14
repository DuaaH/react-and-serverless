import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game from './pages/Game';
import HighScores from './pages/HighScores';
import GameOver from './pages/gameOver';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Container } from './styled/Container';
import { Main } from "./styled/Main";
import Global from './styled/Global';

function App() {
  return (
    <Router >
      <Main>
        <Global />
        <Container>
          <Navbar />
          <Switch>
            <Route path="/game" component={Game} />
            <Route path="/highScores" component={HighScores} />
            <Route path="/gameOver" component={GameOver} />
            <Route path="/" component={Home} />
          </Switch>
        </Container>
      </Main>
    </Router>
  );
}

export default App;