import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeAlert } from './../../actions';
import { IcoClose } from './../icones'

const AlertMensages = (props) => {
    const {user, removeAlert, alerts} = props;
    const CloseMensage = (event) => {
        removeAlert(event)
    }

    if (!user.id && window.location.pathname !== '/login') {
    window.location.replace('/login');
    }
    
    if (alerts.length > 0) {
        setTimeout(function(){ 
            removeAlert( alerts[alerts.length -1].id )            
        }, 3000);
    }

    if (alerts) {
        return (
            <div className="alerts-box">
                {
                    alerts.map((alerta, key) =>
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
    console.log(store);
    
	return ({
		alerts: store.alerts,
		user: store.user
})};
const mapDispatchToProps = dispatch =>
  bindActionCreators({ removeAlert }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(AlertMensages);


