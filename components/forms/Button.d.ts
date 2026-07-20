export interface ButtonProps {
  /** Button label / content */
  children: React.ReactNode;
  /** Visual style */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

/**
 * @startingPoint section="Components" subtitle="Primary CTA button, ember-accent with glow" viewport="700x220"
 */
export function Button(props: ButtonProps): JSX.Element;
