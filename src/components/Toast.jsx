import React from 'react';
import { FiCheck } from 'react-icons/fi';

export default function Toast({ message, isVisible }) {
  return (
    <div className={`toast ${isVisible ? 'show' : ''}`} id="toast">
      <div className="toast-icon">
        <FiCheck />
      </div>
      <div className="toast-text">{message}</div>
    </div>
  );
}
