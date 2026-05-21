const items = [
  {
    title: 'Focused lighting',
    text: 'Reduce eye strain with adjustable warm and cool modes for day and night work.',
  },
  {
    title: 'Minimal footprint',
    text: 'A clean aluminum body that fits small desks without adding visual clutter.',
  },
  {
    title: 'USB-C powered',
    text: 'Simple cable management and easy compatibility with modern desk setups.',
  },
] as const;

export function ProductHighlights() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map(({ title, text }) => (
        <article
          key={title}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm"
        >
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-white/70">{text}</p>
        </article>
      ))}
    </div>
  );
}

export default ProductHighlights;
