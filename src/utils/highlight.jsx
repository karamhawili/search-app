export default function highlightText(text, query) {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    regex.test(part) ? (
      <mark key={index} className="highlight">
        {part}
      </mark>
    ) : (
      part
    ),
  );
}
