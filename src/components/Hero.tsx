interface HeroProps {
  darkMode: boolean;
}

const CHROME_EXT_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

export default function Hero({ darkMode }: HeroProps) {
  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-16 ${
        darkMode ? 'bg-[#060b24]' : 'bg-white'
      }`}
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`glow-orb w-[600px] h-[600px] top-[-100px] left-[-100px] ${darkMode ? 'bg-blue-600' : 'bg-blue-400'}`} style={{opacity: darkMode ? 0.12 : 0.07}} />
        <div className={`glow-orb w-[500px] h-[500px] bottom-[-100px] right-[-100px] ${darkMode ? 'bg-indigo-600' : 'bg-indigo-400'}`} style={{opacity: darkMode ? 0.1 : 0.06}} />
        <div className={`glow-orb w-[300px] h-[300px] top-[40%] left-[50%] ${darkMode ? 'bg-blue-500' : 'bg-blue-300'}`} style={{opacity: darkMode ? 0.07 : 0.05}} />
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: darkMode
              ? `linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)`
              : `linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        {/* Trust badge */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
            darkMode
              ? 'border-blue-500/30 bg-blue-500/10 text-blue-300'
              : 'border-blue-200 bg-blue-50 text-blue-700'
          }`}>
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            🏭 Purpose-Built RFQ Automation for B2B Manufacturers
          </div>
        </div>

        {/* H1 */}
        <div className="text-center max-w-5xl mx-auto mb-8">
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-gray-950'}`}
            style={{animationDelay: '0.1s'}}
          >
            RFQ Software Built for{' '}
            <span className={darkMode ? 'gradient-text-light' : 'gradient-text'}>
              B2B Manufacturers
            </span>
            {' '}—{' '}
            <span className="relative">
              Process Quotes 10x Faster
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 400 6" fill="none" preserveAspectRatio="none">
                <path d="M0 3 Q100 6 200 3 Q300 0 400 3" stroke="#3b82f6" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          <p className={`text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            AI-powered RFQ software that lives inside your Gmail and Outlook inbox — automatically detects RFQ emails, extracts part numbers &amp; specs from PDFs, and generates accurate quotation responses in minutes.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={CHROME_EXT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-7 py-4 rounded-2xl text-base font-bold text-white gradient-brand btn-glow shadow-xl shadow-blue-500/25 transition-all duration-300"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
            </svg>
            Add to Chrome — It's Free
          </a>
          <button
            onClick={() => document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            className={`flex items-center gap-2 px-7 py-4 rounded-2xl text-base font-semibold border transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
              darkMode
                ? 'border-white/15 text-gray-200 hover:border-blue-500/40 hover:bg-white/5'
                : 'border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-gray-50'
            }`}
          >
            See How It Works
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Trust bar */}
        <div className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium mb-16 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          {['Free forever plan', 'Gmail & Outlook compatible', 'Built for manufacturing', '30-second install', 'No IT setup required'].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {item}
            </span>
          ))}
        </div>

        {/* Hero UI Mockup */}
        <div className="relative max-w-4xl mx-auto mt-4">
          <div className={`relative rounded-2xl overflow-hidden border shadow-2xl animate-float ${
            darkMode
              ? 'border-blue-500/20 bg-[#0d1235] shadow-blue-500/10'
              : 'border-gray-200 bg-white shadow-blue-100/50'
          }`}>
            {/* Window chrome */}
            <div className={`flex items-center gap-2 px-5 py-3.5 border-b ${darkMode ? 'border-white/10 bg-[#0a0f2c]' : 'border-gray-100 bg-gray-50'}`}>
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className={`flex-1 mx-4 h-6 rounded-md px-3 flex items-center text-xs ${darkMode ? 'bg-white/5 text-gray-500' : 'bg-gray-100 text-gray-400'}`}>
                📧 sales@yourmanufacturing.com — Gmail
              </div>
            </div>

            {/* Email content area */}
            <div className="p-6 grid grid-cols-1 lg:grid-cols-5 gap-5">
              {/* Email list (left) */}
              <div className={`lg:col-span-2 rounded-xl overflow-hidden border ${darkMode ? 'border-white/5 bg-white/3' : 'border-gray-100 bg-gray-50'}`}>
                <div className={`px-4 py-3 text-xs font-semibold uppercase tracking-wider border-b ${darkMode ? 'border-white/5 text-gray-500' : 'border-gray-100 text-gray-400'}`}>
                  Inbox
                </div>
                {[
                  { tag: 'RFQ', color: 'bg-blue-500', subject: 'RFQ #4521 — Machined Parts', from: 'procurement@oemcorp.com', time: '2m ago', urgent: true },
                  { tag: 'RFQ', color: 'bg-blue-500', subject: 'Pricing Request — Sheet Metal', from: 'buyer@tier1supplier.com', time: '18m ago', urgent: false },
                  { tag: 'RFQ', color: 'bg-purple-500', subject: 'Quote needed — 50 Part BOM', from: 'rfq@industrialco.com', time: '1h ago', urgent: false },
                  { tag: '', color: '', subject: 'RE: Delivery Confirmation', from: 'logistics@supplier.com', time: '3h ago', urgent: false },
                ].map((email, i) => (
                  <div key={i} className={`px-4 py-3 border-b cursor-pointer transition-colors ${
                    i === 0
                      ? darkMode ? 'bg-blue-500/10 border-blue-500/20' : 'bg-blue-50 border-blue-100'
                      : darkMode ? 'border-white/5 hover:bg-white/3' : 'border-gray-100 hover:bg-white'
                  }`}>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className={`text-xs font-medium truncate ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{email.subject}</span>
                      {email.tag && (
                        <span className={`shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded text-white ${email.color}`}>{email.tag}</span>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs truncate ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{email.from}</span>
                      <span className={`text-xs shrink-0 ${email.urgent ? 'text-orange-400 font-medium' : darkMode ? 'text-gray-600' : 'text-gray-400'}`}>{email.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Extraction panel (right) */}
              <div className={`lg:col-span-3 rounded-xl border p-5 ${darkMode ? 'border-blue-500/20 bg-blue-500/5' : 'border-blue-100 bg-blue-50/50'}`}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-lg gradient-brand flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <span className={`text-xs font-bold ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>RFQ AutoPilot</span>
                    <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full font-medium ${darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'}`}>✓ RFQ Detected</span>
                  </div>
                </div>
                <div className={`text-xs font-semibold uppercase tracking-wider mb-3 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Extracted Data</div>
                <div className="space-y-2">
                  {[
                    { label: 'Part Number', value: 'CUST-HSG-6061-REV-B', highlight: true },
                    { label: 'Material', value: '6061-T6 Aluminum', highlight: false },
                    { label: 'Quantity', value: '500 pcs (6,000/yr)', highlight: false },
                    { label: 'Tolerance', value: '±0.005" / ±0.001" bore', highlight: false },
                    { label: 'Surface', value: 'Anodize Type II, Black', highlight: false },
                    { label: 'Certification', value: 'ISO 9001 + CoC Required', highlight: true },
                    { label: 'Deadline', value: 'Friday — 3 days', highlight: true },
                  ].map((row) => (
                    <div key={row.label} className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs ${
                      row.highlight
                        ? darkMode ? 'bg-blue-500/15 border border-blue-500/25' : 'bg-blue-100 border border-blue-200'
                        : darkMode ? 'bg-white/5' : 'bg-white'
                    }`}>
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{row.label}</span>
                      <span className={`font-semibold ${
                        row.highlight
                          ? darkMode ? 'text-blue-300' : 'text-blue-700'
                          : darkMode ? 'text-gray-200' : 'text-gray-800'
                      }`}>{row.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 py-2.5 rounded-xl text-xs font-bold text-white gradient-brand transition-all hover:opacity-90">
                    Generate Quote
                  </button>
                  <button className={`px-4 py-2.5 rounded-xl text-xs font-semibold border transition-colors ${darkMode ? 'border-white/10 text-gray-300 hover:bg-white/5' : 'border-gray-200 text-gray-600 hover:bg-white'}`}>
                    Export to ERP
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Floating stat badges */}
          <div className={`absolute -left-4 top-1/3 hidden lg:flex items-center gap-2.5 px-4 py-3 rounded-2xl text-xs font-semibold shadow-xl border animate-float ${
            darkMode ? 'bg-[#0d1235] border-green-500/20 text-green-400' : 'bg-white border-green-100 text-green-700 shadow-green-100/50'
          }`} style={{ animationDelay: '1s' }}>
            <span className="text-2xl font-extrabold">10x</span>
            <span className="leading-tight">Faster<br/>Quoting</span>
          </div>
          <div className={`absolute -right-4 bottom-1/3 hidden lg:flex items-center gap-2.5 px-4 py-3 rounded-2xl text-xs font-semibold shadow-xl border animate-float ${
            darkMode ? 'bg-[#0d1235] border-blue-500/20 text-blue-300' : 'bg-white border-blue-100 text-blue-700 shadow-blue-100/50'
          }`} style={{ animationDelay: '2s' }}>
            <span className="text-2xl font-extrabold">97%</span>
            <span className="leading-tight">Accuracy<br/>Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
