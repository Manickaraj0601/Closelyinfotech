import React from 'react';
import logoImg from '../assets/image/C-logo.webp';
import logoDarkImg from '../assets/image/C-logo-dark.webp';
import '../assets/css/Logo.css';

export default function Logo({ width = 140, height = 65 }) {
  return (
    <div className="logo-wrap" style={{ width: `${width}px`, height: `${height}px` }}>
      <img
        src={logoImg}
        alt="Closely Info Tech Logo"
        width={width}
        height={height}
        className="cit-logo light-logo"
      />
      <img
        src={logoDarkImg}
        alt="Closely Info Tech Logo"
        width={width}
        height={height}
        className="cit-logo dark-logo"
      />
    </div>
  );
}
