const countryCodes = [
  "ru",
  "it",
  "bd",
  "lt",
  "my",
  "ae",
  "bg",
  "by",
  "in",
  "id",
  "sa",
  "sg",
  "rs",
  "sk",
  "th",
  "pt",
  "ph",
  "mx",
  "hu",
  "gr",
  "ca",
]; // Add more if needed

export default function FlagBanner() {
  // Repeat enough times to cover at least 200% width for smooth scroll
  const repeatedFlags = Array.from({ length: 10 }, () => countryCodes).flat();

  return (
    <div className="w-full overflow-hidden bg-gray-200 py-8">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />
      <div className="flex animate-scroll gap-4 w-max">
        {repeatedFlags.map((code, idx) => (
          <img
            key={`${code}-${idx}`}
            src={`https://flagcdn.com/w80/${code}.png`}
            alt={code.toUpperCase()}
            className="w-20 h-auto shrink-0"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}
