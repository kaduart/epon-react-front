import React from 'react'

export function IcoArrowLeft(props){
	return (
		<svg className="icon" viewBox="0 0 100 100" style={props.style?props.style:{}}>
			<title>{props.title?props.title:null}</title>
			<path d="M60.11,2.5a3.5,3.5,0,0,1,2.48,1,3.61,3.61,0,0,1,.12,5.08C49.6,22.13,29.33,43.3,23.29,50c6,6.68,26.31,27.89,39.42,41.45a3.62,3.62,0,0,1-.12,5.09,3.57,3.57,0,0,1-5.06-.1C15,52.31,15,51.86,15,50S15,47.63,57.53,3.6a3.57,3.57,0,0,1,2.58-1.1"/>
		</svg>
	);
	
}
