import React from 'react';

export function Textarea({ label, placeholder, value, onChange, name, rows = 4 }) {
  return (
    <div className="sy-field">
      {label && <label className="sy-label">{label}</label>}
      <textarea
        className="sy-textarea"
        name={name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
