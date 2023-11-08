import { ButtonStyled } from "@/components/ButtonStyled";
import { ConteinerStyled } from "@/components/ConteinerStyled";
import { FormStyled } from "@/components/FormStyled";
import { InputStyled } from "@/components/LabelStyled";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Image from "next/image";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
              const response = await axios.post(
                "http://localhost:3001/api/login",
                {
                  username,
                  password,
                  latitude,
                  longitude,
                }
              );

              localStorage.setItem("username", username);

              router.push("/Dashboard");
            } catch (error: any) {
              if (error.response && error.response.status === 404) {
                alert(
                  "A senha não confere. Por favor, verifique suas credenciais."
                );
              } else {
                alert(
                  "Erro ao acessar o serviço, aguarde alguns instantes e tente novamente."
                );
              }
            }
          });
        } else {
          alert("Seu navegador não suporta geolocalização.");
        }
      } catch (error) {
        alert(
          "Erro ao acessar o serviço, aguarde alguns instantes e tente novamente."
        );
      }
    } else {
      alert("Preencha os campos.");
    }
  };

  return (
    <div>
      <section style={{ display: "flex" }}>
        <FormStyled onSubmit={handleLogin}>
          <Image
            src="/logo.svg"
            alt="logo"
            width={200}
            height={200}
            priority
            style={{ position: "absolute", top: "10px" }}
          />
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <label htmlFor="">Email</label>
            <InputStyled
              type="text"
              placeholder="Nome de Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </section>

          <section
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <label htmlFor="">Senha</label>
            <InputStyled
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <section
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                margin: "10px 0 10px 0",
              }}
            >
              <input type="checkbox" /> <small>Lembrar Login</small>
            </section>
          </section>

          <ButtonStyled type="submit">Log in</ButtonStyled>
        </FormStyled>
        <ConteinerStyled>
          <Image
            src="/supermaket.svg"
            alt="supermaket"
            width={500}
            height={500}
            priority
          />
        </ConteinerStyled>
      </section>
    </div>
  );
}
