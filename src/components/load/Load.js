import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactDOM from 'react-dom';
import './load.css';

const Portal = ({ children }) => {
  const [modalContainer] = useState(document.createElement('div'));
  
  useEffect(() => {
    let modalRoot = document.getElementById('loading-page');
    if (!modalRoot) {
      const tempEl = document.createElement('div');
      tempEl.id = 'loading-page';
      document.body.append(tempEl);
      modalRoot = tempEl;
    }
    modalRoot.appendChild(modalContainer);
    return function cleanup() {
      modalRoot.removeChild(modalContainer);
    };
  }, []);

  return ReactDOM.createPortal(children, modalContainer);
};

const Load = (props) => {
	const { loading } = props;
	
	if (loading.load) {
		return (
		<Portal>
			<div className='loading-page'><span>{ loading.text }</span></div>
		</Portal>
		)
	} else {
		return null
	}
}

const mapStateToProps = store => {  
	return ({
		loading: store.loading
	})
};
const mapDispatchToProps = dispatch =>
bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Load);


