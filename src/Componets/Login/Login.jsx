import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate('/')
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-8 text-white">
      <div className="mx-auto max-w-md rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8">
        <h1 className="text-3xl font-bold text-indigo-300">Welcome back</h1>
        <p className="mt-2 text-sm text-slate-200">Log in to continue shopping with Clothic.</p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-slate-200">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-300 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm text-slate-200">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-300 focus:outline-none"
              required
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400"
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => navigate('/create-account')}
              className="rounded-xl border border-white/25 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Create an Account
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Login