import { Link } from 'react-router-dom'

import { Button } from './ui/button'

export function HeaderNavigationButtons() {
  const isProductsRoute = window.location.pathname.includes('/products')

  return (
    <div className="flex gap-2">
      <Button variant={isProductsRoute ? 'secondary' : 'default'} asChild>
        <Link to="/">Dashboard</Link>
      </Button>
      <Button variant={isProductsRoute ? 'default' : 'secondary'} asChild>
        <Link to="/products">Produtos</Link>
      </Button>
    </div>
  )
}
