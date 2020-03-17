import React from 'react'
import './inputInBox.css'

export function InputInboxSee(props){
	const {label, value} = props;

	return (
		<div className="form-group input-inbox valido">
			<div className="form-control-inbox">
				<label className="form-label">
					{label}
				</label>
				{value}
			</div>
		</div>
	);
	
}
