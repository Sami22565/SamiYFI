export interface NavProps {
  logo?: string;
  links?: string[];
  cta?: React.ReactNode;
}

/**
 * @startingPoint section="Components" subtitle="Top nav with wordmark + CTA slot" viewport="700x120"
 */
export function Nav(props: NavProps): JSX.Element;
