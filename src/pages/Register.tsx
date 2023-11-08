import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { InputStyled } from "@/components/LabelStyled";
import { ButtonStyled } from "@/components/ButtonStyled";
import { FormStyled } from "@/components/FormStyled";
import Image from "next/image";
import { ConteinerStyled } from "@/components/ConteinerStyled";

export default function Register() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const currentUser = "Employee";
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (username && company !== " ") {
      try {
        const response = await axios.post(
          "http://localhost:3001/api/register",
          {
            username,
            company,
            password,
            currentUser,
          }
        );

        router.push("/Login");
      } catch (error) {
        alert(
          "erro ao acessar o serviço, aguarde alguns instantes e tente novamente"
        );
      }
    } else {
      setError("Preencha todos os campos");
    }
  };

  return (
    <div>
      <section style={{ display: "flex" }}>
        <FormStyled onSubmit={handleRegister}>
          <Image
            className="imgLogo"
            src="/logo.svg"
            alt="logo"
            width={200}
            height={200}
            priority
            style={{ position: "absolute", top: "0" }}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <label htmlFor="usernameInput">Nome de usuário</label>
            <InputStyled
              id="usernameInput"
              type="text"
              placeholder="Nome de Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
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
            <label htmlFor="companyInput">Empresa</label>
            <InputStyled
              id="companyInput"
              type="text"
              placeholder="Empresa"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
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
            <label htmlFor="passwordInput">Password</label>
            <InputStyled
              id="passwordInput"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </section>
          <ButtonStyled type="submit">Entrar</ButtonStyled>
          <ButtonStyled type="button" onClick={handleRegister}>
            Criar Conta
          </ButtonStyled>
        </FormStyled>
        <ConteinerStyled>
          <Image
            className="imgStyle"
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
