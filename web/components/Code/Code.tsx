export interface CodeProps {
  html: string;
  style?: string;
}

const Code = ({ html, style }: CodeProps) => {
  if (!html) {
    return <p>No code provided</p>;
  }

  return (
    <>
      {style && <style dangerouslySetInnerHTML={{ __html: style }} />}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default Code;
