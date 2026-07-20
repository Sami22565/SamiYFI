export interface InputProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'tel' | 'number' | 'password';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

/**
 * @startingPoint section="Components" subtitle="Labeled text input for application forms" viewport="700x200"
 */
export function Input(props: InputProps): JSX.Element;
