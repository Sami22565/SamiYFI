export interface TextareaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
  rows?: number;
}

/**
 * @startingPoint section="Components" subtitle="Multi-line field for goals/notes" viewport="700x220"
 */
export function Textarea(props: TextareaProps): JSX.Element;
