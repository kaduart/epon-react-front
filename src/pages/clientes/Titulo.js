import React, { useState } from 'react';
import { IcoCog, IcoSandwichMenu } from '../../components/icones'

const Titulo = (props) => {
	const {title} = props;	
	
	return (
		<h2 className="title-page">
			{title}
			<div className="float-right">
				<button className="btn-link btn-lg"><IcoCog /></button>
				<button className="btn-link btn-lg"><IcoSandwichMenu /></button>
			</div>
		</h2>
  	);
}

export default Titulo;