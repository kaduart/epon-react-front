import React from 'react'

export function IcoSandwichMenu(props){
	return (
		<svg className="icon" viewBox="0 0 100 100" id={(props.id !== '')?props.id:''} style={props.style?props.style:{}}>
			<title>{props.title?props.title:null}</title>
			<path d="M50,59.2A9.2,9.2,0,1,1,59.2,50,9.2,9.2,0,0,1,50,59.2Z"/>
			<path d="M50,22.4a9.2,9.2,0,1,1,9.2-9.2A9.2,9.2,0,0,1,50,22.4Z"/>
			<path d="M50,96a9.2,9.2,0,1,1,9.2-9.2A9.2,9.2,0,0,1,50,96Z"/>
		</svg>
	);
	
}
