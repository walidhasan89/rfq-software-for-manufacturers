interface FeaturesProps {
  darkMode: boolean;
}

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Part Number & SKU Extraction',
    desc: 'Trained on manufacturing document patterns — extracts complex alphanumeric part numbers, revision levels, and alternate part references with 94–98% accuracy.',
    detail: 'Recognizes formats like ASSY-4521-REV-C, MFG-SS304-FL-2.5, and links to your historical quote data.',
    badge: 'AI-Powered',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Bill of Materials Parsing',
    desc: 'Parse multi-level BOMs automatically — flat lists to complex assembly hierarchies. Handles 10 to 500+ line items from Excel, PDF, and Word formats.',
    detail: 'One-click ERP export in CSV/Excel formats compatible with SAP, Epicor, E2, JobBOSS, and more.',
    badge: 'ERP Ready',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Material & Specification Detection',
    desc: 'Recognizes metals, plastics, surface finishes, heat treatments, tolerances, thread specs, and standards references (ASTM, AMS, MIL-SPEC, ISO).',
    detail: 'Surfaces material specs buried on page 8 — highlighted, organized, ready for your quoting process.',
    badge: 'Manufacturing-Specific',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Quality Certification Detection',
    desc: 'Automatically flags ISO 9001, AS9100, IATF 16949, NADCAP, ISO 13485, RoHS/REACH, DFARS/ITAR, and FAI requirements from RFQ documents.',
    detail: 'Prevents quoting work you can\'t certify — flags compliance requirements before you invest time.',
    badge: 'Compliance',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Delivery & Lead Time Intelligence',
    desc: 'Extracts required delivery dates, lead times, split shipment schedules, Incoterms, and blanket order indicators automatically.',
    detail: 'Production planner sees delivery requirements before being asked — enables accurate lead time quotes.',
    badge: 'Auto-Extract',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Manufacturing Quote Templates',
    desc: 'Pre-built templates for CNC machining, sheet metal, injection molding, assembly, and multi-operation processes — with your branding and terms.',
    detail: 'Machine shop, sheet metal, injection molding, and assembly templates with correct line item structures.',
    badge: '5+ Templates',
  },
];

export default function Features({ darkMode }: FeaturesProps) {
  return (
    <section id="features" className={`py-24 lg:py-32 relative overflow-hidden ${darkMode ? 'bg-[#060b24]' : 'bg-white'}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`glow-orb w-[400px] h-[400px] top-0 right-0 ${darkMode ? 'bg-blue-600' : 'bg-blue-300'}`} style={{opacity: darkMode ? 0.08 : 0.05}} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="scroll-animate text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border mb-6 ${
            darkMode ? 'border-blue-500/30 bg-blue-500/10 text-blue-300' : 'border-blue-200 bg-blue-50 text-blue-700'
          }`}>
            Manufacturing-Grade Features
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-gray-950'}`}>
            Built for How Your{' '}
            <span className={darkMode ? 'gradient-text-light' : 'gradient-text'}>Shop Actually Works</span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Generic productivity tools don't understand manufacturing. RFQ AutoPilot is different — every feature is engineered for the specific document types, data formats, and workflows that B2B manufacturers deal with every day. It's the{' '}
            <a href="https://rfqautopilot.com/rfq-software-for-manufacturers" className={`underline underline-offset-2 transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
              RFQ software for manufacturers
            </a>{' '}
            your quoting team actually needs.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`scroll-animate scroll-animate-delay-${Math.min(i + 1, 5)} card-3d group relative rounded-2xl p-7 border overflow-hidden transition-all duration-300 ${
                darkMode
                  ? 'bg-white/3 border-white/8 hover:border-blue-500/30 hover:bg-blue-500/5'
                  : 'bg-white border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 shadow-sm'
              }`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 gradient-brand text-white group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Badge */}
              <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-3 ${
                darkMode ? 'bg-blue-500/15 text-blue-400 border border-blue-500/20' : 'bg-blue-50 text-blue-600 border border-blue-100'
              }`}>
                {feature.badge}
              </span>

              <h3 className={`text-base font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{feature.title}</h3>
              <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{feature.desc}</p>
              <p className={`text-xs leading-relaxed italic ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{feature.detail}</p>

              {/* Gradient bottom accent on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 gradient-brand" />
            </div>
          ))}
        </div>

        {/* Internal link contextual callout */}
        <div className={`scroll-animate rounded-2xl p-6 border mb-6 ${darkMode ? 'border-blue-500/20 bg-blue-500/5' : 'border-blue-100 bg-blue-50/60'}`}>
          <p className={`text-sm text-center leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Used by manufacturers, distributors, and export teams alike.{' '}
            <a href="https://rfqautopilot.com/rfq-software-for-distributors" className={`underline underline-offset-2 font-medium ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
              RFQ software for distributors
            </a>{' '}·{' '}
            <a href="https://rfqautopilot.com/rfq-management-for-export-companies" className={`underline underline-offset-2 font-medium ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
              RFQ management for export companies
            </a>{' '}·{' '}
            <a href="https://rfqautopilot.com/procurement-chrome-extension" className={`underline underline-offset-2 font-medium ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
              Procurement Chrome extension
            </a>
          </p>
        </div>

        {/* Integration row */}
        <div className={`scroll-animate rounded-2xl p-8 border text-center ${
          darkMode ? 'border-white/8 bg-white/3' : 'border-gray-100 bg-gray-50'
        }`}>
          <p className={`text-sm font-semibold mb-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Works seamlessly with your existing tools
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {['Gmail', 'Outlook', 'SAP', 'NetSuite', 'Epicor', 'E2 Shop', 'JobBOSS', 'Salesforce', 'HubSpot', 'Paperless Parts'].map((tool) => (
              <span key={tool} className={`px-4 py-2 rounded-lg text-xs font-semibold border transition-colors ${
                darkMode ? 'border-white/10 bg-white/5 text-gray-400 hover:border-blue-500/30 hover:text-blue-300' : 'border-gray-200 bg-white text-gray-500 hover:border-blue-200 hover:text-blue-600'
              }`}>
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl text-base font-bold text-white gradient-brand btn-glow shadow-xl shadow-blue-500/20"
          >
            Explore All Features — Add to Chrome Free
          </a>
        </div>
      </div>
    </section>
  );
}
