import React, { Component } from 'react';
import PlayersModal from './components/Modal';
import Board from './components/Board';

class App extends Component {
  constructor() {
    super();
    this.state = {
      player1: '',
			player2: '',
      playerTurn: 1,
      modalIsOpen: true,
      boardLayout: [['0','0','0'],['0','0','0'],['0','0','0']],
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
    } else if(b[0][0] === b[1][0] && b[2][0] === b[0][0]){
      match = b[0][0];
    } else if(b[1][0] === b[1][1] && b[1][2] === b[1][0]){
      match = b[1][0];
    } else if(b[2][0] === b[2][1] && b[2][2] === b[2][0]){
      match = b[2][0];
    } else if(b[0][1] === b[1][1] && b[2][1] === b[0][1]){
      match = b[0][1];
    } else if(b[0][2] === b[1][2] && b[2][2] === b[0][2]){
      match = b[0][2];
    } else if(b[0][0] === b[1][1] && b[2][2] === b[1][1]){
      match = b[0][0];
    } else if(b[0][2] === b[1][1] && b[2][0] === b[0][2]){
      match = b[0][2];
    }
    if(match && typeof match === 'number') {
      this.setState({
        win: true
      })
    }
  }
  choosePosition(i, j){
    console.log('hasdfasd')
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
      <div className="App">
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
