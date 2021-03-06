import React from 'react'
import './inputInBox.css'
import { IcoClose } from '../icones';

export function InputInbox(props){
	const {type, name, label, value, changeInput, required, validate, search} = props;

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
			<input 
				type={type} 
				name={name} 
				value={value} 
				onChange={changeInput} 
				className={required?validacao(): "form-control-inbox" } 
				id={name} 
				required={required}
			/>
			<label htmlFor={name} className="form-label">			
				<sup>{(validate && type !== 'only-see')?<span className="text-danger">✻</span>:''} </sup>
				{label}
			</label>
			{
				(type === 'search')?
				<button onClick={search} htmlFor="pesquisar" className={value?"search-erase inline-block":"search-erase"}><IcoClose /></button>
				: null
			}
		</div>
	);
	
}
