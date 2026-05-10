import { decodeIfEscaped } from '@magnolia/frontend-helpers-base';
import ITextProps from './Text.model';

const Text = ({ text }: ITextProps) => {
  return (
    <div
      className='py-6 px-8 bg-light-green'
      dangerouslySetInnerHTML={{ __html: decodeIfEscaped(text) }}
    ></div>
  );
};

export default Text;
