import React from 'react';
import Modal from 'react-modal';

export default class PlayersModal extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
		if(this.props.state.win) {
			var name;
			if(this.props.state.playerTurn === 1){
				name = this.props.state.player2
			} else {
				name = this.props.state.player1
			}
			return(
				<div>
					<Modal
						isOpen={true}
						onAfterOpen={this.afterOpenModal}
						onRequestClose={this.props.closeModal.bind(this)}
						style={styles.modalStyle}
						contentLabel="Example Modal"
					>
						<h1 ref="subtitle">Congratulations {name} you won!</h1>
					</Modal>
				</div>
			)
		} else {
			return (
				<div>
					<Modal
						isOpen={this.props.state.modalIsOpen}
						onAfterOpen={this.afterOpenModal}
						onRequestClose={this.props.closeModal.bind(this)}
						style={styles.modalStyle}
						contentLabel="Example Modal"
					>
						<h2 ref="subtitle">Choose Your Players</h2>
						<form style={{display: 'flex', flexDirection: 'column'}}>
							<label>Player1</label><input id='player1' onChange={this.props.handleChange} value={this.props.state.player1} type='text'/>
							<label>Player2</label><input id='player2' onChange={this.props.handleChange} value={this.props.state.player2} type='text'/>
							<button onClick={this.props.closeModal.bind(this)}>Submit</button>
						</form>
					</Modal>
				</div>
			)
		}
	}
}

const styles = {
  modalStyle: {
		overlay : {
			position          : 'fixed',
			top               : 0,
			left              : 0,
			right             : 0,
			bottom            : 0,
			backgroundColor   : 'rgba(255, 255, 255, 0.75)'
		},
		content : {
			position                   : 'absolute',
			top                        : '20%',
			left                       : '35%',
			right                      : '35%',
			bottom                     : '20%',
			border                     : '1px solid #ccc',
			background                 : '#fff',
			overflow                   : 'auto',
			WebkitOverflowScrolling    : 'touch',
			borderRadius               : '4px',
			outline                    : 'none',
			padding                    : '20px'
	
		}
	}
}