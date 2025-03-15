import { Checkbox } from '@/components/ui/checkbox';

interface ServiceCheckBoxProps {
  value: string;
  label: string;
  isChecked: boolean;
  // eslint-disable-next-line no-unused-vars
  onCheckedChange: (checked: boolean) => void;
}

export function ServiceCheckBox({
  value,
  label,
  isChecked,
  onCheckedChange,
}: ServiceCheckBoxProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={value}
        value={value}
        checked={isChecked}
        className="cursor-pointer"
        onCheckedChange={(checked) => onCheckedChange(checked as boolean)}
      />
      <label
        htmlFor={value}
        className="cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
}
