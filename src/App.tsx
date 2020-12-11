import React from 'react';
import './App.scss';
import 'flexboxgrid';
import Game from './Components/Game/Game';

const App = () => {

  return (
    <section className="game">
      <div className="container container-fluid">
        <div className="row center-xs">
          <div className="col-xs-12">
            <Game />
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
