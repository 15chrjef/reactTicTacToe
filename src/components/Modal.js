import React from 'react';
import Modal from 'react-modal';

export default class PlayersModal extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
		const { win, player1, player2, playerTurn, modalIsOpen } = this.props.state;
		let modalContent;
		let modalStyle;
		if(win === true) {
			var name;
			if(playerTurn === 1){
				name = player2 || `player2`;
			} else {
				name = player1 || `player1`;
			}
			modalContent = <h1 style={{textAlign: 'center'}} ref="subtitle">Congratulations {name} you won!</h1>
			modalStyle = {overlay: {...styles.modalStyle.overlay}, content: {...styles.modalStyle.content, ...styles.modalContent} }
		} else if(win === '') {
			modalStyle = styles.modalStyle
			modalContent = (
				<div>
					<h2 ref="subtitle">Choose Your Players</h2>
					<form style={{display: 'flex', flexDirection: 'column'}}>
						<label>Player1</label><input id='player1' onChange={this.props.handleChange} value={player1} type='text'/>
						<label style={{marginTop: '20px'}}>Player2</label><input  id='player2' onChange={this.props.handleChange} value={player2} type='text'/>
						<button style={styles.submitButton} onClick={this.props.closeModal.bind(this)}>Submit</button>
					</form>
				</div>
			)
		} else if(win === 'tie') {
			modalStyle = {overlay: {...styles.modalStyle.overlay}, content: {...styles.modalStyle.content, ...styles.modalContent} }
			modalContent = ( 
				<h1 style={{textAlign: 'center'}}>
					<div>We have a Tie!</div>
					<div>No Winners Today.</div>
				</h1>
			)
		}
		return (
			<div>
				<Modal
					isOpen={modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.props.closeModal.bind(this)}
					style={modalStyle}
					contentLabel="Example Modal"
				>
					{modalContent}
				</Modal>
			</div>
		)
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
			padding                    : '20px',
		}
	},
	submitButton: {
		backgroundColor: 'black',
		color: 'white',
		height: '40px',
		width: '200px',
		border: 'none',
		marginTop: '10px'
	},
	modalContent: {
		display: 'flex', 
		justifyContent: 'center', 
		alignItems: 'center'
	}
}