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
      <ul className='list-disc space-y-4 ml-5 text-lg mobile-sm:text-[16px] mobile-sm:space-y-2'>
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
};

const PortableTextParser: React.FC<PortableTextParserProps> = ({
  blocks,
  portableTextComponents = defaultPortableTextComponents,
}: PortableTextParserProps) => {
  return <PortableText value={blocks} components={portableTextComponents} />;
};

export default PortableTextParser;
