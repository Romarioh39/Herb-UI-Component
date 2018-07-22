import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Modal from './modal'

class App extends Component {
  constructor(props){
    super(props)
      this.state = false
  }

  render() {
    return (
        <div className="App-intro">
        <button onClick={this.toggleModal}>Open</button>
        <Modal
          isOpen={this.state.isModalOpen}
          toggleModal={this.toggleModal}
        />
      </div>
    );
  }
}

export default App;
