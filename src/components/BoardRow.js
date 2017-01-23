import React from 'react';

const boardRow = (props) => {
	var { rowData,rowNumber } = props;
	var cp = props.choosePosition
	return (
		<div style={props.style}>
			<div style={styles.pStyle} onClick={()=>{cp(rowNumber,0)}}> {rowData[0][0]}</div>|
			<div style={styles.pStyle} onClick={()=>{cp(rowNumber,1)}}> {rowData[0][1]}</div>|
			<div style={styles.pStyle} onClick={()=>{cp(rowNumber,2)}}> {rowData[0][2]}</div>
		</div>
	)
}	

const styles = {
	pStyle: {
		display: 'flex',
		fontFamily: 'Lato',
		cursor: 'pointer',
		width: '200px',
		alignItems: 'center',
		justifyContent: 'center'
	}
}


export default boardRow