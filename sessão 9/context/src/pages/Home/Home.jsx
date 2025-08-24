import { useContext } from 'react'
import CounterContext from '../../context/CounterContext.jsx'

const Home = () => {
  const { counter } = useContext(CounterContext);
  return (
    <>
      <p>Valor do contador {counter}</p>
    </>
  )
}

export default Home
