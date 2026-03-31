interface UseCasesProps {
  darkMode: boolean;
}

const cases = [
  {
    emoji: '🏭',
    type: 'CNC Machine Shop',
    profile: '35 employees · Aerospace & Defense · ISO 9001 + AS9100 · 60+ RFQs/week',
    quote: '"We were drowning in RFQs. Our guys are machinists, not data entry clerks. RFQ AutoPilot handles all the administrative grunt work so our estimators can focus on what they\'re actually good at — pricing jobs accurately. We paid for the entire year in the first week from jobs we would have missed."',
    author: 'Mike R., General Manager',
    company: 'Precision CNC Shop, Ohio',
    metrics: [
      { label: 'RFQ turnaround', before: '4 days', after: '8 hours', color: 'green' },
      { label: 'Quotes/day (per estimator)', before: '12', after: '35', color: 'blue' },
      { label: 'Missed RFQs/month', before: '8', after: '0', color: 'green' },
      { label: 'Q1 new contracts won', before: '', after: '+$380K', color: 'gold' },
    ],
  },
  {
    emoji: '⚙️',
    type: 'Sheet Metal Fabrication',
    profile: '120 employees · Automotive & HVAC OEMs · IATF 16949 · 100+ RFQs/week',
    quote: '"The BOM parsing alone saved us from hiring two additional estimators. When you process BOMs with 150 line items, manual entry isn\'t just slow — it\'s where errors happen. RFQ AutoPilot eliminated both problems. Our OEM buyers have noticed the difference in our response speed."',
    author: 'Jennifer L., Director of Sales',
    company: 'Sheet Metal Fabricator, Michigan',
    metrics: [
      { label: 'BOM parsing time', before: '1–3 hours', after: '<1 min', color: 'green' },
      { label: '48-hr deadline compliance', before: '62%', after: '97%', color: 'blue' },
      { label: 'Quotation error rate', before: '11%', after: '1.5%', color: 'green' },
      { label: 'RFQ capacity (same team)', before: '60/wk', after: '100+/wk', color: 'gold' },
    ],
  },
  {
    emoji: '🔌',
    type: 'Contract Electronics Manufacturer',
    profile: '80 employees · Defense & Medical OEMs · ISO 9001 + IPC-A-610 Class 3',
    quote: '"In contract electronics manufacturing, a wrong MPN on your quote doesn\'t just lose the deal — it can cause production shutdowns if it makes it to the floor. RFQ AutoPilot\'s extraction accuracy is better than our best data entry person. And it\'s infinitely faster."',
    author: 'Tom H., VP of Business Development',
    company: 'Contract Electronics Manufacturer, Texas',
    metrics: [
      { label: '300-line BOM processing', before: '3 hours', after: '4 minutes', color: 'green' },
      { label: 'RFQ response time', before: '5 days', after: '1.5 days', color: 'blue' },
      { label: 'Quote accuracy improvement', before: '', after: '+92%', color: 'green' },
      { label: 'New programs won', before: '', after: '+$1.2M/yr', color: 'gold' },
    ],
  },
  {
    emoji: '🔧',
    type: 'Small Job Shop — Owner-Operator',
    profile: '8 employees · General machining · Owner handles sales + quoting · 15–25 RFQs/week',
    quote: '"I\'m a machinist who has to be a salesman too. RFQ AutoPilot is the closest thing I have to a sales assistant. It reads the emails, pulls the data, and writes the quote — I just punch in my prices and hit send. Best $15/month I\'ve ever spent on my business."',
    author: 'Carlos D., Owner',
    company: 'General Machine Shop, California',
    metrics: [
      { label: 'Response time', before: '2–3 days', after: 'Same day', color: 'green' },
      { label: 'Quotes sent/week', before: '10', after: '22', color: 'blue' },
      { label: 'Monthly revenue increase', before: '', after: '+$18K', color: 'gold' },
      { label: 'Weekly admin hours recovered', before: '', after: '12+ hrs', color: 'green' },
    ],
  },
];

export default function UseCases({ darkMode }: UseCasesProps) {
  return (
    <section id="use-cases" className={`py-24 lg:py-32 ${darkMode ? 'bg-[#060b24]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="scroll-animate text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border mb-6 ${
            darkMode ? 'border-blue-500/30 bg-blue-500/10 text-blue-300' : 'border-blue-200 bg-blue-50 text-blue-700'
          }`}>
            Customer Stories
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-gray-950'}`}>
            How Manufacturers Use RFQ AutoPilot{' '}
            <span className={darkMode ? 'gradient-text-light' : 'gradient-text'}>to Win More Business</span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            From 5-person job shops to 500-employee contract manufacturers — real results from real manufacturing teams.
          </p>
        </div>

        {/* Use case cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <div
              key={i}
              className={`scroll-animate scroll-animate-delay-${Math.min(i + 1, 4)} card-3d rounded-2xl p-7 border overflow-hidden transition-all duration-300 ${
                darkMode
                  ? 'bg-white/3 border-white/8 hover:border-blue-500/20'
                  : 'bg-white border-gray-100 shadow-sm hover:shadow-lg hover:shadow-blue-50'
              }`}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <span className="text-4xl">{c.emoji}</span>
                <div>
                  <h3 className={`text-lg font-extrabold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{c.type}</h3>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{c.profile}</p>
                </div>
              </div>

              {/* Metrics grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {c.metrics.map((m, j) => (
                  <div key={j} className={`rounded-xl p-3 border ${
                    darkMode ? 'bg-white/5 border-white/8' : 'bg-gray-50 border-gray-100'
                  }`}>
                    <div className={`text-xs mb-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{m.label}</div>
                    <div className="flex items-center gap-2">
                      {m.before && (
                        <>
                          <span className={`text-xs line-through ${darkMode ? 'text-gray-600' : 'text-gray-300'}`}>{m.before}</span>
                          <span className={darkMode ? 'text-gray-600' : 'text-gray-300'}>→</span>
                        </>
                      )}
                      <span className={`text-sm font-extrabold ${
                        m.color === 'green' ? (darkMode ? 'text-green-400' : 'text-green-600') :
                        m.color === 'gold' ? (darkMode ? 'text-yellow-400' : 'text-amber-600') :
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>{m.after}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className={`relative text-sm leading-relaxed italic mb-4 pl-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <span className={`absolute left-0 top-0 text-3xl leading-none font-serif ${darkMode ? 'text-blue-500/40' : 'text-blue-200'}`}>"</span>
                {c.quote}
              </blockquote>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-2">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div>
                <div className={`text-sm font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{c.author}</div>
                <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{c.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust counter */}
        <div className={`scroll-animate mt-16 rounded-2xl p-8 border text-center ${darkMode ? 'border-blue-500/20 bg-blue-500/5' : 'border-blue-100 bg-blue-50/50'}`}>
          <div className={`text-5xl font-extrabold mb-2 ${darkMode ? 'gradient-text-light' : 'gradient-text'}`}>10x</div>
          <div className={`text-lg font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Faster Quoting — From Days to Minutes</div>
          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Manufacturing teams across CNC, sheet metal, electronics, and job shops are transforming their RFQ workflows</div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl text-base font-bold text-white gradient-brand btn-glow shadow-xl shadow-blue-500/20"
          >
            Add to Chrome — It's Free
          </a>
        </div>
      </div>
    </section>
  );
}
