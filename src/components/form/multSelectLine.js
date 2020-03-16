import React, { useState } from 'react'
import { IcoClose, IcoArrowLeft, IcoArrowRight } from '../icones'



export function MultSelectLine(props){
	const {type, options, optionsSelect, name, label, value, changeInput, required, validate, disabled} = props;
	const [inputs, setInputs] = useState([]);
	const [optionList, setOpntionList] = useState(options);
	const [optionSelected, setOpntionSelected] = useState(optionsSelect);
	
	const changeChecked = (event) =>{		
		console.log(event);
		
		setInputs([...inputs,{'nome':  [event.target.name], 'item': event.target.checked}])
	}

	const changeListSelected = (event) =>{		
		console.log(event, options);
		let ListSem = [];
		let ListCom = [];
		for (let i = 0; i < optionList.length; i++) {
			inputs.map(function(option, i){
				if (option.name ===  (optionList[i].id) ) {
					console.log('commmmmmmmmmmmmmmmmmmmmm', optionList[i]);
					
					ListCom.push(optionList[i])
				} else{
					console.log('seeeeeeeeeeeeeeeeeeeeeem', optionList[i]);
					ListSem.push(optionList[i])
				}
				setOpntionSelected(ListCom)
				setOpntionList(ListSem)
				return ;
				
			})
			
		}
		//setOpntionSelected( inputsValue)
	}
	console.log(optionSelected, 'selectedddddddddddd', optionList);
	
	return (
		<div className="multiselect-box">
			<div className="multiselect-itens">
				{
					options.map(function(option, i){						
						return (
							<div key={i} className="mult-item">
								<input type="checkbox" value={JSON.stringify(option)} checked={inputs[option.id]}  onClick={ (event)=> changeChecked(event) } id={option.id } name={option.id } />
								<label htmlFor={option.id }>{option.nome}</label>
							</div>
						)
					})
				}
			</div>
			<div className="multiselect-btn">
				<button onClick={ (event)=> changeListSelected(event) } className="btn-outline-success btn-sm"> <IcoArrowRight /> </button>	
				<button onClick={ (event)=> changeListSelected(event) } className="btn-outline-success btn-sm"> <IcoArrowLeft /> </button>
			</div>
			<div className="multiselect-itens">
				{
					optionSelected?
					optionSelected.map(function(option, i){						
						return (
							<div key={i} className="mult-item">
								<input type="checkbox" value={JSON.stringify(option)} checked={inputs[option.id]}  onClick={ (event)=> changeChecked(event) } id={option.id} name={option.id} />
								<label htmlFor={option.id}>{option.nome}</label>
							</div>
						)
					})
					:null
				}
			</div>
		</div>
	);
	
}