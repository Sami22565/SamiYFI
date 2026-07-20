import React from 'react';
import { Card } from './Card.jsx';

export function TestimonialCard({ quote, name, meta, initials }) {
  return (
    <Card>
      <div className="sy-testimonial">
        <p className="sy-testimonial__quote">&ldquo;{quote}&rdquo;</p>
        <div className="sy-testimonial__person">
          <div className="sy-testimonial__avatar">{initials}</div>
          <div>
            <div className="sy-testimonial__name">{name}</div>
            <div className="sy-testimonial__meta">{meta}</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
