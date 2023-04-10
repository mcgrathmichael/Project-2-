import { useState } from "react";
import axios from "axios";

export default function FetchButtons() {
  const NombreDePersonnages = "101";
  const ApiList = [
    {
      name: "Disney",
      url: `https://api.disneyapi.dev/characters?pageSize=${NombreDePersonnages}`,
    },
    {
      name: "Pokemon",
      url: `https://api.disneyapi.dev/characters?pageSize=${NombreDePersonnages}`,
    },
    {
      name: "Zelda",
      url: `https://api.disneyapi.dev/characters?pageSize=${NombreDePersonnages}`,
    },
  ];

  const [apiChoice, setApiChoice] = useState(null);
  const [apiName, setApiName] = useState("");

  const getImages = (url, name) => {
    axios
      .get(url)
      .then((response) => {
        setApiChoice(response.data);
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
        <button
          type="button"
          onClick={() => getImages(ApiList[0].url, ApiList[0].name)}
        >
          {ApiList[0].name}
        </button>
        <button
          type="button"
          onClick={() => getImages(ApiList[1].url, ApiList[1].name)}
        >
          {ApiList[1].name}
        </button>
        <button
          type="button"
          onClick={() => getImages(ApiList[2].url, ApiList[2].name)}
        >
          {ApiList[2].name}
        </button>
      </div>
    );
  return (
    <div>
      <button type="button" onClick={() => setApiChoice(null)}>
        Précédent
      </button>
      {apiName === ApiList[0].name &&
        apiChoice.data.map((item) => (
          <img
            alt="Disney"
            // eslint-disable-next-line no-param-reassign, no-underscore-dangle
            key={item._id}
            src={item.imageUrl}
            style={{ width: "200px", height: "300px", objectFit: "cover" }}
          />
        ))}

      {apiName === ApiList[1].name && <h3>Bientôt !</h3>}
      {apiName === ApiList[2].name && <h3>Bientôt !</h3>}
    </div>
  );
}
