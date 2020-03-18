import React, { useState } from 'react';
import './pagination.css';
import { IcoArrowLeft, IcoArrowRight, IcoReload } from './../../components/icones';

const Paginate = (props) => {  
	const [paginateTemp, setPaginateTemp] =  useState('1');
	const [paginate, setPaginate] =  useState({'paginate': '1', 'totalPage': '2'});

	const changePaginate = (event) =>{
		//setPaginate({...paginate, [event.target.name]: event.target.value})
		setPaginateTemp(event.target.value)
	}

	const reloadPaginate = (event) =>{
		// setPaginate({...event, [event.target.name]: event.target.value})
		console.log(event);
		if (event) {
			if (event <= paginate["totalPage"]) {
				setPaginateTemp(event)
				setPaginate({...paginate, "paginate": event})				
			}
		} else{
			if (paginateTemp >= 1 && paginateTemp <= paginate["totalPage"]) {
				setPaginate({...paginate, "paginate": paginateTemp})
			} else{				
				setPaginateTemp(paginate["paginate"])
			}
		}
		
	}

	return (
		<div className="pagination-custom">
			<button className="btn-secondary" disabled={Number(paginate["paginate"]) === 1} onClick={()=> reloadPaginate(Number(paginate["paginate"]) - 1)}> <IcoArrowLeft /> </button>
			<div className="page-item">
				<input type="number" name="paginate" value={paginateTemp} onChange={(event)=> changePaginate(event)} />
				<button className="btn-secondary" onClick={()=> reloadPaginate()}> <IcoReload /> </button>
			</div>
			<button className="btn-secondary" disabled={Number(paginate["paginate"]) >= Number(paginate["totalPage"])} onClick={()=> reloadPaginate(Number(paginate["paginate"]) + 1)}> <IcoArrowRight /> </button>
			<span className="pagination-info">{paginate["paginate"]} de {paginate["totalPage"]} páginas</span>
		</div>
  	);
}

export default Paginate;