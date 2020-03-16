import React from 'react'
import { IcoClose } from '../../components/icones'

export function InputLine(props){
	const {type, name, label, value, changeInput, required, validate, search, disabled} = props;

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
		<div className="form-group input-line">
			{
				(type === 'only-see')?
				(<p className="form-control" >{value}</p>)
				:
				<input 
					type={type} 
					name={name} 
					value={value} 
					onChange={changeInput} 
					className={required?validacao(): "form-control" } 
					id={name} 
					required 
					disabled={disabled} 
				/>
			}
			<label htmlFor={name} className="form-label">
				{(validate && type !== 'only-see')?<span className="text-danger">✱</span>:''}
				{label}
			</label>
			{
				search?
				<button onClick={search} htmlFor="pesquisar" className={value?"search-erase inline-block":"search-erase"}><IcoClose /></button>
				: null
			}
		</div>
	);
	
}
