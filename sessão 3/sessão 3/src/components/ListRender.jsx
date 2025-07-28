import { useState } from "react";

const ListRender = () => {
    const [lista, setLista] = useState(["Matheus", "Pedro", "Josias"]);

    const [users, setUsers] = useState([
        {id: 1, nome:"Pedro", age: 17},
        {id: 2, nome:"Caua", age: 11},
        {id: 3, nome:"José", age: 18},
    ])

    const deleteRandom = () =>{ //função do botão
        const randomNumber = Math.floor(Math.random() * 4); //Primeiro geramos um numero aleatorio de 1 a 3
        
        setUsers((prevUsers) => {
            console.log(prevUsers); //imprime os usuariosno console
            return prevUsers.filter((user) => randomNumber !== user.id); //filtramos o usuario que não é o numero aleatorio
        })
    };
  return (
    <div>
      <h2>Lista com index do JS</h2>
      <ul>
        {lista.map((nome, i) => (
          <li key={i}>{nome}</li>
        ))}
      </ul>
      <h2>Lista com index recebido em dados</h2>
      <ul>
        {users.map(dado => (
            <li key={dado.id}>{dado.nome} - {dado.age}</li>
        ))}
      </ul>
      <div>
        <h2>Previous State</h2>
        <button onClick={deleteRandom}>Clique aqui para deletar um usuario aleatoriamente!</button>
      </div>
    </div>
  );
}

export default ListRender
