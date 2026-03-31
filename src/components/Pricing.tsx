import { useState } from 'react';

interface PricingProps {
  darkMode: boolean;
}

const CHROME_EXT_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

const plans = [
  {
    name: 'Free',
    icon: '🆓',
    monthlyPrice: 0,
    yearlyPrice: 0,
    tagline: 'Perfect for small job shops getting started with RFQ automation.',
    ctaLabel: 'Add to Chrome — Free Forever',
    ctaStyle: 'secondary',
    highlight: false,
    badge: null,
    features: [
      { text: '30 RFQs detected & processed per month', ok: true },
      { text: '10 AI Credits for quote generation', ok: true },
      { text: 'Basic RFQ email detection', ok: true },
      { text: '1 manufacturing quote template', ok: true },
      { text: 'Basic analytics dashboard', ok: true },
      { text: 'Gmail & Outlook support', ok: true },
      { text: 'Custom templates', ok: false },
      { text: 'BOM parsing (max 10 line items)', ok: false },
      { text: 'Priority support', ok: false },
    ],
  },
  {
    name: 'Solo',
    icon: '🚀',
    monthlyPrice: 14.99,
    yearlyPrice: 149,
    tagline: 'Ideal for shops with 1–2 estimators processing moderate RFQ volume.',
    ctaLabel: 'Get Started with Solo',
    ctaStyle: 'primary',
    highlight: false,
    badge: 'Most Popular',
    features: [
      { text: '300 RFQs per month', ok: true },
      { text: '100 AI Credits', ok: true },
      { text: '200 data exports/month — ERP-ready CSV & Excel', ok: true },
      { text: 'Advanced multi-signal RFQ detection', ok: true },
      { text: 'Full BOM parsing — unlimited line items', ok: true },
      { text: '5 saved custom quote templates', ok: true },
      { text: 'Material & specification detection', ok: true },
      { text: 'Certification & compliance flagging', ok: true },
      { text: 'Deadline alerts & follow-up reminders', ok: true },
      { text: 'Email & live chat support', ok: true },
    ],
  },
  {
    name: 'Pro',
    icon: '💎',
    monthlyPrice: 29.99,
    yearlyPrice: 299,
    tagline: 'For quoting teams, multi-estimator operations, and high-volume manufacturers.',
    ctaLabel: 'Get Started with Pro',
    ctaStyle: 'gradient',
    highlight: true,
    badge: 'Best for Teams',
    features: [
      { text: 'Unlimited RFQs', ok: true },
      { text: '300 AI Credits', ok: true },
      { text: 'Unlimited data exports — CSV, Excel & API', ok: true },
      { text: 'Unlimited saved quote templates', ok: true },
      { text: 'Full BOM parsing with multi-level structure', ok: true },
      { text: 'Advanced material & spec extraction', ok: true },
      { text: 'Team dashboard — multi-user access', ok: true },
      { text: 'RFQ assignment & ownership tracking', ok: true },
      { text: 'Quote version control & revision history', ok: true },
      { text: 'API access for ERP & CRM integration', ok: true },
      { text: 'Priority support — under 4-hour response', ok: true },
      { text: 'Dedicated onboarding session', ok: true },
    ],
  },
];

export default function Pricing({ darkMode }: PricingProps) {
  const [isYearly, setIsYearly] = useState(false);

  const getDisplayPrice = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === 0) return { main: '0', sub: 'forever free' };
    if (isYearly) {
      const perMonth = (plan.yearlyPrice / 12).toFixed(2);
      return { main: perMonth, sub: `$${plan.yearlyPrice}/year` };
    }
    return { main: plan.monthlyPrice.toFixed(2), sub: 'per month' };
  };

  const getSaving = (plan: typeof plans[0]) => {
    if (plan.monthlyPrice === 0) return null;
    const saving = (plan.monthlyPrice * 12 - plan.yearlyPrice).toFixed(0);
    return `Save $${saving}/yr`;
  };

  return (
    <section id="pricing" className={`py-24 lg:py-32 relative overflow-hidden ${darkMode ? 'bg-[#080c28]' : 'bg-gray-50'}`}>
      {/* Subtle orb */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`glow-orb w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2 ${darkMode ? 'bg-blue-600' : 'bg-blue-300'}`}
          style={{ opacity: darkMode ? 0.06 : 0.04 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="scroll-animate text-center mb-14">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border mb-6 ${
            darkMode ? 'border-blue-500/30 bg-blue-500/10 text-blue-300' : 'border-blue-200 bg-blue-50 text-blue-700'
          }`}>
            Pricing
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-5 ${darkMode ? 'text-white' : 'text-gray-950'}`}>
            Simple Pricing Built for{' '}
            <span className={darkMode ? 'gradient-text-light' : 'gradient-text'}>Manufacturers</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Start free — no credit card required. Upgrade as your quoting volume grows. No contracts, no setup fees, cancel anytime.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-semibold transition-colors ${!isYearly ? (darkMode ? 'text-white' : 'text-gray-900') : (darkMode ? 'text-gray-500' : 'text-gray-400')}`}>
            Monthly
          </span>

          {/* Toggle */}
          <button
            role="switch"
            aria-checked={isYearly}
            onClick={() => setIsYearly(v => !v)}
            className={`relative inline-flex h-8 w-16 items-center rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
              isYearly ? 'gradient-brand shadow-lg shadow-blue-500/30' : (darkMode ? 'bg-white/10' : 'bg-gray-300')
            }`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
                isYearly ? 'translate-x-9' : 'translate-x-1'
              }`}
            />
          </button>

          <div className="flex items-center gap-2">
            <span className={`text-sm font-semibold transition-colors ${isYearly ? (darkMode ? 'text-white' : 'text-gray-900') : (darkMode ? 'text-gray-500' : 'text-gray-400')}`}>
              Yearly
            </span>
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
              darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
            }`}>
              Save up to 17%
            </span>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {plans.map((plan, i) => {
            const price = getDisplayPrice(plan);
            const saving = getSaving(plan);
            const isHighlighted = plan.highlight;

            return (
              <div
                key={plan.name}
                className={`scroll-animate scroll-animate-delay-${i + 1} relative flex flex-col rounded-3xl transition-all duration-300 ${
                  isHighlighted
                    ? 'lg:-mt-4 lg:mb-4'
                    : ''
                }`}
              >
                {/* Gradient border wrapper for Pro */}
                {isHighlighted && (
                  <div className="absolute inset-0 rounded-3xl gradient-brand opacity-70 blur-[1px]" style={{ zIndex: -1 }} />
                )}

                <div className={`relative flex flex-col h-full rounded-3xl overflow-hidden ${
                  isHighlighted
                    ? darkMode
                      ? 'bg-[#0c1235] border-2 border-blue-500/60 shadow-2xl shadow-blue-500/20'
                      : 'bg-white border-2 border-blue-500/50 shadow-2xl shadow-blue-500/15'
                    : darkMode
                      ? 'bg-[#0d1240]/60 border border-white/10 hover:border-white/20 shadow-lg'
                      : 'bg-white border border-gray-200 hover:border-blue-200 shadow-sm hover:shadow-md'
                } transition-all duration-300`}>

                  {/* Badge ribbon */}
                  {plan.badge && (
                    <div className={`absolute top-0 right-0 rounded-bl-2xl rounded-tr-3xl px-4 py-1.5 text-xs font-bold ${
                      isHighlighted
                        ? 'gradient-brand text-white'
                        : darkMode ? 'bg-amber-500/20 text-amber-300' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {plan.badge}
                    </div>
                  )}

                  {/* Card top */}
                  <div className="p-8 pb-6">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-3xl">{plan.icon}</span>
                      <h3 className={`text-xl font-extrabold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {plan.name}
                      </h3>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-end gap-1">
                        <span className={`text-lg font-bold ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>$</span>
                        <span className={`text-5xl font-extrabold tracking-tight leading-none ${darkMode ? 'text-white' : 'text-gray-950'}`}>
                          {price.main}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                          {price.sub}
                        </span>
                        {isYearly && saving && (
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'
                          }`}>
                            {saving}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className={`mx-8 h-px ${darkMode ? 'bg-white/8' : 'bg-gray-100'}`} />

                  {/* Features */}
                  <div className="p-8 pt-6 flex-1">
                    <ul className="space-y-3.5">
                      {plan.features.map((feat, j) => (
                        <li key={j} className={`flex items-start gap-3 text-sm ${
                          feat.ok
                            ? darkMode ? 'text-gray-300' : 'text-gray-700'
                            : darkMode ? 'text-gray-600' : 'text-gray-300'
                        }`}>
                          {feat.ok ? (
                            <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                              isHighlighted
                                ? 'bg-blue-500/20 text-blue-400'
                                : darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'
                            }`}>
                              <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="none">
                                <path d="M1.5 5L4 7.5L8.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                          ) : (
                            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gray-100/5">
                              <svg className="w-2.5 h-2.5 text-gray-500" viewBox="0 0 10 10" fill="none">
                                <path d="M2.5 2.5L7.5 7.5M7.5 2.5L2.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                              </svg>
                            </span>
                          )}
                          <span>{feat.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="px-8 pb-8">
                    <a
                      href={CHROME_EXT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-bold transition-all duration-200 ${
                        plan.ctaStyle === 'gradient'
                          ? 'gradient-brand text-white btn-glow shadow-lg shadow-blue-500/20 hover:opacity-90'
                          : plan.ctaStyle === 'primary'
                            ? darkMode
                              ? 'bg-white/10 text-white hover:bg-white/15 border border-white/10'
                              : 'bg-gray-900 text-white hover:bg-gray-800'
                            : darkMode
                              ? 'border border-white/15 text-gray-300 hover:bg-white/5'
                              : 'border border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                      </svg>
                      {plan.ctaLabel}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise row */}
        <div className={`scroll-animate rounded-2xl p-7 border flex flex-col sm:flex-row items-center gap-6 mb-10 ${
          darkMode ? 'border-white/10 bg-white/3' : 'border-gray-200 bg-white shadow-sm'
        }`}>
          <div className="text-3xl shrink-0">🏢</div>
          <div className="flex-1 text-center sm:text-left">
            <div className={`font-bold text-base mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Large manufacturing operation?
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Multiple facilities, ITAR requirements, or 10+ estimators? We offer custom enterprise plans with SSO, on-premise data processing, custom ERP integrations, and dedicated account management.
            </p>
          </div>
          <a
            href="mailto:support@rfqautopilot.com?subject=Enterprise Plan Inquiry"
            className={`shrink-0 px-5 py-3 rounded-xl text-sm font-bold border transition-all duration-200 whitespace-nowrap ${
              darkMode
                ? 'border-blue-500/40 text-blue-300 hover:bg-blue-500/10'
                : 'border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100'
            }`}
          >
            Talk to Our Team →
          </a>
        </div>

        {/* Bottom trust row */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {[
            { icon: '💳', text: 'Secure billing via Stripe' },
            { icon: '📅', text: 'No contracts — cancel anytime' },
            { icon: '🔒', text: 'Enterprise-grade security' },
            { icon: '🆓', text: 'No credit card to start' },
          ].map(item => (
            <div key={item.text} className={`flex items-center gap-2 text-xs font-medium ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
