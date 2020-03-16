import React, { useState } from 'react'
import { IcoClose, IcoArrowLeft, IcoArrowRight } from '../icones'



export function MultSelectLineBox(props){
	const {type, options, optionsSelect, name, label, labelDefault, idDefault, value, changeInput, required, validate, disabled} = props;


	console.log(options, 'selectedddddddddddd', optionsSelect);
	
	return (
		<div className="multiselect-box">
			<div className="multiselect-itens">
				{
					options.map(function(option, i){						
						return (
							<div key={i} className="mult-item-check">
								<input type="checkbox" value={JSON.stringify(option)} className={name}  onClick={ changeInput } id={option[idDefault] +'-'+ name } name={option[idDefault] +'-'+ name } />
								<label htmlFor={option[idDefault] +'-'+ name }>{option[labelDefault]}</label>
							</div>
						)
					})
				}
			</div>
		</div>
	);
	
}