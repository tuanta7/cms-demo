import { FooterArea } from "@/templates/components/FooterArea";
import { EditableArea } from "@magnolia/react-editor";

const HomePage = ({
  content,
  footer,
}: {
  content: NodeType;
  footer?: FooterType;
}) => {
  return (
    <>
      <EditableArea content={content} />
      <FooterArea isEditable={true} footer={footer} />
    </>
  );
};

export default HomePage;
