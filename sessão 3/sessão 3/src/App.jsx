import { useState } from 'react'
// Imgs
import City from "./assets/city.jpg"
// Css
import './App.css'
// Componentes
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {
  const [count, setCount] = useState(0)
  const cars = [
    {id: 1, brand: "ferrari", color: "amarela", newCar: true, km: 0},
    {id: 2, brand: "ford", color: "azul", newCar: false, km: 10000},
    {id: 3, brand: "tesla", color: "preto", newCar: true, km: 0},
    {id: 4, brand: "chevrolet", color: "branco", newCar: false, km: 20000},
    {id: 5, brand: " fiat", color: "vermelho", newCar: true, km: 0},
    {id: 6, brand: "nissan", color: "cinza", newCar: false, km: 15000},
  ]

  function showMessage() {
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) =>{
    setMessage(msg);
  };
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
      {/* Props */}
      <ShowUserName name="Pedro"/>
      {/* 
      <CarDetails brand="Ferrari" km={100000} color="Vermelho" newCar={false}/>
      <CarDetails brand="Ford" km={0} color="Azul" newCar={true}/>
      <CarDetails brand="Tesla" km={100} color="preto" newCar={false}/>
       */}

      {/* Props + loop + reaproveitamento */}
      {cars.map((car)=>(
        <CarDetails brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} key={car.id}/>
      ))}
      {/* Fragments */}
      <Fragments/>
      {/* Children */}
      <Container myValue="Props funcionam aqui">
        <h1>Opa eu vim de app</h1>
        <p>Eu também vim de app</p>
      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage}/>
      {/* State Lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App
