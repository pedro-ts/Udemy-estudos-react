
import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    // manipulação de dados/onchance
    const [name, setName] = useState(user ? (user.name) : (""));
    const [email, setEmail] = useState(user ? (user.email) : (""));

    const handleName = (e) =>{
        setName(e.target.value)
        // console.log(name)
    }
    const handleSubmit = (e)=> {
        e.preventDeafult(); 
    }
  return (
    <div>
      {/*  criação de form */}
       <form onSubmit={handleSubmit}>
        <div>
            {/* label com html for */}
            <label htmlFor="name">Nome:</label>
            <input type="text" name='name' placeholder='Digite seu nome aqui' onChange={handleName}/>

            {/* Label envolvendo input */}
            <label>
                <span>E-mail:</span>
                <input type="email" name='email' placeholder='Digite seu email aqui' onChange={(e) => setEmail(e.target.value)}/>
            </label>
        </div>
        <input type="submit" value="Enviar"/>
       </form>
    </div>
  )
}

export default MyForm
