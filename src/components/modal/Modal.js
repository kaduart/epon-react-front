import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { IcoClose } from './../icones';
import './modal.css';

const Portal = ({ children }) => {
  const [modalContainer] = useState(document.createElement('div'));
  
  useEffect(() => {
    // Find the root element in your DOM
    let modalRoot = document.getElementById('modal-root');
    // If there is no root then create one
    if (!modalRoot) {
      const tempEl = document.createElement('div');
      tempEl.id = 'modal-root';
      // tempEl.classList = 'modal fade show';
      document.body.append(tempEl);
      modalRoot = tempEl;
    }
    // Append modal container to root
    modalRoot.appendChild(modalContainer);
    return function cleanup() {
      // On cleanup remove the modal container
      modalRoot.removeChild(modalContainer);
    };
  }, []); // <- The empty array tells react to apply the effect on mount/unmount

  return ReactDOM.createPortal(children, modalContainer);
};

const Modal = (props) => {
  const { open, close, title, container, footer, sizeClass} = props;
  
  return (
    <Portal>
      <div className={open?"modal fade show":"modal"}>
				<div className={sizeClass?"modal-dialog " + sizeClass:"modal-dialog"}>
					<div className="modal-content">
            {
              title?
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button className="close" onClick={close} ><IcoClose title="Fechar" /></button>
              </div>
              :null
            }
            {
              container?
              <div className="modal-body">{container}</div>
              :null
            }
            {
              footer?
              <div className="modal-footer">
                {
                  footer.map((item, i) => {
                    return (<button key={i} onClick={item.action} className={item.class}>{item.text}</button>)
                  })
                }
              </div>
              :null
            }
					</div>
				</div>
			</div>
    </Portal>
  )
}

export default Modal;


