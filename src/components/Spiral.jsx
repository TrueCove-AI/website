export default function Spiral() {
  return (
    <svg className="spiral" viewBox="0 0 600 420" fill="none">
      {/* Simple parametric spiral-ish rings to echo your mock */}
      {Array.from({ length: 26 }).map((_, i) => (
        <path
          key={i}
          d={`M300 210
              m-${i * 4},0
              a${i * 4},${i * 2.6} 0 1,0 ${i * 8},0
              a${i * 4},${i * 2.6} 0 1,0 -${i * 8},0`}
          strokeWidth="0.8"
        />
      ))}
    </svg>
  );
}
