import React from 'react'
import { useEffect, useMemo, useState } from 'react'
import Navbar from './Componets/Navbar'
import Hero from './Componets/Hero'
import ProductCard from './Componets/ProductCard'
import CartPanel from './Componets/CartPanel'
import Footer from './Componets/Footer'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [cartItems, setCartItems] = useState([])
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://fakestoreapi.com/products?limit=12')
        if (!response.ok) {
          throw new Error('Could not load products.')
        }
        const data = await response.json()
        setProducts(data)
      } catch (fetchError) {
        setError(fetchError.message || 'Something went wrong while loading products.')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 160)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const cartTotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  )

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }

      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const handleBuyNow = (product) => {
    addToCart(product)
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  }

  const removeFromCart = (productId) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-8">
        <Navbar cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />

        <Hero isScrolled={isScrolled} />

        <section
          id="products"
          className={`transition-all duration-700 ${isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-30'
            }`}
        >
          <h2 className="mb-5 text-3xl font-bold">Shop What Is Popular Right Now</h2>

          {loading && <p className="text-slate-300">Loading products...</p>}
          {error && <p className="text-red-400">{error}</p>}

          {!loading && !error && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                  onBuyNow={handleBuyNow}
                />
              ))}
            </div>
          )}
        </section>

        <CartPanel
          cartItems={cartItems}
          total={cartTotal}
          onRemoveFromCart={removeFromCart}
        />

        <Footer />
      </div>
    </main>
  )
}

export default App
