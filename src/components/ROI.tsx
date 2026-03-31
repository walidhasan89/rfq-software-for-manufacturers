interface ROIProps {
  darkMode: boolean;
}

export default function ROI({ darkMode }: ROIProps) {
  const timeData = [
    { stage: 'Identify RFQ in inbox', manual: '5–15 min', auto: '0 min', saved: '5–15 min' },
    { stage: 'Download & open attachments', manual: '3–5 min', auto: '0 min', saved: '3–5 min' },
    { stage: 'Read specs & extract data', manual: '20–60 min', auto: '0.5–2 min', saved: '19–58 min' },
    { stage: 'Enter data into ERP/spreadsheet', manual: '15–30 min', auto: '1–3 min', saved: '14–27 min' },
    { stage: 'Draft quotation document', manual: '20–45 min', auto: '3–8 min', saved: '17–37 min' },
    { stage: 'Format & send quote email', manual: '5–10 min', auto: '1–2 min', saved: '4–8 min' },
  ];

  const volumeData = [
    { vol: '20 RFQs/week', manual: '33 hrs', auto: '5 hrs', saved: '28 hrs', monthly: '112 hrs', value: '$3,920/mo', annual: '$47,040' },
    { vol: '50 RFQs/week', manual: '83 hrs', auto: '12.5 hrs', saved: '70.5 hrs', monthly: '282 hrs', value: '$9,870/mo', annual: '$118,440' },
    { vol: '100 RFQs/week', manual: '167 hrs', auto: '25 hrs', saved: '142 hrs', monthly: '568 hrs', value: '$19,880/mo', annual: '$238,560' },
  ];

  const summaryStats = [
    { label: 'Time saved per RFQ', value: '60+ min' },
    { label: 'Monthly time saved (50 RFQs/wk)', value: '282 hrs' },
    { label: 'Annual labor cost savings', value: '$118K+' },
    { label: 'Additional revenue from faster response', value: '$100K+/mo' },
    { label: 'Error-related cost reduction', value: '$500K/yr' },
    { label: 'RFQ AutoPilot cost (Pro)', value: '$300/yr' },
  ];

  return (
    <section className={`py-24 lg:py-32 ${darkMode ? 'bg-[#080c28]' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="scroll-animate text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border mb-6 ${
            darkMode ? 'border-green-500/30 bg-green-500/10 text-green-300' : 'border-green-200 bg-green-50 text-green-700'
          }`}>
            ROI Calculator
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-gray-950'}`}>
            The Real ROI of{' '}
            <span className={darkMode ? 'gradient-text-light' : 'gradient-text'}>RFQ Automation</span>
            {' '}— Do the Math
          </h2>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Manufacturing executives make decisions based on numbers, not marketing promises. Here's a transparent calculation of what RFQ AutoPilot saves a typical manufacturing operation.
          </p>
        </div>

        {/* Time saved table */}
        <div className={`scroll-animate rounded-2xl border overflow-hidden mb-8 ${darkMode ? 'border-white/8' : 'border-gray-200 shadow-sm'}`}>
          <div className={`px-6 py-4 border-b ${darkMode ? 'bg-white/5 border-white/8' : 'bg-gray-50 border-gray-100'}`}>
            <h3 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>⏱ Time Saved Per RFQ</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={darkMode ? 'bg-white/3' : 'bg-gray-50/80'}>
                  {['Processing Stage', 'Manual Time', 'With RFQ AutoPilot', 'Time Saved'].map(h => (
                    <th key={h} className={`px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b ${darkMode ? 'border-white/8 text-gray-500' : 'border-gray-100 text-gray-400'}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeData.map((row, i) => (
                  <tr key={i} className={`border-b transition-colors ${darkMode ? 'border-white/5 hover:bg-white/3' : 'border-gray-50 hover:bg-blue-50/30'}`}>
                    <td className={`px-5 py-3.5 font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>{row.stage}</td>
                    <td className={`px-5 py-3.5 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>{row.manual}</td>
                    <td className={`px-5 py-3.5 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>{row.auto}</td>
                    <td className={`px-5 py-3.5 font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>{row.saved}</td>
                  </tr>
                ))}
                <tr className={`${darkMode ? 'bg-blue-500/10' : 'bg-blue-50'}`}>
                  <td className={`px-5 py-4 font-extrabold ${darkMode ? 'text-white' : 'text-gray-900'}`}>TOTAL PER RFQ</td>
                  <td className={`px-5 py-4 font-bold ${darkMode ? 'text-red-400' : 'text-red-600'}`}>68–165 min</td>
                  <td className={`px-5 py-4 font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>5.5–15 min</td>
                  <td className={`px-5 py-4 font-extrabold ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>62–150 min saved</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Volume impact */}
        <div className={`scroll-animate rounded-2xl border overflow-hidden mb-8 ${darkMode ? 'border-white/8' : 'border-gray-200 shadow-sm'}`}>
          <div className={`px-6 py-4 border-b ${darkMode ? 'bg-white/5 border-white/8' : 'bg-gray-50 border-gray-100'}`}>
            <h3 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>💰 Dollar Value of Time Saved ($35/hr fully-loaded estimator cost)</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={darkMode ? 'bg-white/3' : 'bg-gray-50/80'}>
                  {['RFQ Volume', 'Manual Hrs/Wk', 'With AutoPilot', 'Hrs Saved/Mo', 'Monthly Value', 'Annual Value'].map(h => (
                    <th key={h} className={`px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider border-b ${darkMode ? 'border-white/8 text-gray-500' : 'border-gray-100 text-gray-400'}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {volumeData.map((row, i) => (
                  <tr key={i} className={`border-b transition-colors ${i === 1 ? (darkMode ? 'bg-blue-500/8' : 'bg-blue-50/50') : ''} ${darkMode ? 'border-white/5 hover:bg-white/3' : 'border-gray-50 hover:bg-blue-50/30'}`}>
                    <td className={`px-5 py-3.5 font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                      {row.vol}
                      {i === 1 && <span className={`ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded ${darkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>Most common</span>}
                    </td>
                    <td className={`px-5 py-3.5 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>{row.manual}</td>
                    <td className={`px-5 py-3.5 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>{row.auto}</td>
                    <td className={`px-5 py-3.5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{row.monthly}</td>
                    <td className={`px-5 py-3.5 font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>{row.value}</td>
                    <td className={`px-5 py-3.5 font-extrabold ${darkMode ? 'text-green-300' : 'text-green-700'}`}>{row.annual}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ROI summary */}
        <div className="scroll-animate grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {summaryStats.map((stat, i) => (
            <div key={i} className={`rounded-xl p-4 border text-center ${
              darkMode ? 'border-white/8 bg-white/5' : 'border-gray-100 bg-white shadow-sm'
            }`}>
              <div className={`text-xl font-extrabold mb-1 ${i === 5 ? (darkMode ? 'text-green-400' : 'text-green-600') : (darkMode ? 'gradient-text-light' : 'gradient-text')}`}
                style={{backgroundClip: 'text', WebkitBackgroundClip: 'text'}}
              >
                {stat.value}
              </div>
              <div className={`text-xs leading-tight ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Payback banner */}
        <div className={`scroll-animate rounded-2xl p-8 text-center relative overflow-hidden ${darkMode ? 'bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/20' : 'bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100'}`}>
          <div className="relative z-10">
            <div className={`text-5xl font-extrabold mb-3 ${darkMode ? 'text-white' : 'text-gray-950'}`}>
              Payback in{' '}
              <span className={darkMode ? 'gradient-text-light' : 'gradient-text'}>1–3 Business Days</span>
            </div>
            <p className={`text-base max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              RFQ AutoPilot Pro plan: $300/year. Even at the lowest RFQ volume, that's a{' '}
              <strong className={darkMode ? 'text-white' : 'text-gray-900'}>156x return on investment</strong>.
              A single won contract pays for years of usage.
            </p>
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
            Start Saving 60+ Minutes Per RFQ — Add to Chrome Free
          </a>
        </div>
      </div>
    </section>
  );
}
