import React from 'react'

export function IcoArrowRightCircle(props){
	return (
		<svg className="icon" viewBox="0 0 100 100" style={props.style?props.style:{}}>
			<title>{props.title?props.title:null}</title>
			<path d="M50,2.5A47.5,47.5,0,1,0,97.5,50,47.5,47.5,0,0,0,50,2.5ZM44,73.26a1.77,1.77,0,0,1-1.3.55,1.74,1.74,0,0,1-1.24-.5,1.8,1.8,0,0,1-.05-2.55C47.93,64,58.09,53.36,61.12,50c-3-3.35-13.19-14-19.75-20.78A1.8,1.8,0,1,1,44,26.74c21.3,22.1,21.3,22.32,21.3,23.28S65.26,51.19,44,73.26Z"/>
		</svg>
	);
	
}
