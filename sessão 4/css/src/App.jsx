// Css
import { useState } from 'react';
import './App.css'
// Componentes
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const [n, setN] = useState(15);
  const mudarCor = () =>{return setN(5)};
  const [redTitle, setRedTitle] = useState(true);

  return (
    <>
      {/* Css global */}
      <h1>Olá seja bem vindo</h1>
      {/* Css de componente */}
      <MyComponent/>
      <p>Esse paragrafo é do app.jsx </p>
      {/* Inline css */}
      <p style={{color:"blue", padding:"30px", borderRadius:"30px", backgroundColor:"grey", fontWeight:"bold"}}>Este elemento foi estilizado de forma inline</p>
      {/* Css inline dinamico */}
      <h2 style={n > 10 ? ({color:"purple"}): ({color:"pink"})}>Css dinamico</h2>
      <button onClick={mudarCor}>Mude para rosa</button>
      {/* Classe dinamica */}
      <h2 className={redTitle ? ("red-title"): ("title")}>Este titulo vai ter calsse dinamica</h2>
      <button onClick={()=>{setRedTitle(!redTitle)}}>Mudar titulo</button>
      {/* Css modules */}
      <Title/>
    </>
  );
}

export default App
