import { Footer } from "@/components";
import { EditableArea } from "@magnolia/react-editor";

export const FooterArea = ({
  isEditable,
  footer,
}: {
  isEditable: boolean;
  footer?: FooterType;
}) => {
  if (isEditable || !footer) {
    return <EditableArea />;
  }

  return <Footer footer={footer} />;
};
