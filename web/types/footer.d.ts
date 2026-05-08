declare type FooterChannelType = Mgnl & {
  link: string;
  icon: string;
  name: string;
};

declare type FooterChannels = NodeType & Record<string, FooterChannelType>;

declare type FooterType = NodeType & {
  name: string;
  channels: FooterChannels;
};

declare type FooterProps = {
  footer: FooterType;
};
