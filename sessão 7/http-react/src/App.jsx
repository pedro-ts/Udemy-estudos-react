import "./App.css";
import { useState, useEffect } from "react";
//4 custom hook
import {useFetch} from "./hooks/useFetch";

function App() {
  const [products, setProducts] = useState([]);
  const url = "http://localhost:3000/products";

  //4 custom hook
  const { data:itens, httpConfig } = useFetch(url);


  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1) carregar lista inicial
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await fetch(url);
  //       const data = await res.json();
  //       setProducts(data);
  //     } catch (err) {
  //       console.error("Erro ao buscar produtos:", err);
  //     }
  //   })();
  // }, []);

  // 2) enviar e incluir no estado
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const product = { name, price: Number(price) };

  //   const res = await fetch(url, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(product),
  //   });

  //   const addedProduct = await res.json();

  //   // 3) “gatilho” de atualização
  //   setProducts((prevProducts) => [...prevProducts, addedProduct]);

  //   // opcional: limpar formulário
  //   setName("");
  //   setPrice("");
  // };
//5 refatorando post
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { name, price: Number(price) };
    httpConfig(product, "POST")
    setName("");
    setPrice("");
  }

  return (
    <>
      <h1>Lista de produtos</h1>
      <ul>
        {itens.map((product) => (
          <li key={product.id}>
            {product.name} - R${product.price}
          </li>
        ))}
      </ul>

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <span>Preço:</span>
            <input
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>

          <input type="submit" value="criar" />
        </form>
      </div>
    </>
  );
}

export default App;
