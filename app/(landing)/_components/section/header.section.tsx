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
        'mobile-sm:text-[50px] absolute top-24 text-[#e17e7e] md:text-[80px] text-[60px]',
        className,
        nothingYouCouldDo.className
      )}
    >
      {children}
    </h3>
  );
};

export default SectionHeader;
