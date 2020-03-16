import React from 'react'

export function IcoEditar(props){
	return (
		<svg className="icon" viewBox="0 0 100 100" style={props.style?props.style:{}}>
			<title>{props.title?props.title:null}</title>
			<path d="M8.24,35.09V88.64A3.78,3.78,0,0,0,12,92.42H67.27a3.78,3.78,0,0,0,3.78-3.78V68.86H67.36v20H12v-54h20.1V31.32H12a3.78,3.78,0,0,0-3.78,3.77"/>
			<rect x="30.17" y="30.57" width="61.06" height="20.06" rx="1.21" ry="1.21" transform="translate(-10.93 54.81) rotate(-44.99)"/>
			<path d="M30.66,63.35l-.94,7.81a.38.38,0,0,0,.42.41l7.78-.93Z"/>
		</svg>
	);
	
}
