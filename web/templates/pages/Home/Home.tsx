import { FooterArea } from "@/templates/components/FooterArea";
import { EditableArea } from "@magnolia/react-editor";

type HomePageProps = PageType;

const HomePage = ({
  content,
  footer,
  customHeader,
  customFooter,
}: HomePageProps) => {
  return (
    <>
      <h1 className="text-3xl font-bold">Manchester United</h1>
      <h2>Header</h2>
      {customHeader && <EditableArea content={customHeader} />}
      <h2>Main Content</h2>
      {content && <EditableArea content={content} />}
      <h2>Footer</h2>
      {customFooter && <EditableArea content={customFooter} />}
      {/* <FooterArea content={customFooter} footerPath={footer} /> */}
    </>
  );
};

export default HomePage;
