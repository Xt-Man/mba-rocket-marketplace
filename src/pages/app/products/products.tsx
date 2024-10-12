import { Helmet } from 'react-helmet-async'

export function Products() {
  return (
    <div>
      <Helmet title="Produtos" />
      <h1>Seus produtos</h1>
      <h2>Acesse gerencie a sua lista de produtos à venda</h2>
      <div className="flex gap-8">
        <div>Filtros</div>
        <div>Produtos</div>
      </div>
    </div>
  )
}
