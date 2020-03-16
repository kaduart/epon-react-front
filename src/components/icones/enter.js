import React from 'react'

export function IcoEnter(props){
	return (
		<svg className="icon" viewBox="0 0 32 32" style={props.style?props.style:{}}>
			<title>{props.title?props.title:null}</title>
			<path d="M12 16h-10v-4h10v-4l6 6-6 6zM32 0v26l-12 6v-6h-12v-8h2v6h10v-18l8-4h-18v8h-2v-10z"></path>
		</svg>
	);
	
}
