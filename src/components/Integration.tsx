interface IntegrationProps {
  darkMode: boolean;
}

const integrations = [
  {
    category: '📧 Email Platforms',
    desc: 'Works entirely inside the tools your team already uses every day.',
    items: ['Gmail (personal & Google Workspace)', 'Outlook Web (Microsoft 365)', 'Shared team inboxes (sales@, quotes@, rfq@)', 'Delegated and alias-based accounts'],
  },
  {
    category: '📊 ERP Systems',
    desc: 'Export structured data directly into your ERP — no manual re-entry.',
    items: ['SAP', 'Oracle NetSuite', 'Epicor', 'JobBOSS / ECI', 'E2 Shop System', 'ProShop', 'IQMS / DELMIAworks', 'Fishbowl', 'Microsoft Dynamics'],
  },
  {
    category: '🗂️ CRM Systems',
    desc: 'Keep your sales pipeline automatically updated with RFQ data.',
    items: ['Salesforce — Import as opportunities', 'HubSpot — Create deals from RFQ data', 'Zoho CRM — Sync quote activities', 'Pipedrive — Track RFQ-to-quote conversion', 'Custom CRM — CSV export'],
  },
  {
    category: '🔒 Security & Compliance',
    desc: 'Enterprise-grade security for confidential manufacturing data.',
    items: ['TLS 1.3 encryption in transit', 'AES-256 encryption at rest', 'SOC 2 Type II certified', 'GDPR compliant', 'No permanent email storage', 'No third-party data sharing — ever'],
  },
];

export default function Integration({ darkMode }: IntegrationProps) {
  return (
    <section className={`py-24 lg:py-32 ${darkMode ? 'bg-[#060b24]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="scroll-animate text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border mb-6 ${
            darkMode ? 'border-blue-500/30 bg-blue-500/10 text-blue-300' : 'border-blue-200 bg-blue-50 text-blue-700'
          }`}>
            Integrations
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-gray-950'}`}>
            Fits Into Your Workflow —{' '}
            <span className={darkMode ? 'gradient-text-light' : 'gradient-text'}>Doesn't Replace It</span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            No 6-month implementation. No IT project. No new platform to learn. Whether you're a{' '}
            <a href="https://rfqautopilot.com/rfq-software-small-business" className={`underline underline-offset-2 transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
              small business
            </a>
            {' '}or a large{' '}
            <a href="https://rfqautopilot.com/rfq-management-for-export-companies" className={`underline underline-offset-2 transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
              export company
            </a>
            , RFQ AutoPilot plugs into the tools you already use and makes them smarter.
          </p>
        </div>

        {/* Integration grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {integrations.map((intg, i) => (
            <div
              key={i}
              className={`scroll-animate scroll-animate-delay-${i + 1} card-3d rounded-2xl p-7 border transition-all duration-300 ${
                darkMode
                  ? 'bg-white/3 border-white/8 hover:border-blue-500/20'
                  : 'bg-white border-gray-100 shadow-sm hover:shadow-lg hover:shadow-blue-50'
              }`}
            >
              <h3 className={`text-base font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{intg.category}</h3>
              <p className={`text-sm mb-5 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{intg.desc}</p>
              <div className="flex flex-wrap gap-2">
                {intg.items.map((item) => (
                  <span
                    key={item}
                    className={`text-xs px-3 py-1.5 rounded-lg font-medium border transition-colors ${
                      darkMode ? 'border-white/10 bg-white/5 text-gray-400 hover:border-blue-500/30 hover:text-blue-300' : 'border-gray-100 bg-gray-50 text-gray-600 hover:border-blue-200 hover:text-blue-600'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Setup time callout */}
        <div className={`scroll-animate rounded-2xl p-8 border ${darkMode ? 'border-green-500/20 bg-green-500/5' : 'border-green-100 bg-green-50/50'}`}>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className={`w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center text-2xl shrink-0 shadow-lg shadow-blue-500/25`}>
              ⚡
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className={`text-lg font-extrabold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                From install to first RFQ detected: under 60 seconds
              </h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                No IT infrastructure changes. No server installations. No lengthy implementation projects. Install the Chrome Extension, connect your email, and RFQ AutoPilot starts working immediately. Most manufacturing teams are fully operational within one business day.
              </p>
            </div>
            <a
              href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white gradient-brand btn-glow shadow-lg shadow-blue-500/20"
            >
              Install Free →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
