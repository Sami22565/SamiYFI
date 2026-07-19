import React from 'react';

export function Checkbox({ label, checked, onChange, name }) {
  return (
    <label className="sy-checkbox">
      <input type="checkbox" name={name} checked={checked} onChange={onChange} />
      {label}
    </label>
  );
}
