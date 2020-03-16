import React from 'react'

export function IcoMenu(props){
	return (
		<svg className="icon" viewBox="0 0 100 100" style={props.style?props.style:{}}>
			<title>{props.title?props.title:null}</title>
			<path d="M95.7,25.53H4.31a2.56,2.56,0,1,1,0-5.12H95.7a2.56,2.56,0,1,1,0,5.12"/>
			<path d="M95.7,52.56H4.31a2.57,2.57,0,1,1,0-5.13H95.7a2.57,2.57,0,0,1,0,5.13"/>
			<path d="M95.7,79.59H4.31a2.56,2.56,0,1,1,0-5.12H95.7a2.56,2.56,0,1,1,0,5.12"/>
		</svg>
	);
	
}
