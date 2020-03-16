import React from 'react'

export function IcoArrowLeftCircleLine(props){
	return (
		<svg className="icon" viewBox="0 0 100 100" style={props.style?props.style:{}}>
			<title>{props.title?props.title:null}</title>
			<path d="M50,97.5A47.5,47.5,0,1,1,97.5,50,47.56,47.56,0,0,1,50,97.5Zm0-92A44.53,44.53,0,1,0,94.53,50,44.59,44.59,0,0,0,50,5.47Z"/>
			<path d="M54.14,73.07a1.73,1.73,0,0,1-1.26-.54C32.24,51.12,32.24,50.9,32.24,50s0-1.12,20.64-22.51a1.74,1.74,0,0,1,2.51,2.42C49,36.47,39.19,46.74,36.25,50,39.18,53.23,49,63.52,55.39,70.12a1.73,1.73,0,0,1,0,2.46,1.71,1.71,0,0,1-1.2.49"/>
		</svg>
	);
	
}
