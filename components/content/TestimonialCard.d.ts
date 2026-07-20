export interface TestimonialCardProps {
  quote: string;
  name: string;
  meta?: string;
  initials?: string;
}

/**
 * @startingPoint section="Components" subtitle="Client quote card with avatar initials" viewport="700x260"
 */
export function TestimonialCard(props: TestimonialCardProps): JSX.Element;
