import React from 'react'
import './inputInBox.css'

export function TextareaInbox(props){
	const {type, name, label, value, changeInput, required, validate} = props;

	const validacao = () => {
		if (validate === true) {
			return 'form-control-inbox is-valid'
		} else if (validate === false) {
			return 'form-control-inbox is-invalid'
		} else{
			return 'form-control-inbox'
		}
	}

	return (
		<div className={value?"form-group input-inbox valido":"form-group input-inbox"}>
			<textarea
				type={type} 
				name={name}
				onChange={changeInput} 
				className={required?validacao(): "form-control-inbox" } 
				id={name} 
				required={required}
				defaultValue={value}
			></textarea>
			<label htmlFor={name} className="form-label"> 
				<sup>{(validate && type !== 'only-see')?<span className="text-danger">✻</span>:''} </sup>
				{label}
			</label>
		</div>
	);
	
}
