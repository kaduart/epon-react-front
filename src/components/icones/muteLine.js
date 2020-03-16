import React from 'react'

export function IcoMuteLine(props){
	return (
		<svg className="icon" viewBox="0 0 100 100" style={props.style?props.style:{}}>
			<title>{props.title?props.title:null}</title>
			<path class="cls-1" d="M53.39,10.83a1.87,1.87,0,0,0-2,.15L17.88,35.07H3.5a1.87,1.87,0,0,0-1.87,1.87V63.5A1.88,1.88,0,0,0,3.5,65.38H17.14L51.47,89a1.83,1.83,0,0,0,1.93.12,1.87,1.87,0,0,0,1-1.66v-75A1.88,1.88,0,0,0,53.39,10.83Zm-2.73,5.33V83.93L19.17,62.22a1.86,1.86,0,0,0-1.37-.59H5.38V38.82h13.1a1.9,1.9,0,0,0,1.1-.36Z"/>
			<polygon class="cls-1" points="98.06 33.29 96.16 31.39 79.45 48.11 62.73 31.39 60.84 33.29 77.55 50 60.84 66.72 62.73 68.61 79.45 51.9 96.16 68.61 98.06 66.72 81.34 50 98.06 33.29"/>
		</svg>
	);
	
}