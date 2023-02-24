import { useState } from "react";

function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email);
  }

  function limparEmail(e) {
    setUserEmail("");
  }

  return (
    <div>
      <h2>Cadastre o seu e-mail:</h2>
      <form>
        <input
          type="email"
          placeholder="Digite seu e-mail..."
          onChange={(e) => setEmail(e.target.value)} //para que cada digito que tenha digitado no quadradinho vai alterar o email que tem para a const
        />
        <button type="submit" onClick={enviarEmail}>
          Enviar email
        </button>
        {userEmail && ( //eh tipo um if
          <div>
            <p>Olá, {userEmail}.</p>
            <button onClick={limparEmail}>Limpar email</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Condicional;
