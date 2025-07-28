// rafce 
const TemplateExpression = () => {
  const user = {
    nome: "Pedro",
    idade: 17,
    trabalho: "Programador"
  }
  return (
    <div>
      <p>Olá {user.nome}, seja bem vindo! Você é um ótimo {user.trabalho} isso é impressionante para quem tem {user.idade} anos!</p>
    </div>
  )
}

export default TemplateExpression
