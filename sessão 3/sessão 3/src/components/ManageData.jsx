import {useState} from "react";

const ManageData = () => {
    let someData = 10;
    const [number, setNumber] = useState(20);
  return (
    <div>
      <p>valor: {someData}</p>
      <button onClick={() => (someData = 15)}>Clique aqui para mudar o valor</button>

      <p>novo valor: {number}</p>
      <button onClick={() => (setNumber(30))}>Clique aqui para mudar o valor e renderizar!</button>
    </div>
  )
}

export default ManageData
