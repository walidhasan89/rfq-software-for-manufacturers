import { useState } from 'react';

interface FAQProps {
  darkMode: boolean;
}

interface FAQItem {
  q: string;
  a: React.ReactNode;
}

const buildFaqs = (darkMode: boolean): FAQItem[] => [
  {
    q: 'What is RFQ software for manufacturers?',
    a: (
      <>
        <a href="https://rfqautopilot.com/rfq-software-for-manufacturers" className={`underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>RFQ software for manufacturers</a> is a specialized tool designed to streamline how manufacturing companies receive, process, and respond to Requests for Quotation. In manufacturing, RFQs are uniquely complex — they involve technical drawings, <a href="https://en.wikipedia.org/wiki/Bill_of_materials" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>Bills of Material</a> with dozens or hundreds of line items, material specifications, tolerance requirements, quality certifications, and tight response deadlines. RFQ AutoPilot is an <a href="https://rfqautopilot.com/ai-rfq-processing-tool" className={`underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>AI-powered RFQ processing tool</a> built specifically for manufacturing workflows that works as a Chrome Extension inside Gmail and Outlook — no separate enterprise platform required.
      </>
    ),
  },
  {
    q: 'How does RFQ AutoPilot extract data from manufacturing PDFs and technical drawings?',
    a: (
      <>
        Our <a href="https://rfqautopilot.com/rfq-data-extraction-from-pdf" className={`underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>RFQ data extraction from PDF</a> uses advanced OCR, natural language processing, and manufacturing-specific pattern recognition. The extraction engine is trained on thousands of manufacturing document types — specification sheets, RFQ forms, procurement templates, and PDF exports of technical drawings. It extracts part numbers, material callouts (e.g., "6061-T6 Aluminum," "304 Stainless Steel"), quantities, tolerance requirements, surface finish callouts, certification requirements, delivery dates, and commercial terms. Extraction accuracy ranges from 94–98% on standard manufacturing documents.
      </>
    ),
  },
  {
    q: 'Can RFQ AutoPilot parse multi-level Bills of Material (BOMs)?',
    a: (
      <>
        Yes. RFQ AutoPilot's BOM parsing engine handles both flat BOMs (single-level component lists) and multi-level <a href="https://en.wikipedia.org/wiki/Bill_of_materials" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>Bills of Material</a> (assemblies containing sub-assemblies and components). It correctly reads parent-child relationships, indentation structures, and level indicators. The engine processes BOMs with 10 line items or 500+ and supports Excel (.xlsx, .csv), PDF, and Word document formats. Parsed BOM data is exportable to your ERP system's import format with one click.
      </>
    ),
  },
  {
    q: 'Does RFQ AutoPilot work with my ERP system?',
    a: (
      <>
        RFQ AutoPilot exports extracted data in CSV and Excel formats compatible with virtually every ERP system used in manufacturing, including SAP, Oracle NetSuite, Epicor, JobBOSS (ECI), IQMS/DELMIAworks, E2 Shop System, ProShop, Fishbowl, Sage, and Microsoft Dynamics. On the Pro plan, API access enables direct integration for automated data transfer. Learn more about our <a href="https://rfqautopilot.com/rfq-automation-software" className={`underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>RFQ automation software</a> and ERP integrations.
      </>
    ),
  },
  {
    q: 'How does RFQ AutoPilot handle quality certification requirements in RFQs?',
    a: (
      <>
        RFQ AutoPilot's extraction engine detects quality certification and compliance requirements mentioned in RFQ emails and attached documents. It recognizes references to <a href="https://www.iso.org/iso-9001-quality-management.html" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>ISO 9001</a>, <a href="https://www.sae.org/standards/content/as9100d/" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>AS9100</a> (aerospace), <a href="https://www.iatfglobaloversight.org/" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>IATF 16949</a> (automotive), NADCAP, ISO 13485, RoHS/REACH, DFARS/ITAR, and First Article Inspection requirements. Detected certifications are flagged in the extraction preview so your quality team can verify compliance before quoting.
      </>
    ),
  },
  {
    q: 'Is RFQ AutoPilot suitable for small job shops with only 1–2 people handling quotes?',
    a: (
      <>
        Absolutely. RFQ AutoPilot is ideal <a href="https://rfqautopilot.com/rfq-software-small-business" className={`underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>RFQ software for small businesses</a> and owner-operators. The free plan supports 30 RFQs per month, covering most small shops. The Solo plan at $14.99/month handles 300 RFQs — more than enough for shops processing 50–60 per week. With AI-generated quotes and automated data extraction, what used to take an hour per RFQ now takes 10 minutes. See resources for <a href="https://www.nist.gov/mep" target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>small and medium manufacturers</a> from NIST MEP.
      </>
    ),
  },
  {
    q: 'How is RFQ AutoPilot different from dedicated quoting software like Paperless Parts or Quoter?',
    a: (
      <>
        Dedicated quoting platforms focus on cost estimation and pricing — they help you calculate machining times, material costs, and labor hours. They do not typically handle RFQ email detection, email-based data extraction, or inbox management. RFQ AutoPilot is an <a href="https://rfqautopilot.com/ai-rfq-generator" className={`underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>AI RFQ generator</a> that focuses on the front end: detecting RFQ emails, extracting data from attachments, and organizing your pipeline. It feeds clean data into your quoting process — many manufacturers use both tools in combination.
      </>
    ),
  },
  {
    q: 'Can RFQ AutoPilot handle RFQs for different manufacturing processes (CNC, sheet metal, injection molding, etc.)?',
    a: (
      <>
        Yes. RFQ AutoPilot's extraction engine and quote templates support all major manufacturing process types: CNC machining, sheet metal fabrication, injection molding, die casting, 3D printing, electronics assembly (PCB/PCBA), cable and harness assembly, welding, surface treatment, and general mechanical assembly. It's also ideal for <a href="https://rfqautopilot.com/rfq-software-for-distributors" className={`underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>distributors</a> and <a href="https://rfqautopilot.com/rfq-management-for-export-companies" className={`underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>export companies</a> managing high-volume RFQ workflows.
      </>
    ),
  },
  {
    q: 'Does RFQ AutoPilot support ITAR-controlled or classified manufacturing RFQs?',
    a: (
      <>
        RFQ AutoPilot's standard cloud processing is hosted on U.S.-based servers with SOC 2 Type II certification and AES-256 encryption. For ITAR-registered manufacturers handling controlled technical data, our Enterprise plan offers enhanced security options including U.S.-only data processing guarantees, additional access controls, and compliance documentation for your ITAR security plan. RFQ AutoPilot never stores email content permanently and never shares data with third parties.
      </>
    ),
  },
  {
    q: "What's the typical payback period for a manufacturing company using RFQ AutoPilot?",
    a: (
      <>
        Based on user data, the typical payback period for RFQ AutoPilot is 1–5 business days. A manufacturer processing 50 RFQs per week saves approximately 282 hours per month in labor — valued at ~$9,870/month at $35/hour fully-loaded. The Pro plan costs $300/year. The labor savings alone deliver a 150x+ annual ROI. This is why RFQ AutoPilot is recognized as the leading <a href="https://rfqautopilot.com/quotation-email-automation" className={`underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>quotation email automation</a> tool for manufacturing teams.
      </>
    ),
  },
  {
    q: 'Can my entire quoting team use RFQ AutoPilot?',
    a: (
      <>
        Yes. The Pro plan supports multi-user access, allowing your entire quoting team to connect their individual <a href="https://rfqautopilot.com/gmail-chrome-extension-for-sales" className={`underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>Gmail</a> or <a href="https://rfqautopilot.com/outlook-add-in-for-rfq" className={`underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>Outlook</a> accounts to a shared RFQ AutoPilot environment. Team features include shared RFQ pipeline visibility, RFQ assignment to specific estimators, shared quotation templates for consistent branding, team performance analytics, and collaborative notes on individual RFQs.
      </>
    ),
  },
  {
    q: 'How long does it take to set up RFQ AutoPilot for a manufacturing team?',
    a: (
      <>
        Individual setup takes under 60 seconds — install this <a href="https://rfqautopilot.com/procurement-chrome-extension" className={`underline underline-offset-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>procurement Chrome extension</a>, connect your email account, and RFQ AutoPilot starts detecting RFQs immediately. For team deployment, allow 30–60 minutes to set up shared templates and connect team members' accounts. Pro plan users receive a dedicated onboarding session. No IT infrastructure changes, no server installations, and no lengthy implementation projects.
      </>
    ),
  },
];

export default function FAQ({ darkMode }: FAQProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));

  const faqs = buildFaqs(darkMode);

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section id="faq" className={`py-24 lg:py-32 ${darkMode ? 'bg-[#080c28]' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border mb-6 ${
            darkMode ? 'border-blue-500/30 bg-blue-500/10 text-blue-300' : 'border-blue-200 bg-blue-50 text-blue-700'
          }`}>
            FAQ
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-gray-950'}`}>
            Frequently Asked Questions
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Everything manufacturing teams ask before installing RFQ AutoPilot.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openItems.has(i);
            return (
              <div
                key={i}
                style={{
                  borderRadius: '16px',
                  border: isOpen
                    ? darkMode ? '1px solid rgba(59,130,246,0.35)' : '1px solid #bfdbfe'
                    : darkMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #f3f4f6',
                  background: isOpen
                    ? darkMode ? 'rgba(30,58,138,0.25)' : 'rgba(239,246,255,0.8)'
                    : darkMode ? 'rgba(255,255,255,0.03)' : '#ffffff',
                  boxShadow: isOpen
                    ? darkMode ? '0 0 0 1px rgba(59,130,246,0.1)' : '0 1px 8px rgba(59,130,246,0.08)'
                    : darkMode ? 'none' : '0 1px 3px rgba(0,0,0,0.04)',
                }}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleItem(i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '20px 24px',
                    textAlign: 'left',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    lineHeight: '1.5',
                    paddingRight: '16px',
                    color: darkMode ? '#ffffff' : '#111827',
                    flex: 1,
                  }}>
                    {faq.q}
                  </span>
                  <span style={{
                    flexShrink: 0,
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: isOpen ? '#2563eb' : darkMode ? 'rgba(255,255,255,0.1)' : '#f3f4f6',
                    color: isOpen ? '#ffffff' : darkMode ? '#9ca3af' : '#6b7280',
                    fontSize: '18px',
                    fontWeight: 300,
                    lineHeight: 1,
                    userSelect: 'none',
                  }}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {/* Answer — only in DOM when open, no CSS transitions */}
                {isOpen && (
                  <div style={{
                    padding: '0 24px 20px 24px',
                    borderTop: darkMode ? '1px solid rgba(59,130,246,0.2)' : '1px solid #dbeafe',
                    paddingTop: '16px',
                    marginTop: 0,
                  }}>
                    <div style={{
                      paddingTop: '16px',
                      fontSize: '14px',
                      lineHeight: '1.75',
                      color: darkMode ? '#cbd5e1' : '#4b5563',
                    }}>
                      {faq.a}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div style={{
          marginTop: '48px',
          borderRadius: '16px',
          border: darkMode ? '1px solid rgba(255,255,255,0.08)' : '1px solid #f3f4f6',
          background: darkMode ? 'rgba(255,255,255,0.03)' : '#ffffff',
          boxShadow: darkMode ? 'none' : '0 1px 3px rgba(0,0,0,0.04)',
          padding: '28px',
          textAlign: 'center',
        }}>
          <p style={{ fontWeight: 600, marginBottom: '8px', color: darkMode ? '#ffffff' : '#111827' }}>
            Still have questions?
          </p>
          <p style={{ fontSize: '14px', marginBottom: '16px', color: darkMode ? '#9ca3af' : '#6b7280' }}>
            Our manufacturing solutions team is here to help.
          </p>
          <a
            href="mailto:support@rfqautopilot.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: 600,
              border: darkMode ? '1px solid rgba(59,130,246,0.3)' : '1px solid #bfdbfe',
              color: darkMode ? '#93c5fd' : '#2563eb',
              background: darkMode ? 'rgba(59,130,246,0.08)' : '#eff6ff',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            support@rfqautopilot.com
          </a>
        </div>

      </div>
    </section>
  );
}
