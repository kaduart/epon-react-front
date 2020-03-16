import React from 'react'

export function InputBox(props){
	const {type, name, label, value, changeInput, required, validate} = props;

	const validacao = () => {
		if (validate === true) {
			return 'form-control is-valid'
		} else if (validate === false) {
			return 'form-control is-invalid'
		} else{
			return 'form-control'
		}
	}

	return (
		<div className="form-group input-box">
			<input 
				type={type} 
				name={name} 
				value={value} 
				onChange={changeInput} 
				className={required?validacao(): "form-control" } 
				id={name} 
				required={required} 
			/>
			<label htmlFor={name} className="form-label"> 
				{label}
			</label>
		</div>
	);
	
}
