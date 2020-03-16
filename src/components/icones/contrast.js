import React from 'react'

export function IcoContrast(props){
	return (
		<svg className="icon" viewBox="0 0 32 32">
			<title>{props.title?props.title:null}</title>
			<path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM4 16c0-6.627 5.373-12 12-12v24c-6.627 0-12-5.373-12-12z"></path>
		</svg>
	);
	
}
