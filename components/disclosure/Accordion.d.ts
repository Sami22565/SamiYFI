export interface AccordionItem {
  question: string;
  answer: string;
}

export interface AccordionProps {
  items: AccordionItem[];
}

/**
 * @startingPoint section="Components" subtitle="FAQ accordion, single-open" viewport="700x360"
 */
export function Accordion(props: AccordionProps): JSX.Element;
