import { Link } from 'react-router-dom'

function Navbar({ cartCount }) {
  const navLinks = ['Home', 'Shop', 'New', 'Contact']

  return (
    <header className="sticky top-4 z-30 mb-8">
      <nav className="flex items-center gap-4 rounded-full border border-white/20 bg-white/10 px-5 py-3 shadow-lg backdrop-blur-md sm:px-8">
        <p className="text-base font-bold text-indigo-300 text-lg">Clothic</p>

        <div className="mx-auto max-w-md flex-1 rounded-2xl border border-white/20 bg-white/10 px-4 py-2">
          <ul className="flex items-center justify-center gap-7 text-sm font-medium text-slate-100">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={link === 'Shop' ? '#products' : '#'}
                  className="transition hover:text-indigo-300">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2 gap-3">
          <Link
            to="/login"
            className="rounded-full border border-white/25 px-3 py-1 text-xs font-semibold text-white transition hover:bg-white/15 sm:text-sm"
          >
            Login
          </Link>
          <Link
            to="/create-account"
            className="rounded-full border border-white/25 px-3 py-1 text-xs font-semibold text-white transition hover:bg-white/15 sm:text-sm"
          >
            Sign Up
          </Link>
          <span className="rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold sm:text-sm">
            Cart {cartCount}
          </span>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
