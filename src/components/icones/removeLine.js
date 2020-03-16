import React from 'react'

export function IcoRemoveLine(props){
	return (
		<svg className="icon" viewBox="0 0 100 100" style={props.style?props.style:{}}>
			<title>{props.title?props.title:null}</title>
			<rect x="13.29" y="6.61" width="73.42" height="4.38"/>
			<polygon points="59.96 3 40.04 3 36.19 6.61 63.81 6.61 59.96 3"/>
			<path d="M71.8,98H28.2a7.31,7.31,0,0,1-7.3-6.88L16.5,16.41h67L79.1,91.12A7.31,7.31,0,0,1,71.8,98ZM20.74,20.4l4.14,70.48A3.34,3.34,0,0,0,28.2,94H71.8a3.34,3.34,0,0,0,3.32-3.13L79.26,20.4Z"/>
			<rect x="20.86" y="55.78" width="77.67" height="2.85" transform="translate(-0.06 114.34) rotate(-87.49)"/>
			<rect x="38.87" y="18.37" width="2.85" height="77.67" transform="translate(-2.48 1.83) rotate(-2.53)"/>
		</svg>
	);
	
}
