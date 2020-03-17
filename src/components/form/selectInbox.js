import React from 'react'
import { IcoClose } from '../icones'

export function SelectInbox(props){
	const {type, labelDefault, idDefault, options, name, label, value, changeInput, required, validate, disabled} = props;

	const validacao = () => {
		if (validate === true) {
			return 'form-control-inbox  is-valid'
		} else if (validate === false) {
			return 'form-control-inbox  is-invalid'
		} else{
			return 'form-control-inbox'
		}
	}

	return (
		<div className="form-group input-inbox valido">
			<select
				name={name} 
				value={value} 
				onChange={changeInput} 
				className={required?validacao(): "form-control-inbox" } 
				id={name} 
				required 
				disabled={disabled} 
			>
				<option value="">Selecione</option>
				{
					options?options.map(function(option, i){
						return <option key={i} value={idDefault?option[idDefault]:JSON.stringify(option)}>{ (labelDefault)?option[ labelDefault ]:option }</option>
					})
					:null
				}
			</select>
			<label htmlFor={name} className="form-label">
				{(validate && type)?<span className="text-danger">✱</span>:''}
				{label}
			</label>
		</div>
	);
	
}
