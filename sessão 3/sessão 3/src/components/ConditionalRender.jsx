import { useState } from "react"

const ConditionalRender = () => {
    const [x, setX] = useState("ola");

    const [name, setName] = useState("João");
  return (
    <div>
      <h2>Isso será exibido? -Somente if-</h2>
        {x == "ola" && <p>Sim, x é igual à "ola"</p>}
        {x !== "ola" && <p>Não, x não é igual à "ola"</p>}

    <h2>If/else ternario</h2>
        {name === "João" ? ( //isso aqui é o if
            <div>
                <p>Sim o nome é João</p>
            </div>
        ) : ( //isso aqui é o else
            <div>
                <p>Não, o nome não é João</p>
            </div>
        )}
        <button onClick={() => setName("Pedro")}>Clique aqui para alterar o nome!</button>
    </div>
  )
}

export default ConditionalRender
