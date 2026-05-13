import { getFooter } from "@/lib/magnolia/contents";
import { FooterArea } from "@/templates/components/FooterArea";
import { EditableArea } from "@magnolia/react-editor";

type HomePageProps = PageType & {
  content: ContentType;
  header?: string;
  footer?: string;
  customHeader: ContentType;
  customFooter: ContentType;
};

const HomePage = async ({ content, footer, customHeader, customFooter }: HomePageProps) => {
  const footerComponent = footer ? await getFooter(footer) : undefined;

  return (
    <>
      {customHeader && <EditableArea content={customHeader} />}
      {content && <EditableArea content={content} />}
      <FooterArea content={customFooter} footer={footerComponent} />
    </>
  );
};

export default HomePage;
