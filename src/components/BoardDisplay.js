import React from 'react';
import BoardRow from './BoardRow'

export default class BoardDisplay extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
		const { boardLayout } = this.props.state
		var cp = this.props.choosePosition;
		var b = boardLayout;
		console.log('bbb', b.slice(0,1))
		return (
			<div style={styles.displayStyle}>
				<BoardRow 
					style={styles.firstTwoRowsStyle}
					rowNumber={0}
					rowData={b.slice(0,1)}
					choosePosition={this.props.choosePosition}
				/>
				<BoardRow 
					style={styles.firstTwoRowsStyle}
					rowNumber={1}
					rowData={b.slice(1,2)}
					choosePosition={this.props.choosePosition}
				/>
				<BoardRow 
					style={{fontSize: '175px', color: '#00ACC1', display: 'flex', fontFamily: 'Lato'}}
					rowNumber={2}
					rowData={b.slice(2)}
					choosePosition={this.props.choosePosition}
				/>
			</div>
		)
	}
}

const styles = {
	pStyle: {
		fontFamily: 'Lato',
		cursor: 'pointer',
	},
	firstTwoRowsStyle: {
		fontSize: '175px', 
		borderBottom: '10px solid #00ACC1', 
		color: '#00ACC1', 
		display: 'flex', 
		fontFamily: 'Lato'
	},
	displayStyle: {
		fontFamily: 'Lato',
		alignItems: 'center',
		display: 'flex', 
		justifyContent: 'center', 
		flexDirection: 'column',
		backgroundColor: '#B2EBF2', 
		fontSize: '30px',
		marginLeft: '-20px',
		marginRight: '-20px',
		padding: '40px',
	}
}