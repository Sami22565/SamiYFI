import React from 'react';

export function Select({ label, options = [], value, onChange, name, placeholder = 'Select…' }) {
  return (
    <div className="sy-field">
      {label && <label className="sy-label">{label}</label>}
      <select className="sy-select" name={name} value={value} onChange={onChange}>
        <option value="" disabled>{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
