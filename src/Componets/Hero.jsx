import React from 'react'

function Hero({ isScrolled }) {
  return (
    <section className="relative mb-14 overflow-hidden rounded-3xl border border-white/15">
      <div
        className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center transition-opacity duration-700 ${
          isScrolled ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-slate-900/55" />
      <div className="relative px-8 py-24 sm:px-12">
        <p className="mb-4 inline-flex rounded-full bg-indigo-500/25 px-4 py-1 text-sm text-indigo-100">
          Fresh fits, fair prices
        </p>
        <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
          Clothes and accessories you will actually want to wear
        </h1>
        <p className="mt-4 max-w-xl text-slate-200">
          Scroll down and browse handpicked picks for everyday style, work days, and weekends.
        </p>
      </div>
    </section>
  )
}

export default Hero
