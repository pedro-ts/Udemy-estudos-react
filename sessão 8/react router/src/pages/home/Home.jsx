// importando elementos do router
// import { link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch.jsx";
// importando css
import './Home.css'


const Home = () => {
  const url = "http://localhost:3001/products";
  const { data: itens, loading, error } = useFetch(url);
  return (
    <div>
      <h2>Produtos</h2>
      {error && <p>{error}</p>}
      <ul className="products">
        {itens &&
          itens.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R${item.price}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
