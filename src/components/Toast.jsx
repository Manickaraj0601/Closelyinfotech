import React from 'react';

export default function Toast({ message, isVisible }) {
  return (
    <div className={`toast ${isVisible ? 'show' : ''}`} id="toast">
      <div className="toast-icon">
        <i className="fas fa-check"></i>
      </div>
      <div className="toast-text">{message}</div>
    </div>
  );
}
