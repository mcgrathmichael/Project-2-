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

  const [post, setPost] = useState(null);
  const [name, setName] = useState("");

  const getImages = (url, apiName) => {
    axios.get(url).then((response) => {
      setPost(response.data);
      setName(apiName);
    });
  };
  if (!post)
    return (
      <div>
        <h1>Select an API !</h1>
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
      <button type="button" onClick={() => setPost(null)}>
        Précédent
      </button>
      {name === ApiList[0].name && (
        <img alt="Disney" src={post.data[1].imageUrl} />
      )}
      {name === ApiList[1].name && <h2>Bientôt !</h2>}
      {name === ApiList[2].name && <h2>Bientôt !</h2>}
    </div>
  );
}
