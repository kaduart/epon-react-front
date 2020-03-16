import React from 'react'

export function IcoArrowLeftCircle(props){
	return (
		<svg className="icon" viewBox="0 0 100 100" style={props.style?props.style:{}}>
			<title>{props.title?props.title:null}</title>
			<path d="M50,2.5A47.5,47.5,0,1,0,97.5,50,47.5,47.5,0,0,0,50,2.5Zm8.63,68.27A1.8,1.8,0,0,1,56,73.26C34.73,51.16,34.73,50.93,34.73,50s0-1.17,21.3-23.24a1.8,1.8,0,0,1,2.6,2.49C52.06,36,41.9,46.64,38.88,50,41.89,53.33,52.06,64,58.63,70.77Z"/>
		</svg>
	);
	
}
