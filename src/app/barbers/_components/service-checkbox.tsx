import { Checkbox } from '@/components/ui/checkbox';
import type { ServicesResult } from '@/types/services';

type ServiceCheckBoxProps = ServicesResult & {
  isChecked: boolean;
  // eslint-disable-next-line no-unused-vars
  onCheckedChange: (checked: boolean) => void;
};

export function ServiceCheckBox({
  title,
  slug,
  isChecked,
  onCheckedChange,
}: ServiceCheckBoxProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={slug}
        value={slug}
        checked={isChecked}
        className="cursor-pointer"
        onCheckedChange={(checked) => onCheckedChange(checked as boolean)}
      />
      <label
        htmlFor={slug}
        className="cursor-pointer text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {title}
      </label>
    </div>
  );
}
