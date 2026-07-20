import React from 'react';

export function StatBlock({ value, label }) {
  return (
    <div className="sy-stat">
      <div className="sy-stat__value">{value}</div>
      <div className="sy-stat__label">{label}</div>
    </div>
  );
}
