import React from 'react'

export function Input(props){
	return (
		<div class="form-group input-box">
			<input type="text" class="form-control" id="inputText1" />
			<label htmlFor="inputText1" class="form-label"> texto </label>
		</div>
	);
	
}
// {(required == true)?<span className="text-danger">✤ </span>:''} 
