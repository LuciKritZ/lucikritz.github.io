import { GenericReactElement } from '@/typings';
import { cn } from '@/utils/cn';
import { nothingYouCouldDo } from '@/utils/fonts';

type SectionHeaderProps = {
  className?: string;
  children: GenericReactElement;
};

const SectionHeader = ({ className = '', children }: SectionHeaderProps) => {
  return (
    <h3
      className={cn(
        'text-[8vh] absolute top-[10vh] text-[#e17e7e]',
        className,
        nothingYouCouldDo.className
      )}
    >
      {children}
    </h3>
  );
};

export default SectionHeader;
