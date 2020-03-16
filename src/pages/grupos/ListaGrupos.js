import React from 'react';
import { IcoCog } from '../../components/icones';
import './lista.css';

const ListGrupos = (props) => {
	const { data, Resposta} = props;
	
	const ChangeAction = (event, name) =>{
		Resposta(event, name)
	}

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
										<small>Ativos</small>
										<small>Inativos</small>
										<small>Bloqueados</small>
									</div>
									<div className="text-right">
										<small>Clientes</small>
										<small>230</small>
										<small>Capacidade restante</small>
										<small>50 clientes a 10mb</small>
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