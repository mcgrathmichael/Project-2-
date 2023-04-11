import { useState } from "react";
import axios from "axios";

export default function FetchButtons() {
  const NombreDePersonnages = "50";
  const ApiList = [
    {
      name: "Disney",
      url: `https://api.disneyapi.dev/characters?pageSize=${NombreDePersonnages}`,
    },
    {
      name: "Pokemon",
      url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png`,
    },
    {
      name: "Zelda",
      url: `https://botw-compendium.herokuapp.com/api/v2/all`,
    },
  ];

  const [apiChoice, setApiChoice] = useState();
  const [apiName, setApiName] = useState("");

  const getImages = (url, name) => {
    axios
      .get(url)
      .then((response) => {
        setApiChoice(response.data.data);
        setApiName(name);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  if (!apiChoice)
    return (
      <div>
        <h2>Choisi ton thème !</h2>
        {ApiList.map((api) => (
          <button
            type="button"
            key={api.name}
            onClick={() => getImages(api.url, api.name)}
          >
            {api.name}
          </button>
        ))}
      </div>
    );
  return (
    <div>
      {}
      <button type="button" onClick={() => setApiChoice(null)}>
        Précédent
      </button>
      {apiName === ApiList[0].name &&
        apiChoice.map((item) => (
          <img
            alt="Disney"
            // eslint-disable-next-line no-param-reassign, no-underscore-dangle
            key={item._id}
            src={item.imageUrl}
            style={{ width: "200px", height: "300px", objectFit: "cover" }}
          />
        ))}

      {apiName === ApiList[1].name && <h3>Bientôt !</h3>}
      {apiName === ApiList[2].name &&
        apiChoice.monsters.map((item) => (
          <img
            alt="Zelda"
            // eslint-disable-next-line no-param-reassign, no-underscore-dangle
            key={item.id}
            src={item.image}
            style={{ width: "200px", height: "300px", objectFit: "cover" }}
          />
        ))}
    </div>
  );
}
