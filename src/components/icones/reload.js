import React from 'react'

export function IcoReload(props){
	return (
		<svg className="icon" viewBox="0 0 100 100" style={props.style?props.style:{}}>
			<title>{props.title?props.title:null}</title>
			<path d="M50,16.56a40.34,40.34,0,0,0-13.86,2.49l5-12.59a2.27,2.27,0,0,0-1.27-3h0A2.27,2.27,0,0,0,37,4.77l-8,20.11,20.12,8a2.28,2.28,0,0,0,3-1.27h0a2.27,2.27,0,0,0-1.27-2.95L37.47,23.41a35.5,35.5,0,1,1-23,33.2,36,36,0,0,1,1-8.47A2.24,2.24,0,0,0,14,45.45h0a2.27,2.27,0,0,0-2.88,1.62A40.05,40.05,0,1,0,50,16.56Z"/>
		</svg>
	);
	
}
