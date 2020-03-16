import React from 'react'

export function IcoWanLan(props){
	return (
		<svg className="icon" viewBox="0 0 100 100" style={props.style?props.style:{}}>
			<title>{props.title?props.title:null}</title>
			<path d="M85,85H15C11.1,85,7.9,81.45,7.9,77.08V22.92C7.9,18.55,11.1,15,15,15H85c3.93,0,7.13,3.55,7.13,7.92V77.08C92.1,81.45,88.9,85,85,85ZM15,19.56c-1.39,0-2.57,1.54-2.57,3.36V77.08c0,1.82,1.18,3.36,2.57,3.36H85c1.39,0,2.57-1.54,2.57-3.36V22.92c0-1.82-1.18-3.36-2.57-3.36Z"/>
			<path d="M57.83,69.84H42.17V64.61H33.52V58.07h-9.1V30.16H75.58V58.07h-9.1v6.54H57.83ZM45.36,66.65h9.28V61.42h8.64V54.88h9.1V33.35H27.62V54.88h9.1v6.54h8.64Z"/>
		</svg>
	);
	
}
