import React from 'react';
import { IcoCog, IcoEditar, IcoRemoveLine, IcoChamadas, IcoSignal, IcoWanLan, IcoInfo } from '../../components/icones';
import './lista.css';

const tableHead = [
	{
		"colunm": "nContrato",
		"text": "Contrato",
		"className": "cal-1"
	},
	{
		"colunm": "nome",
		"text": "Cliente",
		"className": "text-left"
	},
	{
		"colunm": "action",
		"text": "",
		"className": "text-left"
	},
	{
		"colunm": "status",
		"text": "",
		"className": "text-left cal-10"
	},
	{
		"colunm": "entregue",
		"text": "Entregue",
		"className": ""
	},
	{
		"colunm": "servicos",
		"text": "Serviços",
		"className": ""
	}
]

const StatusServico = (props) => {
	if (props.type === 'success') {
		return 'success'
	}if (props.type === 'warning') {
		return 'warning'
	} else {
		return 'danger'
	}
}

const Coluna = (props) => {
	const { colunm, line, Resposta } = props;

	const ChangeAction = (event, name) =>{
		Resposta(event, name)
	}


	const tableAction = [
		{
			'text': <IcoInfo title="Informações" />,
			'title': 'Informações',
			'name': 'informacoes',
			'className': 'inativo'
		},
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

	const tableActionSErvice = [
		{
			'text': <IcoChamadas title="Telefone" />,
			'title': 'Telefone',
			'name': 'telefone',
			'className': 'btn-success'
		},
		{
			'text': <IcoWanLan title="Internet" />,
			'title': 'Internet',
			'name': 'internet',
			'className': 'btn-success'
		}
	]	
	return (
		colunm.map(function(col, i){
			if (col.colunm === 'action') {
				return (
					<td key={i} className={col.colunm} style={{padding:'0', whiteSpace: "nowrap", width: '1%'}}>
						{
							tableAction.map(function(acao, j){	
								return (<button key={j} className={acao.className} title={acao.title} onClick={(event)=> ChangeAction(line, acao.name)}>{acao.text}</button>)
							})
						}															
					</td>
				)
			} else if (col.colunm === 'servicos') {				
				return (
					<td key={i} className={col.colunm} style={{padding:'0', whiteSpace: "nowrap", width: '1%'}}>
						{
							tableActionSErvice.map(function(acao, j){								
								return (<button key={j} className={line.line[acao.name]?StatusServico(line.line[acao.name + 'Status']):'inativo'} title={acao.title} onClick={(event)=> ChangeAction(line, acao.name)}>{acao.text}</button>)
							})
						}															
					</td>
				)
				
			} else if (col.colunm === 'entregue') {				
				return (
					<td key={i} style={{padding:'0', whiteSpace: "nowrap"}}>
						{line.line[col.colunm]?line.line[col.colunm] + ' mb':'0 mb'}
						<div className="progress" title={((line.line['velocidade']/100)*line.line[col.colunm]) + "%"}>
							<div className={( ( ( line.line['velocidade']/100 )*line.line[col.colunm] ) < 10 )?"progress-bar progress-danger":"progress-bar"} style={{width: ((line.line['velocidade']/100)*line.line[col.colunm]) + "%"}}></div>
						</div>
					</td>
				)
				
			} else{
				return (<td key={i} className={col.className?col.className:''}>{line.line[col.colunm]}</td>)
			}
		})
	)
}

const ListClientes = (props) => {
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

export default ListClientes;