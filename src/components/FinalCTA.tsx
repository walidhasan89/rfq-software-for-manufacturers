interface FinalCTAProps {
  darkMode: boolean;
}

const CHROME_EXT_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

export default function FinalCTA({ darkMode }: FinalCTAProps) {
  return (
    <section className={`py-24 lg:py-32 relative overflow-hidden ${darkMode ? 'bg-[#060b24]' : 'bg-white'}`}>
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`glow-orb w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${darkMode ? 'bg-blue-600' : 'bg-blue-400'}`} style={{opacity: darkMode ? 0.1 : 0.05}} />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: darkMode
              ? `linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)`
              : `linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="scroll-animate text-center">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border mb-8 ${
            darkMode ? 'border-orange-500/30 bg-orange-500/10 text-orange-300' : 'border-orange-200 bg-orange-50 text-orange-700'
          }`}>
            ⚡ Your Competitors Are Already Quoting Faster
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-8 ${darkMode ? 'text-white' : 'text-gray-950'}`}>
            It's Time to{' '}
            <span className={darkMode ? 'gradient-text-light' : 'gradient-text'}>Catch Up</span>
          </h2>

          {/* The contrast block */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 text-left max-w-3xl mx-auto">
            {/* Losers */}
            <div className={`rounded-2xl p-6 border ${darkMode ? 'border-red-500/20 bg-red-500/5' : 'border-red-100 bg-red-50/50'}`}>
              <div className={`text-xs font-bold uppercase tracking-wider mb-4 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>Without RFQ AutoPilot</div>
              {[
                'Spending 3–5 days on quotes that take hours',
                'Losing RFQs in cluttered inboxes',
                'Making costly data entry errors',
                'No pipeline visibility — flying blind',
                'Losing bids to faster competitors',
              ].map((item) => (
                <div key={item} className={`flex items-start gap-2.5 mb-2.5 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <svg className="w-4 h-4 text-red-500 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>

            {/* Winners */}
            <div className={`rounded-2xl p-6 border relative overflow-hidden ${darkMode ? 'border-green-500/20 bg-green-500/5' : 'border-green-100 bg-green-50/50'}`}>
              <div className={`text-xs font-bold uppercase tracking-wider mb-4 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>With RFQ AutoPilot</div>
              {[
                'Every RFQ detected automatically',
                'Part numbers & specs extracted in seconds',
                'Professional quotes from manufacturing templates',
                'Complete RFQ pipeline visibility',
                'Same-day responses win more contracts',
              ].map((item) => (
                <div key={item} className={`flex items-start gap-2.5 mb-2.5 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <p className={`text-lg mb-10 leading-relaxed max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            The manufacturers who respond first win the most business. That's not an opinion. That's how procurement works.{' '}
            <strong className={darkMode ? 'text-white' : 'text-gray-900'}>Be the first to respond.</strong>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={CHROME_EXT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4.5 rounded-2xl text-lg font-extrabold text-white gradient-brand btn-glow shadow-2xl shadow-blue-500/30 transition-all duration-300"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
              Add to Chrome — It's Free
            </a>
            <a
              href="mailto:support@rfqautopilot.com?subject=Manufacturing Demo Request"
              className={`flex items-center gap-2 px-7 py-4 rounded-2xl text-base font-semibold border transition-all duration-300 hover:scale-[1.02] ${
                darkMode
                  ? 'border-white/15 text-gray-200 hover:border-blue-500/40 hover:bg-white/5'
                  : 'border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-gray-50'
              }`}
            >
              Request a Demo →
            </a>
          </div>

          {/* Trust micro-copy */}
          <div className={`flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            {['🆓 Free plan: 30 RFQs/month', 'No credit card required', 'Gmail & Outlook', '60-second setup', 'Built for manufacturers'].map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
