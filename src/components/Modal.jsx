import React from 'react';
import './Modal.css';

const Modal = () => {
//   if (!isOpen) return null;

  return (
    <div className="modal-overlay" >
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h5 className="modal-title">Deposit</h5>
        </div>
        <div className="modal-body">
          <div className="input-group">
            <select>
              <option>SELECT A TOKEN</option>
              {/* Add token options here */}
            </select>
            <input type="number" placeholder="amount" />
          </div>
          {/* <div className="input-group">
            <select>
              <option>SELECT A TOKEN</option>
           
            </select>
            <input type="number" placeholder="amount" />
          </div> */}
          {/* <div className="estimated-gas">
            <span>Estimated Gas:</span>
          </div> */}
        </div>
        <div className="modal-footer">
          <button className="swap-button">Deposit</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
