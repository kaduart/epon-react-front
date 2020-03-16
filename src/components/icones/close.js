import React from 'react'

export function IcoClose(props){
	return (
		<svg className="icon" viewBox="0 0 100 100" style={props.style?props.style:{}}>
			<title>{props.title?props.title:null}</title>
			<path d="M54.94,50,96.48,8.45a3.49,3.49,0,1,0-4.94-4.93L50,45.06,8.45,3.52A3.49,3.49,0,0,0,3.52,8.45L45.06,50,3.51,91.54a3.49,3.49,0,0,0,4.94,4.94L50,54.93,91.54,96.48a3.47,3.47,0,0,0,2.47,1,3.49,3.49,0,0,0,2.48-6Z"/>
		</svg>
	);
	
}
