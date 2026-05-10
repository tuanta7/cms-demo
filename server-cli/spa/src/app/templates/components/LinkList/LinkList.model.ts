// ⚠️ This file is auto-generated based on the LinkList.yaml definition.
// It will be overwritten when running `create-model`. Avoid manual edits.
import { MagnoliaNodeMeta, MgnlContent } from '@magnolia/frontend-helpers-base';

export type Theme = 'light' | 'dark';

export default interface ILinkListProps {
  metadata: MagnoliaNodeMeta;
  title?: string;
  theme: Theme;
  items?: MgnlContent;
}
