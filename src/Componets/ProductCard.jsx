import { formatINRFromUSD } from '../utils/currency'

function ProductCard({ product, onAddToCart, onBuyNow }) {
  return (
    <article className="flex flex-col rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex h-52 items-center justify-center rounded-xl bg-white p-4">
        <img src={product.image} alt={product.title} className="h-full object-contain" />
      </div>
      <h3 className="line-clamp-2 min-h-12 text-base font-semibold">{product.title}</h3>
      <p className="mt-2 text-sm text-slate-300">{product.category}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xl font-bold text-indigo-300">{formatINRFromUSD(product.price)}</span>
        <span className="text-sm text-yellow-300">Rating {product.rating.rate}</span>
      </div>
      <div className="mt-4 flex gap-2">
        <button
          className="flex-1 rounded-lg border border-indigo-300 px-3 py-2 text-sm font-semibold text-indigo-200 transition hover:bg-indigo-500/20 cursor-pointer"
          onClick={() => onAddToCart(product)}
        >
          Add to bag
        </button>
        <button
          className="flex-1 rounded-lg bg-indigo-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400 cursor-pointer"
          onClick={() => onBuyNow(product)}
        >
          Buy now
        </button>
      </div>
    </article>
  )
}

export default ProductCard
