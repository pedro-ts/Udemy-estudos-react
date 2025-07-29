import './App.css'
import CarDetails from './components/CarDetails'

function App() {
  const cars = [
    {id: 1, nome:"ferrari", cor:"vermelhor"},
    {id: 2, nome:"bmw", cor:"preto"},
    {id: 3, nome:"audi", cor:"branco"},
    {id: 4, nome:"toyota", cor:"prata"},
    {id: 5, nome:"volkswagen", cor:"cinza"},
    {id: 6, nome:"nissan", cor:"azul"},
  ]

  return (
    <>
      {cars.map((car)=>{
        return <CarDetails key={car.id} id={car.id} nome={car.nome} cor={car.cor}/>
      })}
    </>
  )
}

export default App
