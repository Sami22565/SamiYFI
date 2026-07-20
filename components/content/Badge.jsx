import React from 'react';

export function Badge({ children, tone = 'ember' }) {
  return <span className={`sy-badge sy-badge--${tone}`}>{children}</span>;
}
