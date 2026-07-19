export interface SelectProps {
  label?: string;
  options?: string[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  placeholder?: string;
}

/**
 * @startingPoint section="Components" subtitle="Dropdown for budget/experience tier picks" viewport="700x200"
 */
export function Select(props: SelectProps): JSX.Element;
