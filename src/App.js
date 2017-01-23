import React, { Component } from 'react';
import PlayersModal from './components/Modal';
import Board from './components/Board';
import globalStyles from '../public/app.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      player1: '',
			player2: '',
      playerTurn: 1,
      modalIsOpen: true,
      boardLayout: [[ `x`, `x`, `x`],[ `x`, `x`, `x`],[ `x`, `x`, `x`]],
      win: ''
    }
  }
  closeModal(e) {
		e.preventDefault()
		this.setState({
			modalIsOpen: false
		})
	}
  checkBoard() {
    const { boardLayout } = this.state;
    var b = boardLayout;
    var match;
    if(b[0][0] === b[0][1] && b[0][2] === b[0][0]){
      match = b[0][0];
    } 
    if(b[0][0] === b[1][0] && b[2][0] === b[0][0]){
      match = b[0][0];
    } 
    if(b[1][0] === b[1][1] && b[1][2] === b[1][0]){
      match = b[1][0];
    } 
    if(b[2][0] === b[2][1] && b[2][2] === b[2][0]){
      match = b[2][0];
    } 
    if(b[0][1] === b[1][1] && b[2][1] === b[0][1]){
      match = b[0][1];
    } 
    if(b[0][2] === b[1][2] && b[2][2] === b[0][2]){
      match = b[0][2];
    } 
    if(b[0][0] === b[1][1] && b[2][2] === b[1][1]){
      match = b[0][0];
    } 
    if(b[0][2] === b[1][1] && b[2][0] === b[0][2]){
      match = b[0][2];
    }
    if(match && typeof match === 'number') {
      this.setState({
        win: true,
        modalIsOpen: true
      })
      return;
    }
    for(var i = 0; i < 3; i++) {
      for(var j = 0; j < 3; j++){
        if(typeof b[i][j] === 'string'){
          return
        }
      }
    }
    this.setState({
      win: 'tie',
      modalIsOpen: true
    })
  }
  choosePosition(i, j){
    const { boardLayout, playerTurn } = this.state
    var newBoardLayout = boardLayout.slice();
    if(typeof newBoardLayout[i][j] !== 'number') {
      newBoardLayout[i][j] = playerTurn;
      this.setState({
        boardLayout: newBoardLayout,
        playerTurn: playerTurn === 1 ? 2 : 1
      }, () => { this.checkBoard()})
    }
  }
  handleChange(e) {
		if(e.target.id === 'player1') {
			this.setState({
				player1: e.target.value
			})
		} else {
			this.setState({
				player2: e.target.value
			})
		}
	}
  render() {
    return (
      <div style={{backgroundColor: '#B2EBF2', width: '100%',margin: '0px'}} className="App">
        <Board 
          choosePosition={this.choosePosition.bind(this)}
          state={this.state}
        />
        <PlayersModal 
          closeModal={this.closeModal.bind(this)} 
          state={this.state} 
          handleChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

export default App;
