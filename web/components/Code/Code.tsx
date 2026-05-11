export interface CodeProps {
  html: string;
  style?: string;
  nonce?: string;
}

function decodeHtmlEntities(html: string) {
  return html
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&#(\d+);/g, (_, codePoint: string) =>
      String.fromCodePoint(Number(codePoint)),
    )
    .replace(/&#x([0-9a-fA-F]+);/g, (_, codePoint: string) =>
      String.fromCodePoint(Number.parseInt(codePoint, 16)),
    );
}

const Code = ({ html, style, nonce }: CodeProps) => {
  if (!html) {
    return <p>No code provided</p>;
  }

  const decodedHtml = decodeHtmlEntities(html);

  return (
    <>
      {style && <style nonce={nonce}>{style}</style>}
      <div dangerouslySetInnerHTML={{ __html: decodedHtml }} />
    </>
  );
};

export default Code;
