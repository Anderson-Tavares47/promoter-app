import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Register() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const currentUser = 'Employee';

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (username && company !== " ") {
      try {
        const response = await axios.post('http://localhost:3001/api/register', {
          username,
          company,
          password,
          currentUser
        });

        router.push('/Login');

      } catch (error) {
        alert('erro ao acessar o serviço, aguarde alguns instantes e tente novamente')
      }
    } else {
      alert('preecha os campos')
    }
  };

  return (
    <div>
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Nome de Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Empresa"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
        <button type="button" onClick={handleRegister}>Criar Conta</button>
      </form>
    </div>
  );
};
