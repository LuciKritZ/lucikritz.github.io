import { GenericReactElement } from '@/typings';
import { cn } from '@/utils/cn';

type SectionContainerProps = {
  children: GenericReactElement;
  className?: string;
};

const SectionContainer = ({
  children,
  className = '',
}: SectionContainerProps) => {
  return (
    <div
      className={cn(
        'h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center',
        className
      )}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
