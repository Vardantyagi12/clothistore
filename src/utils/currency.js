const INR_RATE = 83

const inrFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 2,
})

export const formatINRFromUSD = (usdAmount) => inrFormatter.format(usdAmount * INR_RATE)

