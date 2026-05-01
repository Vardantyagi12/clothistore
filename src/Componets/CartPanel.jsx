import React from 'react'
import { formatINRFromUSD } from '../utils/currency'

function CartPanel({ cartItems, total, onRemoveFromCart }) {
  return (
    <section className="mt-14 rounded-2xl border border-white/15 bg-slate-900/75 p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Your Bag</h2>
        <p className="text-lg font-semibold text-indigo-300">Total: {formatINRFromUSD(total)}</p>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-slate-300">Your bag is empty. Add something you like.</p>
      ) : (
        <ul className="space-y-3">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between rounded-xl border border-white/10 p-3"
            >
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-slate-300">
                  {formatINRFromUSD(item.price)} x {item.quantity}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <p className="font-semibold text-indigo-200">
                  {formatINRFromUSD(item.price * item.quantity)}
                </p>
                <button
                  className="rounded-md border border-rose-300 px-3 py-1 text-sm font-semibold text-rose-200 transition hover:bg-rose-500/20"
                  onClick={() => onRemoveFromCart(item.id)}
                >
                  Remove item
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default CartPanel
