import React from 'react';

export default class DisplayHeader extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
		var currentPlayer = this.props.state.playerTurn === 1 ? this.props.state.player1 : this.props.state.player2;
		currentPlayer = currentPlayer === '' ? 'Player' + this.props.state.playerTurn : currentPlayer;
		return (
			<div style={styles.headerStyle}>
				<div>Tic Tac Toe</div>
				<div>{currentPlayer} You are Up!</div>
			</div>
		)
	}
}

const styles = {
	headerStyle: {
		fontFamily: 'Lato',
		alignItems: 'center',
		display: 'flex', 
		justifyContent: 'center', 
		flexDirection: 'column',
		backgroundColor: '#00ACC1', 
		color: 'white',
		fontSize: '30px',
		height: '60px', 
		marginLeft: '-20px',
		marginRight: '-20px',
		padding: '40px',
		marginTop: '-20px'
	}
}