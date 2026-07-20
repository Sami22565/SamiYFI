import React from 'react';

export function Card({ children, hoverable = false, style }) {
  return (
    <div className={`sy-card${hoverable ? ' sy-card--hover' : ''}`} style={style}>
      {children}
    </div>
  );
}
