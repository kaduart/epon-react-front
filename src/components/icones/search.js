import React from 'react'

export function IcoSearch(props){
	return (
		<svg className="icon" viewBox="0 0 100 100" style={props.style?props.style:{}}>
			<title>{props.title?props.title:null}</title>
			<path d="M98.39,84.66,67.09,63.78c.09-.17.2-.33.29-.49a35.74,35.74,0,1,0-3,4.62L95.66,88.76a2.46,2.46,0,1,0,2.73-4.1ZM36,77.05a30.64,30.64,0,1,1,27-16.1A30.69,30.69,0,0,1,36,77.05Z"/>
		</svg>
	);
	
}
