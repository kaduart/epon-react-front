import React from 'react'

export function IcoCog(props){
	return (
		<svg className="icon" viewBox="0 0 100 100" style={props.style?props.style:{}}>
			<title>{props.title?props.title:null}</title>
			<path d="M81.15,54a32.28,32.28,0,0,0,.29-4,32.14,32.14,0,0,0-.29-4L90,39.28a2,2,0,0,0,.5-2.61L82.11,22.56a2.13,2.13,0,0,0-2.55-.89L69.12,25.74a31,31,0,0,0-7.08-4L60.45,11a2,2,0,0,0-2.06-1.72H41.63A2,2,0,0,0,39.57,11L38,21.75a32.35,32.35,0,0,0-7.08,4L20.46,21.67a2.06,2.06,0,0,0-2.55.89L9.52,36.67A2,2,0,0,0,10,39.28L18.87,46a27.59,27.59,0,0,0,0,8L10,60.72a2,2,0,0,0-.51,2.61l8.39,14.1a2.12,2.12,0,0,0,2.55.9L30.9,74.26a30.8,30.8,0,0,0,7.08,4l1.59,10.8a2,2,0,0,0,2.06,1.72H58.39a2,2,0,0,0,2.06-1.72L62,78.25a33,33,0,0,0,7.08-4l10.44,4.07a2.06,2.06,0,0,0,2.55-.9l8.38-14.1a2,2,0,0,0-.5-2.61ZM50,64.27A14.28,14.28,0,1,1,64.68,50,14.49,14.49,0,0,1,50,64.27Z"/>
		</svg>
	);
	
}