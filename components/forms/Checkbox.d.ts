export interface CheckboxProps {
  label: React.ReactNode;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

/**
 * @startingPoint section="Components" subtitle="Consent / agreement checkbox" viewport="700x120"
 */
export function Checkbox(props: CheckboxProps): JSX.Element;
