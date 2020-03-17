import React from 'react'
import './checkboxSwitch.css'

export function CheckboxSwitch(props){
	const {title, name, label, checked, changeInput, disabled} = props;
		
	return (
		<div className="custom-control-checkbox-switch">
			<input type="checkbox" onChange={changeInput} checked={checked} className="custom-input" id={name} name={name} disabled={disabled} />
			<label className="custom-label" htmlFor={name} title={title}>{label}</label>
		</div>
	);
	
}