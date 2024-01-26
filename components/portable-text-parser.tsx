import {
  PortableText,
  type PortableTextReactComponents,
} from '@portabletext/react';
import Link from 'next/link';

const defaultPortableTextComponents: Partial<PortableTextReactComponents> = {
  marks: {
    underline: ({ children }) => (
      <span className='highlight-text'>{children}</span>
    ),
    link: ({ children, value }) => (
      <Link href={value.href} target='_blank' className='highlight-text'>
        {children}
      </Link>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className='list-disc space-y-[1.5vh] ml-[2.5vh] text-[2vh]'>
        {children}
      </ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className='list-item'>{children}</li>,
  },
};

type PortableTextParserProps = {
  blocks: any;
  portableTextComponents?: typeof defaultPortableTextComponents;
  className?: string;
};

const PortableTextParser: React.FC<PortableTextParserProps> = ({
  blocks,
  portableTextComponents = defaultPortableTextComponents,
  className = '',
}: PortableTextParserProps) => {
  return (
    <PortableText
      value={blocks}
      components={{
        ...portableTextComponents,
        block: {
          normal: ({ children }) => <p className={className}>{children}</p>,
        },
      }}
    />
  );
};

export default PortableTextParser;
