import { use, useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
  // manipulação de dados/onchance
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");

  // funções
  const handleName = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const handleSubmit = (e) => {
    //Ação do form
    e.preventDefault();
    // Limpar formulario
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };
  return (
    <div>
      {/*  criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          {/* label com html for */}
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome aqui"
            onChange={handleName}
            value={name}
          />

          {/* Label envolvendo input */}
          <label>
            <span>E-mail:</span>
            <input
              type="email"
              name="email"
              placeholder="Digite seu email aqui"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label>
            <span>Biografia do usuario</span>
            <textarea
              name="bio"
              placeholder="Digite sua descrição aqui"
              onChange={(e) => setBio(e.target.value)}
              value={bio}
            ></textarea>
          </label>
          <label>
            <span>Função no sistema</span>
            <select name="role" onChange={(e)=> setRole(e.target.value)} value={role}>
              <option value="user">Usuário</option>
              <option value="editor">Editor</option>
              <option value="Adimin">Adiministrador</option>
            </select>
          </label>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
