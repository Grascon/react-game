import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import players from "./players.json";
import './App.css';
import Cards from './components/Cards';


class App extends Component {
  state = {
    players: players
  }
  handleRenderPlayers = () => {
    return this.state.players.map((player) =>
      <Cards
        image={player.image}
        name={player.name}
        key={player.id}
      />
    );
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content">
                {this.handleRenderPlayers()}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;