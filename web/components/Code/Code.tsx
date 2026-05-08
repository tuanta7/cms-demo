export interface CodeProps {
  html: string;
  style?: string;
  nonce?: string;
}

const Code = ({ html, style, nonce }: CodeProps) => {
  if (!html) {
    return <p>No code provided</p>;
  }

  return (
    <>
      {style && (
        <style nonce={nonce} dangerouslySetInnerHTML={{ __html: style }} />
      )}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default Code;
