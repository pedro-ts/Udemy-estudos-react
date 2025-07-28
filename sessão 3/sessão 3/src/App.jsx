import { useState } from 'react'
// Imgs
import City from "./assets/city.jpg"
// Css
import './App.css'
// Componentes
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Avançando em react</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.png" alt="Batman e cavaleiro da lua com o simbolo do GPT" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade do minecraft" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
    </div>
  );
}

export default App
