import React from 'react';

export function Input({ label, placeholder, type = 'text', value, onChange, name }) {
  return (
    <div className="sy-field">
      {label && <label className="sy-label">{label}</label>}
      <input
        className="sy-input"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
