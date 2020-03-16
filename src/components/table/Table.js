import React from 'react';
import { addAlert } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './table.css';

const Coluna = (props) => {
	const { colunm, line, action } = props;

	return (
		colunm.map(function(col, i){
			if (col.colunm === 'action') {
				
				return (
					<td key={i} className={col.className?col.className:''} style={{width: "1%", padding: '0'}}>
						{
							action.map(function(acao, j){
							return (<button key={j} id={line.line.id} className={acao.className} onClick={acao.action}>{acao.text}</button>)
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

const Table = (props) => {
	const { head, data, action } = props;

  return (
	<div className="table-responsive">
		<table className="table">
			<thead>
				<tr>
					{
						head.map(function(col, i){
							return (<th colSpan={col.colSpan?col.colSpan:1} className={col.className?col.className:''} key={i}>{col.text}</th>)
						})
					}
				</tr>
			</thead>
			<tbody>
				{
					data?(
						data.map(function(line, i){
							return (<tr key={i}><Coluna colunm={head} line={{line, i}} action={action} /></tr>)						
						})
					):null
				}
			</tbody>
		</table>
	</div>
  );
}

const mapStateToProps = store => {
	return ({
		alerts: store.alerts
})};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ addAlert}, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Table);