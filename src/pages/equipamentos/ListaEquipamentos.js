import React from 'react';
import { IcoEditar, IcoRemoveLine } from '../../components/icones';
import './lista.css';

const tableHead = [
	{
		"colunm": "nome",
		"text": "Nome",
		"className": "text-left"
	},
	{
		"colunm": "ip",
		"text": "IP",
		"className": "cal-1"
	},
	{
		"colunm": "porta",
		"text": "porta",
		"className": "text-left cal-1"
	},
	{
		"colunm": "action",
		"text": "",
		"className": "text-left"
	}
]

const Coluna = (props) => {
	const { colunm, line, Resposta } = props;

	const ChangeAction = (event, name) =>{
		Resposta(event, name)
	}


	const tableAction = [
		{
			'text': <IcoEditar title="Editar" />,
			'title': 'Editar',
			'name': 'editar',
			'className': 'inativo'
		},
		{
			'text': <IcoRemoveLine title="Remover" />,
			'title': 'Remover',
			'name': 'remover',
			'className': 'danger'
		}
	]	

	return (
		colunm.map(function(col, i){
			if (col.colunm === 'action') {
				return (
					<td key={i} className={col.colunm} style={{padding:'0', whiteSpace: "nowrap", width: '1%'}}>
						{
							tableAction.map(function(acao, j){	
								return (<button key={j} title={acao.title} className={acao.className} onClick={(event)=> ChangeAction(line, acao.name)}>{acao.text}</button>)
							})
						}															
					</td>
				)
			} else{
				return (<td key={i} className={col.className?col.className:''}>{line.line[col.colunm]}</td>)
			}
		})
	)
}

const ListEquipamentos = (props) => {
	const { data, Resposta} = props;
	
	const ChangeAction = (event, name) =>{
		Resposta(event, name)
	}

	return (
		
		<div className="row">
			<div className="col-md-12">
				<div className="list-responsive">
					<table className="list">
						<thead>
							<tr>
								{
									tableHead.map(function(col, i){
										return (<th colSpan={col.colSpan?col.colSpan:1} className={col.className?col.className:''} key={i}>{col.text}</th>)
									})
								}
							</tr>
						</thead>
						<tbody>
							{
								data?(
									data.map(function(line, i){										
										return (
											<tr key={i}>
												<Coluna colunm={tableHead} line={{line, i}} Resposta={(event, acao)=> ChangeAction(line, acao)} />												
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

export default ListEquipamentos;