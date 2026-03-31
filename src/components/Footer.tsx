interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const currentYear = 2026;

  return (
    <footer className={`border-t ${darkMode ? 'bg-[#04071a] border-white/8' : 'bg-gray-950 border-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2.5 mb-4">
              <img src="https://rfqautopilot.com/asset/logo.png" alt="RFQ AutoPilot" className="h-8 w-8 rounded-lg object-contain" />
              <span className="font-bold text-base text-white">RFQ <span className="gradient-text">AutoPilot</span></span>
            </a>
            <p className="text-sm leading-relaxed text-gray-500 mb-4">
              AI-powered RFQ software for B2B manufacturers. Automate quote requests inside Gmail & Outlook.
            </p>
            <a href="mailto:support@rfqautopilot.com" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
              support@rfqautopilot.com
            </a>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-5">Product</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'FAQs', href: '#faq' },
                { label: 'Blog', href: '#' },
                { label: 'Contact', href: 'mailto:support@rfqautopilot.com' },
              ].map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-5">Our Products</h4>
            <ul className="space-y-4">
              {[
                {
                  name: 'ReplyChief',
                  desc: 'LinkedIn AI Co-pilot',
                  href: 'https://chromewebstore.google.com/detail/replychief-linkedin-ai-co/fmigngdcmjgeojnnocphdnkdlkfeiiig',
                  icon: '💼',
                  badge: 'LinkedIn',
                },
                {
                  name: 'AdminPalette',
                  desc: 'Shopify Admin Tool',
                  href: 'https://chromewebstore.google.com/detail/adminpalette-%E2%80%93-shopify-ad/ehfhphcdkjoljabigbddilfjbcbcjilf?utm_source=item-share-cb',
                  icon: '🛒',
                  badge: 'Shopify',
                },
                {
                  name: 'RFQ AutoPilot',
                  desc: 'Manufacturing RFQ Tool',
                  href: 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl',
                  icon: '🏭',
                  badge: 'You are here',
                  active: true,
                },
              ].map(product => (
                <li key={product.name}>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 ${
                      product.active
                        ? 'border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/15'
                        : 'border-white/5 hover:border-white/15 hover:bg-white/5'
                    }`}
                  >
                    <span className="text-xl">{product.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-semibold truncate ${product.active ? 'text-blue-300' : 'text-gray-300 group-hover:text-white'}`}>{product.name}</span>
                        {product.active && <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 shrink-0">Active</span>}
                      </div>
                      <div className="text-xs text-gray-600 truncate">{product.desc}</div>
                    </div>
                    <svg className="w-3.5 h-3.5 text-gray-600 group-hover:text-gray-400 shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-5">Legal</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Use', 'Disclaimer'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-5">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:support@rfqautopilot.com" className="text-sm text-gray-500 hover:text-white transition-colors">
                  support@rfqautopilot.com
                </a>
              </li>
              <li>
                <a href="https://walidhasan.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-white transition-colors">
                  Author
                </a>
              </li>
              <li>
                <a href="https://inoviqa.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-white transition-colors">
                  About Inoviqa
                </a>
              </li>
            </ul>


          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-sm text-gray-600">
            © {currentYear} RFQ AutoPilot. A Product of{' '}
            <a href="https://inoviqa.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors font-medium">
              Inoviqa
            </a>
          </div>
          <a
            href="https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white gradient-brand btn-glow shadow-lg shadow-blue-500/20 transition-all duration-200"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
            </svg>
            Add to Chrome — It's Free
          </a>
        </div>
      </div>
    </footer>
  );
}
