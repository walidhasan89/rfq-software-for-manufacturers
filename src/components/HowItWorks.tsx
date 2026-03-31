interface HowItWorksProps {
  darkMode: boolean;
}

const steps = [
  {
    number: '01',
    emoji: '🔍',
    title: 'Instant RFQ Detection',
    subtitle: 'An RFQ Email Arrives — Identified Automatically',
    desc: 'RFQ AutoPilot\'s AI analyzes the email subject line, body content, sender domain, and attachment types. The email is classified as an RFQ with 97% confidence within seconds.',
    bullets: [
      'Labeled "RFQ" in your inbox automatically',
      'Added to RFQ dashboard with priority level',
      'Deadline detected and flagged (e.g., "Friday — 3 days")',
      'Queued for attachment processing',
    ],
    color: 'blue',
  },
  {
    number: '02',
    emoji: '📄',
    title: 'Automatic Data Extraction',
    subtitle: 'Attachments Parsed — Specs & BOMs Extracted',
    desc: 'The extraction engine processes PDF attachments and Excel BOMs simultaneously. Within 10–30 seconds, you see a structured data preview in your email sidebar.',
    bullets: [
      'Part numbers, materials, tolerances extracted from PDFs',
      'Excel BOMs parsed with full line item detail',
      'Certification requirements flagged automatically',
      'Delivery dates and Incoterms identified',
    ],
    color: 'indigo',
  },
  {
    number: '03',
    emoji: '👥',
    title: 'Cross-Functional Review',
    subtitle: 'Share Data with Engineering, Purchasing & Production',
    desc: 'From the RFQ dashboard, assign to estimators, share specs with engineering for DFM review, send materials to purchasing, and flag requirements for quality — all without forwarding emails.',
    bullets: [
      'Assign RFQ to specific estimator',
      'Engineering sees specs without downloading attachments',
      'Purchasing gets material requirements instantly',
      'Quality manager sees certification callouts',
    ],
    color: 'violet',
  },
  {
    number: '04',
    emoji: '✉️',
    title: 'Generate & Send Your Quote',
    subtitle: 'AI Generates Your Quotation — Review, Customize, Send',
    desc: 'Click "Generate Quote." RFQ AutoPilot selects the right manufacturing template, auto-fills line items, suggests pricing from historical data, and drafts a professional cover email.',
    bullets: [
      'Manufacturing-specific template auto-selected',
      'Line items pre-filled with extracted data',
      'Historical pricing suggestions (if available)',
      'Formatted PDF quote with your branding',
    ],
    color: 'blue',
  },
];

export default function HowItWorks({ darkMode }: HowItWorksProps) {
  return (
    <section id="how-it-works" className={`py-24 lg:py-32 ${darkMode ? 'bg-[#080c28]' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="scroll-animate text-center mb-20">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border mb-6 ${
            darkMode ? 'border-blue-500/30 bg-blue-500/10 text-blue-300' : 'border-blue-200 bg-blue-50 text-blue-700'
          }`}>
            How It Works
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-gray-950'}`}>
            4 Steps Inside Your Inbox —{' '}
            <span className={darkMode ? 'gradient-text-light' : 'gradient-text'}>No New Platform</span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            RFQ AutoPilot is a{' '}
            <a href="https://rfqautopilot.com/gmail-chrome-extension-for-sales" className={`underline underline-offset-2 transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
              Gmail Chrome extension for sales
            </a>{' '}
            and an{' '}
            <a href="https://rfqautopilot.com/outlook-add-in-for-rfq" className={`underline underline-offset-2 transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
              Outlook add-in for RFQ
            </a>{' '}
            that adds intelligence to the inbox your team already uses. No migration, no training, no context switching.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className={`hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-px h-[calc(100%-96px)] ${darkMode ? 'bg-gradient-to-b from-blue-500/30 via-indigo-500/30 to-blue-500/10' : 'bg-gradient-to-b from-blue-200 via-indigo-200 to-blue-50'}`} />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`scroll-animate scroll-animate-delay-${i + 1} relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}
              >
                {/* Content side */}
                <div className={`${i % 2 === 1 ? 'lg:text-right lg:items-end' : ''} flex flex-col gap-5`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl gradient-brand flex items-center justify-center text-white font-extrabold text-lg shrink-0 shadow-lg shadow-blue-500/25`}>
                      {step.number}
                    </div>
                    <span className="text-3xl">{step.emoji}</span>
                  </div>
                  <div>
                    <h3 className={`text-2xl font-extrabold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{step.title}</h3>
                    <p className={`text-sm font-semibold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{step.subtitle}</p>
                    <p className={`text-base leading-relaxed mb-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{step.desc}</p>
                  </div>
                  <ul className="space-y-2">
                    {step.bullets.map((bullet, j) => (
                      <li key={j} className={`flex items-center gap-2.5 text-sm ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''} ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <svg className="w-4 h-4 text-blue-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual card side */}
                <div className={`relative rounded-2xl p-6 border overflow-hidden ${
                  darkMode
                    ? 'bg-gradient-to-br from-blue-500/10 to-indigo-500/5 border-blue-500/20'
                    : 'bg-gradient-to-br from-blue-50 to-indigo-50/50 border-blue-100 shadow-sm'
                }`}>
                  {/* Step indicator */}
                  <div className={`absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full ${
                    darkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-600'
                  }`}>
                    Step {i + 1} of 4
                  </div>

                  {/* Visual content based on step */}
                  {i === 0 && (
                    <div className="space-y-3 pt-4">
                      <p className={`text-xs font-semibold uppercase tracking-wider mb-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>RFQ Inbox View</p>
                      {['RFQ #4521 — Machined Aluminum Housing', 'Quote Request — Sheet Metal BOM (47 items)', 'Pricing needed — CNC parts by Friday'].map((subj, k) => (
                        <div key={k} className={`flex items-center gap-3 p-3 rounded-xl border ${
                          k === 0
                            ? darkMode ? 'bg-blue-500/15 border-blue-500/30' : 'bg-blue-50 border-blue-200'
                            : darkMode ? 'bg-white/5 border-white/8' : 'bg-white border-gray-100'
                        }`}>
                          <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                          <span className={`text-xs font-medium flex-1 truncate ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>{subj}</span>
                          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded text-white bg-blue-500 shrink-0`}>RFQ</span>
                        </div>
                      ))}
                      <div className={`flex items-center gap-2 mt-3 text-xs font-medium ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        3 RFQs detected automatically
                      </div>
                    </div>
                  )}

                  {i === 1 && (
                    <div className="pt-4">
                      <p className={`text-xs font-semibold uppercase tracking-wider mb-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Extracted in 28 seconds</p>
                      <div className="space-y-2">
                        {[
                          ['Part Number', 'CUST-HSG-6061-REV-B'],
                          ['Material', '6061-T6 Aluminum'],
                          ['Quantity', '500 pcs (6,000/yr)'],
                          ['Tolerance', '±0.005" general'],
                          ['Surface Finish', 'Anodize Type II, Black'],
                          ['Certification', 'ISO 9001 + CoC'],
                        ].map(([k, v]) => (
                          <div key={k} className={`flex justify-between text-xs px-3 py-1.5 rounded-lg ${darkMode ? 'bg-white/5' : 'bg-white'}`}>
                            <span className={darkMode ? 'text-gray-500' : 'text-gray-400'}>{k}</span>
                            <span className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {i === 2 && (
                    <div className="pt-4 space-y-4">
                      <p className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Team Assignment</p>
                      {[
                        { role: 'Estimator', name: 'John D.', status: 'Reviewing', color: 'blue' },
                        { role: 'Engineering', name: 'Sarah K.', status: 'DFM Review', color: 'indigo' },
                        { role: 'Purchasing', name: 'Mike R.', status: 'Material Pricing', color: 'violet' },
                        { role: 'Quality', name: 'Lisa M.', status: 'Cert Verified ✓', color: 'green' },
                      ].map((m) => (
                        <div key={m.role} className={`flex items-center justify-between p-3 rounded-xl border text-xs ${darkMode ? 'bg-white/5 border-white/8' : 'bg-white border-gray-100'}`}>
                          <div>
                            <span className={`font-bold block ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{m.name}</span>
                            <span className={darkMode ? 'text-gray-500' : 'text-gray-400'}>{m.role}</span>
                          </div>
                          <span className={`px-2 py-0.5 rounded-full font-medium ${
                            m.color === 'green'
                              ? darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-50 text-green-600'
                              : darkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-50 text-blue-600'
                          }`}>{m.status}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {i === 3 && (
                    <div className="pt-4">
                      <p className={`text-xs font-semibold uppercase tracking-wider mb-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Generated Quote Preview</p>
                      <div className={`rounded-xl border p-4 space-y-3 ${darkMode ? 'bg-white/5 border-white/8' : 'bg-white border-gray-100'}`}>
                        <div className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Quotation #Q-4521</div>
                        <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>In response to RFQ #4521 — Machined Aluminum Housing</div>
                        <div className="border-t border-dashed pt-3 space-y-1.5" style={{borderColor: darkMode ? 'rgba(255,255,255,0.08)' : '#f3f4f6'}}>
                          {['500 pcs × $24.50 = $12,250', 'Material (6061-T6): $1,800', 'Anodize Type II: $1,250', 'Setup charge: $450'].map(line => (
                            <div key={line} className={`flex justify-between text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              <span>{line.split('=')[0].split(':')[0]}</span>
                              <span className="font-semibold">${line.includes('=') ? line.split('= $')[1] : line.split(': $')[1]}</span>
                            </div>
                          ))}
                        </div>
                        <div className={`flex justify-between text-sm font-bold pt-2 border-t ${darkMode ? 'border-blue-500/20 text-blue-300' : 'border-blue-100 text-blue-700'}`}>
                          <span>Total Quote Value</span>
                          <span>$15,750.00</span>
                        </div>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <div className="flex-1 py-2.5 rounded-xl text-xs font-bold text-white gradient-brand text-center">Send Quote</div>
                        <div className={`px-4 py-2.5 rounded-xl text-xs font-semibold border text-center ${darkMode ? 'border-white/10 text-gray-400' : 'border-gray-200 text-gray-500'}`}>Export PDF</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Time comparison */}
        <div className={`scroll-animate mt-20 rounded-2xl p-8 border text-center ${darkMode ? 'border-blue-500/20 bg-blue-500/5' : 'border-blue-100 bg-blue-50/50'}`}>
          <p className={`text-sm font-semibold mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total time: RFQ received → Quote sent</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className={`text-4xl font-extrabold ${darkMode ? 'text-red-400' : 'text-red-600'}`}>3–5 days</div>
              <div className={`text-sm font-medium mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Without RFQ AutoPilot</div>
            </div>
            <div className={`text-4xl font-bold ${darkMode ? 'text-gray-600' : 'text-gray-300'}`}>→</div>
            <div className="text-center">
              <div className={`text-4xl font-extrabold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>15–45 min</div>
              <div className={`text-sm font-medium mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>With RFQ AutoPilot</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl text-base font-bold text-white gradient-brand btn-glow shadow-xl shadow-blue-500/20"
          >
            See It Work in Your Inbox — Add to Chrome Free
          </a>
        </div>
      </div>
    </section>
  );
}
