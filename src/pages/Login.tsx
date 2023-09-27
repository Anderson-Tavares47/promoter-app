import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (username && password !== " ") {
      try {
        // Obtenha a geolocalização do dispositivo do usuário
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
  
            // Faça a solicitação de login, incluindo a geolocalização
            try {
              const response = await axios.post('http://localhost:3001/api/login', {
                username,
                password,
                latitude,
                longitude,
              });
  
              localStorage.setItem('username', username);
  
              router.push('/Dashboard');
            } catch (error) {
              if (error.response && error.response.status === 404) {
                alert('A senha não confere. Por favor, verifique suas credenciais.');
              } else {
                alert('Erro ao acessar o serviço, aguarde alguns instantes e tente novamente.');
              }
            }
          });
        } else {
          alert('Seu navegador não suporta geolocalização.');
        }
      } catch (error) {
        alert('Erro ao acessar o serviço, aguarde alguns instantes e tente novamente.');
      }
    } else {
      alert('Preencha os campos.');
    }
  };

  return (
    <div>
      <h2>Login de Usuário</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Nome de Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
