import React from 'react'

export function IcoRemove(props){
	return (
		<svg className="icon" viewBox="0 0 100 100" style={props.style?props.style:{}}>
			<title>{props.title?props.title:null}</title>
			<path d="M20.47,92a7,7,0,0,0,7,7h45a7,7,0,0,0,7-7l4.13-75.48H16.34Z"/>
			<polygon points="64.82 4.87 60.69 1 39.3 1 35.18 4.87 10.59 4.87 10.59 10.69 89.41 10.69 89.41 4.87 64.82 4.87"/>
		</svg>
	);
	
}
