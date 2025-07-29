// css
import './App.css'
import UserDetails from './components/UserDetails'
// componets

function App() {
  const pessoas = [
    {id:1, nome:"Cauã", idade: 11, profissão:"TI"},
    {id:2, nome:"Pedro", idade: 17, profissão:"Desenvolvedor web"},
    {id:3, nome:"Paulo", idade: 20, profissão:"Professor"},

  ]
  return (
    <>
    {pessoas.map((pessoa) => {
      return <UserDetails id={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} profissão={pessoa.profissão}/>
    })
    }
      
    </>
  )
}

export default App
