import { MagnoliaConfig } from '@magnolia/react-editor';

import LinkList from './app/templates/components/LinkList/LinkList';
import ListItem from './app/templates/components/ListItem/ListItem';
import Text from './app/templates/components/Text/Text';
import TextImage from './app/templates/components/TextImage/TextImage';
import Basic from './app/templates/pages/Basic/Basic';

export const config: MagnoliaConfig = {
  componentMappings: {
    'spa-lm:pages/basic': Basic,

    'spa-lm:components/text': Text,
    'spa-lm:components/textImage': TextImage,
    'spa-lm:components/linkList': LinkList,
    'spa-lm:components/listItem': ListItem,
  },
};
