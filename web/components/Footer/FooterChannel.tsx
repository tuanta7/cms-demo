interface FooterChannelProps {
  link: string;
  iconLink: string;
}

export function FooterChannel({ link, iconLink }: FooterChannelProps) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        window.open(link, "_blank");
      }}
      className="w-10 h-10 rounded-full bg-gray-700 text-white text-sm flex items-center justify-center hover:bg-gray-600 transition"
    >
      {iconLink}
    </button>
  );
}
