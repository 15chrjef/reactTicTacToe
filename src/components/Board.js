import React, { Component } from 'react';
import BoardTitle from './BoardTitle';
import BoardDisplay from './BoardDisplay';

export default class Board extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return(
			<div >
				<BoardTitle state={this.props.state}/>
				<BoardDisplay choosePosition={this.props.choosePosition} state={this.props.state}/>
			</div>
		)
	}
}