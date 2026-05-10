import { decodeIfEscaped } from '@magnolia/frontend-helpers-base';
import Image from '../../fragments/Image';
import ITextImageProps from './TextImage.model';

const TextImage = ({ image, altText, text, caption }: ITextImageProps) => {
  return (
    <div className='py-6 px-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div dangerouslySetInnerHTML={{ __html: decodeIfEscaped(text) }} />
        <Image image={image} alt={altText || ''} caption={caption || ''} />
      </div>
    </div>
  );
};

export default TextImage;
