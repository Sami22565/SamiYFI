import React from 'react';

export function Button({ children, variant = 'primary', size = 'md', disabled = false, onClick, type = 'button' }) {
  const cls = `sy-btn sy-btn--${variant} sy-btn--${size}`;
  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
