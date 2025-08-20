import "./App.css";
import { useState, useEffect } from "react";
//4 custom hook
import { useFetch } from "./hooks/useFetch";
import DeleteButton from "./components/home/DeleteButton";

function App() {
  const [products, setProducts] = useState([]);
  const url = "http://localhost:3000/products";

  //4 custom hook
  const { data: itens, httpConfig, loading, error } = useFetch(url);

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
    httpConfig(product, "POST");
    setName("");
    setPrice("");
  };
  const handleRemove = (id) =>{
    httpConfig(id, "DELETE")
  }

  return (
    <>
      <h1>Lista de produtos</h1>
      {/* 6 loading */}
      {loading === true && <p>Careegando dados...</p>}
      {error !== null && <p>{error}</p>}
      <ul>
        {itens.map((product) => (
          <div
            key={product.id}
            style={{ display: "flex", alignItems: "center" }}
          >
            <div style={{ marginRight: "10px" }}>
              <li
                style={{
                  background: "#fff",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  padding: "16px",
                  marginBottom: "12px",
                  minWidth: "220px",
                  maxWidth: "500px",
                  width: "350px",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                <span>
                  {product.name} - R${product.price}
                </span>
                <DeleteButton id={product.id} handleRemove={handleRemove} />
              </li>
            </div>
          </div>
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
          {/* 7 state de loading no post */}
          {loading == true && <input type="submit" disabled value="Aguarde" />}
          {loading == false && <input type="submit" value="criar" />}
        </form>
      </div>
    </>
  );
}

export default App;
