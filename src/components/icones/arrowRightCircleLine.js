import React from 'react'

export function IcoArrowRightCircleLine(props){
	return (
		<svg className="icon" viewBox="0 0 100 100" style={props.style?props.style:{}}>
			<title>{props.title?props.title:null}</title>
			<path d="M50,97.5A47.5,47.5,0,1,1,97.5,50,47.56,47.56,0,0,1,50,97.5Zm0-92A44.53,44.53,0,1,0,94.53,50,44.59,44.59,0,0,0,50,5.47Z"/>
			<path d="M45.86,73.07a1.7,1.7,0,0,1-1.2-.49,1.74,1.74,0,0,1,0-2.47C51,63.53,60.81,53.26,63.75,50,60.82,46.77,51,36.48,44.61,29.89a1.75,1.75,0,0,1,2.51-2.43C67.76,48.88,67.76,49.09,67.76,50s0,1.13-20.64,22.51a1.73,1.73,0,0,1-1.26.54"/>
		</svg>
	);
	
}
