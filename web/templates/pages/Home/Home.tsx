import { FooterArea } from "@/templates/components/FooterArea";
import { EditableArea } from "@magnolia/react-editor";

type HomePageProps = PageType;

const HomePage = ({ content, footer, customHeader, customFooter }: HomePageProps) => {
  return (
    <>
      {customHeader && <EditableArea content={customHeader} />}
      {content && <EditableArea content={content} />}
      {customFooter && <EditableArea content={customFooter} />}
      {/* <FooterArea content={customFooter} footerPath={footer} /> */}
    </>
  );
};

export default HomePage;
