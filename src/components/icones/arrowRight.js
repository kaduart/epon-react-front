import React from 'react'

export function IcoArrowRight(props){
	return (
		<svg className="icon" viewBox="0 0 100 100" style={props.style?props.style:{}}>
			<title>{props.title?props.title:null}</title>
			<path d="M29.62,97.5a3.48,3.48,0,0,1-2.47-1A3.6,3.6,0,0,1,27,91.42C40.13,77.87,60.4,56.7,66.44,50,60.42,43.36,40.13,22.15,27,8.59a3.61,3.61,0,0,1,.12-5.09,3.57,3.57,0,0,1,5.06.1C74.7,47.69,74.7,48.14,74.7,50.05s0,2.32-42.49,46.35a3.61,3.61,0,0,1-2.59,1.1"/>
		</svg>
	);
	
}
