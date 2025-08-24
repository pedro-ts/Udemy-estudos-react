import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import "./Search.css"
const Search = () => {
    const [searchParams] = useSearchParams();
    const url = "http://localhost:3001/products?" + searchParams;
    const {data:itens, loading, error} = useFetch(url);

  return (
    <div>
      <h1>Resultados disponiveis</h1>
      <ul className="products">
        {itens &&
          itens.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R${item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Search
