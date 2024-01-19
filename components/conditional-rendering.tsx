import { FC } from 'react';

import { GenericReactElement } from '@/typings';

interface ConditionalRenderingProps {
  condition: boolean;
  render: GenericReactElement;
  elseRender?: GenericReactElement;
  className?: string;
}

const ConditionalRendering: FC<ConditionalRenderingProps> = ({
  condition,
  render,
  elseRender = '',
}: ConditionalRenderingProps) => (condition ? render : elseRender ?? '');

export default ConditionalRendering;
