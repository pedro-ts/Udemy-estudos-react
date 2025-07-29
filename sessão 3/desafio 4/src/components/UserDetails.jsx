const UserDetails = ({id, nome, idade, profissão}) => {
  return (
    <div>
        <h2>Pessoa {id}</h2>
      <ul key={id}>
        <li>Nome: {nome}</li>
        <li>Idade: {idade}</li>
        <li>Profissão: {profissão}</li>
        {idade >= 18 ? (<p>Pode tirar carteira de motorista</p>) : (<p> Ainda não pode tirar carteira de motorista</p>)}
      </ul>
    </div>
  )
}

export default UserDetails
