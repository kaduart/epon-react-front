import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeAlert } from './../../actions';
import { IcoClose } from './../icones'

const AlertMensages = (props) => {
    const CloseMensage = (event) => {
        props.removeAlert(event)
    }

    if (props.alerts.length > 0) {
        setTimeout(function(){ 
            props.removeAlert( props.alerts[props.alerts.length -1].id )            
        }, 3000);
    }

    if (props.alerts) {
        return (
            <div className="alerts-box">
                {
                    props.alerts.map((alerta, key) =>
                        <div key={key} className={'alert-'+alerta.style}>
                            {alerta.text}
                            <button className="close" onClick={() => CloseMensage(alerta.id)} name={alerta.id} ><IcoClose title="Fechar" /></button>
                        </div>
                    )
                }
            </div>
        );
    } else{
        return (<div>Sem</div>)
    }
}

const mapStateToProps = store => {
	return ({
		alerts: store.alerts
})};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ removeAlert }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(AlertMensages);


