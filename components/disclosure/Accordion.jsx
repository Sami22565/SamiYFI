import React, { useState } from 'react';

export function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="sy-accordion">
      {items.map((item, i) => {
        const open = i === openIndex;
        return (
          <div key={i} className={`sy-accordion__item${open ? ' sy-accordion__item--open' : ''}`}>
            <button className="sy-accordion__trigger" onClick={() => setOpenIndex(open ? -1 : i)}>
              {item.question}
              <span className="sy-accordion__icon">+</span>
            </button>
            <div className="sy-accordion__panel">
              <div className="sy-accordion__panel-inner">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
