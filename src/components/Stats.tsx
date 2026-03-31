interface StatsProps {
  darkMode: boolean;
}

const stats = [
  { value: '10x', label: 'Faster Quoting', sub: 'vs. manual RFQ processing' },
  { value: '60+', label: 'Min Saved/RFQ', sub: 'Conservative estimate per quote' },
  { value: '97%', label: 'AI Accuracy', sub: 'On manufacturing documents' },
  { value: '156x', label: 'Average ROI', sub: 'Annual return on investment' },
  { value: '<60s', label: 'Setup Time', sub: 'From install to first RFQ' },
  { value: '$0', label: 'To Start', sub: 'Free plan, no card needed' },
];

export default function Stats({ darkMode }: StatsProps) {
  return (
    <section className={`py-16 border-y ${darkMode ? 'bg-[#070a20] border-white/8' : 'bg-gray-50/80 border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`scroll-animate scroll-animate-delay-${Math.min(i + 1, 5)} text-center`}
            >
              <div className={`text-2xl sm:text-3xl font-extrabold mb-1 ${darkMode ? 'gradient-text-light' : 'gradient-text'}`}>
                {stat.value}
              </div>
              <div className={`text-sm font-semibold mb-0.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{stat.label}</div>
              <div className={`text-xs ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
