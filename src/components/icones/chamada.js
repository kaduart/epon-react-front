import React from 'react'

export function IcoChamadas(props){
	return (
		<svg className="icon" viewBox="0 0 100 100">
			<title>{props.title?props.title:null}</title>
			<path d="M25,3.81A9.56,9.56,0,0,0,18.13,1a10.09,10.09,0,0,0-7.06,2.88c-1.24,1-7.32,6.38-9.59,17.44C-1.69,36.91,5.7,52,27,73.31,50.89,97.15,71.16,99,76.82,99c1.07,0,1.77-.06,2-.08,10.94-1.28,14.86-6.13,17.71-9.67,3.59-4.45,3.59-10.27,0-13.85L82.13,61a9.68,9.68,0,0,0-6.84-2.8,10.08,10.08,0,0,0-7.17,3l-6,6-.45-.24A69.38,69.38,0,0,1,45.36,55,70.05,70.05,0,0,1,33.45,38.68l-.25-.45,6-6a9.92,9.92,0,0,0,.18-14Z"/>
		</svg>
	);
	
}
