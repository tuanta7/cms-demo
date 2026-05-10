"use client";

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
      {customHeader && (
        <>
          <h2>Header</h2>
          <EditableArea content={customHeader} />
        </>
      )}
      {content && (
        <>
          <h2>Main Content</h2>
          <EditableArea content={content} />
        </>
      )}
      {customFooter && (
        <>
          <h2>Footer</h2>
          <EditableArea content={customFooter} />
          {/* <FooterArea content={customFooter} footerPath={footer} /> */}
        </>
      )}
    </>
  );
};

export default HomePage;
