import React from 'react';


export default class BoardDisplay extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
		const { boardLayout } = this.props.state
		var cp = this.props.choosePosition;
		var b = boardLayout;
		return (
			<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
				<div style={{fontSize: '150px', borderBottom: '1px solid black', display: 'flex'}}>
					<div style={styles.pStyle} onClick={()=>{cp(0,0)}}> {b[0][0]} </div>|
					<div style={styles.pStyle} onClick={()=>{cp(0,1)}}> {b[0][1]} </div>|
					<div style={styles.pStyle} onClick={()=>{cp(0,2)}}> {b[0][2]} </div>
				</div>
				<div style={{fontSize: '150px', borderBottom: '1px solid black', display: 'flex'}}>
					<div style={styles.pStyle} onClick={()=>{cp(1,0)}}> {b[1][0]} </div>|
					<div style={styles.pStyle} onClick={()=>{cp(1,1)}}> {b[1][1]} </div>|
					<div style={styles.pStyle} onClick={()=>{cp(1,2)}}> {b[1][2]} </div>
				</div>
				<div style={{fontSize: '150px', display: 'flex'}}>
					<div style={styles.pStyle} onClick={()=>{cp(2,0)}}> {b[2][0]} </div>|
					<div style={styles.pStyle} onClick={()=>{cp(2,1)}}> {b[2][1]} </div>|
					<div style={styles.pStyle} onClick={()=>{cp(2,2)}}> {b[2][2]} </div>
				</div>
			</div>
		)
	}
}

const styles = {
	pStyle: {
		cursor: 'pointer'
	}
}