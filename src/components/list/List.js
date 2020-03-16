import React, { useState } from 'react';
import { IcoSandwichMenu } from '../icones';

const Coluna = (props) => {
	const { colunm, line } = props;

	return (
		colunm.map(function(col, i){			
			return (<td key={i} className={col.className?col.className:''}>{line.line[col.colunm]}</td>)
		})
	)
}

const List = (props) => {
	const { head, data, action, Resposta} = props;	
	const [dropdowmList, setDropdowmList] = useState({})
	
	const ChangeAction = (event, name) =>{
		Resposta(event, name)
	}

	const changeDropdowmList = (event) =>{
		setDropdowmList({...dropdowmList, [event]: !dropdowmList[event]})
	}

	return (
		
		<div className="row">
			<div className="col-md-12">
				<div className="table-responsive">
					<table className="table">
						<thead>
							<tr>
								{
									head.map(function(col, i){
										return (<th colSpan={col.colSpan?col.colSpan:1} className={col.className?col.className:''} key={i}>{col.text}</th>)
									})
								}
								{
									action?
									<th className='cal-1'></th>
									:null
								}
							</tr>
						</thead>
						<tbody>
							{
								data?(
									data.map(function(line, i){										
										return (
											<tr key={i}>
												<Coluna colunm={head} line={{line, i}} />
												{
													action?(
														<td style={{padding:'0'}}>
															<div className="dropdown">
																<button className="btn-link" onClick={()=>changeDropdowmList(i)}><IcoSandwichMenu /></button>
																<div className={dropdowmList[i]?"dropdown-menu active":"dropdown-menu"}>
																	{
																		action.map(function(acao, j){																	
																			return (<button key={j} className={acao.className} onClick={(event)=> ChangeAction(line, acao.name)}>{acao.text}</button>)
																		})
																	}
																</div>
															</div>
														</td>
													):null
												}												
											</tr>
										)						
									})
								):null
							}
						</tbody>
					</table>
				</div>
			</div>
		</div>
  	);
}

export default List;