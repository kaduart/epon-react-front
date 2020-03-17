import React from 'react';
import { IcoCog } from '../../components/icones';
import './lista.css';

const ListGrupos = (props) => {
	const { data, Resposta} = props;
	
	const ChangeAction = (event, name) =>{
		Resposta(event, name)
	}
	const totalpessoas = 300;
	const totalMb = 3000;
	
	return (		
		<div className="row">
			{
				data.map(function(card, i){					
					return (
						<div key={i} className="col-md-4 col-sm-6">
							<div className="card">
								<div className="card-ajust-sup ajust-hover">
									<span><IcoCog /></span>
									<div className="dropdowm-card">
										<button onClick={(event)=> ChangeAction(card, 'informacao')}>Vincular</button>
										<button onClick={(event)=> ChangeAction(card, 'editar')}>Editar</button>
										<button onClick={(event)=> ChangeAction(card, 'remover')}>Remover</button>
									</div>
								</div>
								<div className="card-body">
									<h5 className="card-title"> {card['nome']} </h5>
									<p className="card-text">{card['olt']}</p>
								
									<div className="listinfo">
										<small className="bullet success">Ativos</small>
										<small className="bullet danger">Inativos</small>
										<small className="bullet inativo">Bloqueados</small>
									</div>
									<div className="text-right">
										<small>Clientes</small>
										<small>{card['clientes'].length}</small>
										<small>Capacidade restante</small>
										<small>{ totalpessoas - card['clientes'].length } clientes a { parseInt( totalMb / (  totalpessoas - card['clientes'].length ) ) } mb</small>
									</div>
								</div>
							</div>
						</div>
					)
				})
			}
		</div>
  	);
}

export default ListGrupos;