import { useEffect, useState } from "react";
import Map from "../pages/Map";
import NavBar from "@/components/NavBar";
import NavBarTest from "@/components/NavBarTest";

export default function Dashboard() {
  const [userData, setUserData] = useState<any>({});
  const [username, setUsername] = useState<string | null>(null);
  const [coordinates, setCoordinates] = useState<any[]>([]); // Estado para as coordenadas

  useEffect(() => {
    // Recupere o nome de usuário do localStorage
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);

      // Faça uma solicitação para buscar as informações adicionais do usuário
      fetch(`http://localhost:3001/api/user/${storedUsername}`)
        .then((response) => response.json())
        .then((data) => {
          setUserData(data.user);
          // Verifique se 'previous_coordinates' existe em data.user e, se existir, converta para um objeto JavaScript
          if (data.user && data.user.previous_coordinates) {
            const parsedCoordinates = JSON.parse(
              data.user.previous_coordinates
            );
            setCoordinates(parsedCoordinates);
          }
          console.log(data);
        })
        .catch((error) => {
          console.error("Erro ao buscar dados do usuário:", error);
        });
    }
  }, []);

  // Obtém a data de hoje
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Adiciona zero à esquerda, se necessário
  const day = String(today.getDate()).padStart(2, "0"); // Adiciona zero à esquerda, se necessário
  const formattedToday = `${year}-${month}-${day}`;

  // Filtra as coordenadas pelo dia de hoje
  const filteredCoordinates = coordinates.filter(
    (coord) => coord.timestamp && coord.timestamp.startsWith(formattedToday)
  );

  return (
    <>
      <section className="flex max-w-screen-xl text-sky-950 text-2xl pt-2 mb-5 justify-between pl-12">
        <NavBarTest />
        <h1 className="text-red-500">Painel do Usuário</h1>
        {userData && (
          <div>
            <p>Nome de Usuário: {userData.username}</p>
            <p>Empresa: {userData.company}</p>
            <p>CurrentUser: {userData.currentUser}</p>
          </div>
        )}

        {/* Renderize as coordenadas do dia de hoje no componente */}
        <h2>Coordenadas do Dia de Hoje:</h2>
        <ul>
          {filteredCoordinates.map((coord, index) => (
            <li key={index}>
              Latitude: {coord.latitude}, Longitude: {coord.longitude},
              Timestamp: {coord.timestamp}
              <Map coordinates={filteredCoordinates} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
