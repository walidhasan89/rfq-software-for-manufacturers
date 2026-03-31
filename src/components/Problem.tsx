import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ProblemProps {
  darkMode: boolean;
}

const problems = [
  {
    icon: '🔩',
    title: 'RFQ Emails Arrive in Chaos',
    desc: 'Sales teams spend 45–90 minutes per day just identifying which emails are RFQs. Our AI-powered RFQ email management tool auto-detects every incoming RFQ instantly.',
    stat: '90 min/day',
    statLabel: 'wasted on identification',
    link: { href: 'https://rfqautopilot.com/rfq-email-management-tool', text: 'RFQ email management tool' },
  },
  {
    icon: '📋',
    title: 'Specs Buried in Complex Documents',
    desc: 'A typical RFQ arrives with 15-page PDF specs, Excel BOMs with 200 line items, and CAD drawing exports. Manual extraction takes 2–4 hours per RFQ.',
    stat: '4 hrs',
    statLabel: 'per complex RFQ',
    link: { href: 'https://rfqautopilot.com/rfq-data-extraction-from-pdf', text: 'RFQ data extraction from PDF' },
  },
  {
    icon: '👥',
    title: 'Cross-Functional But Disconnected',
    desc: 'Sales, engineering, purchasing, production, quality — all need RFQ data that lives in one person\'s inbox attachment. Average RFQ touches 4–6 people over 3–5 business days.',
    stat: '5 days',
    statLabel: 'avg. response time',
    link: null,
  },
  {
    icon: '📊',
    title: 'No Pipeline Visibility',
    desc: 'RFQ data lives in individual inboxes and personal spreadsheets. No centralized pipeline. No reporting. No way to identify win rates or bottlenecks.',
    stat: '0%',
    statLabel: 'pipeline visibility',
    link: null,
  },
  {
    icon: '⚡',
    title: 'Slow Responses Lose Jobs',
    desc: 'Buyers send the same RFQ to 5–10 suppliers simultaneously. The first accurate response wins the contract 60–70% of the time in competitive bids.',
    stat: '70%',
    statLabel: 'win rate for first responder',
    link: null,
  },
  {
    icon: '❌',
    title: 'Data Entry Errors Cost Thousands',
    desc: 'Industry studies estimate 8–15% of manually entered data contains errors. Each quoting error costs $5,000–$25,000 in rework, returns, and lost customer trust.',
    stat: '$25K',
    statLabel: 'avg. cost per error',
    link: null,
  },
];

export default function Problem({ darkMode }: ProblemProps) {
  const ref = useScrollAnimation();

  return (
    <section id="problem" className={`py-24 lg:py-32 ${darkMode ? 'bg-[#080c28]' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="scroll-animate text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border mb-6 ${
            darkMode ? 'border-red-500/30 bg-red-500/10 text-red-300' : 'border-red-200 bg-red-50 text-red-700'
          }`}>
            The Problem
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-gray-950'}`}>
            Why the RFQ Process Is{' '}
            <span className={darkMode ? 'gradient-text-light' : 'gradient-text'}>Broken</span>
            {' '}in Most Manufacturing Companies
          </h2>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Manufacturing RFQs are more technical, more document-heavy, and more time-sensitive than any other industry. Yet most manufacturers still process them the same way they did twenty years ago — manually. Explore our{' '}
            <a href="https://rfqautopilot.com/rfq-automation-software" className={`underline underline-offset-2 transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
              RFQ automation software
            </a>{' '}
            built to fix this.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <div
              key={i}
              className={`scroll-animate scroll-animate-delay-${Math.min(i + 1, 5)} card-3d group relative rounded-2xl p-7 border overflow-hidden ${
                darkMode
                  ? 'bg-white/3 border-white/8 hover:border-red-500/20 hover:bg-red-500/5'
                  : 'bg-white border-gray-100 hover:border-red-200 hover:bg-red-50/30 shadow-sm hover:shadow-red-100/50'
              } transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-3xl">{problem.icon}</span>
                <div className="text-right">
                  <div className={`text-2xl font-extrabold ${darkMode ? 'text-red-400' : 'text-red-600'}`}>{problem.stat}</div>
                  <div className={`text-xs font-medium ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{problem.statLabel}</div>
                </div>
              </div>
              <h3 className={`text-base font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{problem.title}</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{problem.desc}</p>

              {/* Bottom accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${darkMode ? 'bg-red-500/50' : 'bg-red-400/40'}`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl text-base font-bold text-white gradient-brand btn-glow shadow-xl shadow-blue-500/20"
          >
            Fix Your RFQ Process — Add to Chrome Free
          </a>
        </div>
      </div>
    </section>
  );
}
