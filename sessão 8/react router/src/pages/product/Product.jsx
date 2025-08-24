import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';

const Product = () => {
    // 4 - rota dinamica
    const {id} = useParams();
    // 5 - Carregamento dado individual
    const url = "http://localhost:3001/products/" + id;
    const {data:product, loading, error} = useFetch(url)

    console.log(product)
  return (
    <>
    {error && <p>Ocorreu um erro...</p>}
    {loading && <p>Carregando...</p>}
    {product &&
    <div>
    <h3>{product.name}</h3>
    <p>R${product.price}</p>
    <Link to={`/products/${product.id}/info`}>Mais informações...</Link>
    </div>}
    </>
  )
}

export default Product
