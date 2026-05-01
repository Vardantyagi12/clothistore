import React from 'react'

function Footer() {
  const quickLinks = ['Home', 'Shop', 'New Arrivals', 'Best Sellers']
  const supportLinks = ['FAQ', 'Shipping', 'Return', 'Order Status']
  const companyLinks = ['About Us', 'Contact Us', 'Privacy Policy', 'Terms']

  return (
    <footer className="mt-14 rounded-4xl border border-white/15 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-1">
          <p className="text-xl font-bold text-indigo-300">Clothic</p>
          <p className="max-w-xs text-sm leading-7 text-slate-200">
            New drops every week, easy returns, and styles that feel made for you.
          </p>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-slate-100 transition hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.7A4.05 4.05 0 0 0 3.7 7.75v8.5A4.05 4.05 0 0 0 7.75 20.3h8.5a4.05 4.05 0 0 0 4.05-4.05v-8.5a4.05 4.05 0 0 0-4.05-4.05h-8.5Zm4.25 3.55a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5Zm0 1.7a3.05 3.05 0 1 0 0 6.1 3.05 3.05 0 0 0 0-6.1Zm5.1-.95a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-slate-100 transition hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M18.9 2H22l-6.8 7.77L23 22h-6.1l-4.8-6.5L6.4 22H3.3l7.27-8.3L1 2h6.26l4.33 5.88L18.9 2Zm-1.08 18.14h1.69L6.34 3.77H4.52l13.3 16.37Z" />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-slate-100 transition hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M13.62 21v-8.2h2.77l.42-3.19h-3.2V7.57c0-.92.26-1.55 1.6-1.55h1.7V3.16c-.3-.04-1.3-.13-2.47-.13-2.45 0-4.12 1.5-4.12 4.25v2.33H7.56v3.2h2.76V21h3.3Z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold">Shop</h3>
          <ul className="space-y-2 text-slate-200 cursor-pointer hoever:underline">
            {quickLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold">Support</h3>
          <ul className="space-y-2 text-slate-200">
            {supportLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold">Company</h3>
          <ul className="space-y-2 text-slate-200">
            {companyLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold">Join our Community</h3>
          <p className="mb-4 text-slate-200">
            Get first access to new arrivals and members-only offers.
          </p>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-300 focus:outline-none"
            />
            <button className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-white/20 pt-5 text-center text-sm text-slate-300">
        © 2026 Clothic. Made with care.
      </div>
    </footer>
  )
}

export default Footer
