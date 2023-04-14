import { useState, useEffect } from "react";
import axios from "axios";
/* eslint-disable */

function FetchButtons() {
  const characters = "100";

  // item is for eval when mapping, same for the path
  const ApiList = [
    {
      name: "Disney",
      url: `https://api.disneyapi.dev/characters?pageSize=${characters}`,
      path_to_data: "response?.data?.data",
      path_to_image: "item.imageUrl",
      key: "item._id",
      item_name: "item.name",
    },
    {
      name: "Zelda",
      url: `https://botw-compendium.herokuapp.com/api/v2/all`,
      path_to_data: "response?.data?.data?.equipment",
      path_to_image: "item.image",
      key: "item.id",
      item_name: "item.name",
    },
  ];
  const [apiData, setApiData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [fetched, setFetched] = useState();

  // Fetch the data from the api list when the button of the first return is pressed
  const fetchData = (url, name) => {
    axios({
      method: "get",
      url,
    })
      .then(function (response) {
        ApiList.map((api) => {
          if (api.name === name) {
            const data = eval(api.path_to_data);
            setApiData(data);
          } else {
            return "";
          }
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  // check if the links are dead or containing "noimage" in the url
  const checkLink = (url) =>
    axios({
      method: "get",
      url,
    })
      .then(function (response) {
        if (!url.includes("Noimage")) {
          return true; // the link is working and not displaying the image if noimage is in the url
        }
        return false;
      })
      .catch(function (error) {
        return false; // the link is broken
      });

  useEffect(() => {
    let promises = "";
    // map through api and send each links to checklink function
    ApiList.map((api) => {
      if (api.name === fetched) {
        promises = apiData.map((item) => checkLink(eval(api.path_to_image)));
      }
    });
    // wait for the checklink function to finish, then set the fetcheddata to the one that have working links
    Promise.all(promises)
      .then(function (results) {
        setFilteredData(
          apiData.filter(
            (item, index) => results[index] // only keep the items with working links
          )
        );
      })
      .catch(function (error) {
        console.error(error);
      });
    console.info("success");
  }, [apiData.length]);

  if (!fetched)
    return (
      <div>
        <h2>Choisi ton thème !</h2>
        {/* map through api object and display a button each time for each api  */}
        {ApiList.map((api) => (
          <button
            type="button"
            key={api.name}
            onClick={() => {
              // when the button is clicked fetch the data from the api
              fetchData(api.url, api.name);
              // set the fetched usestated to the name of the api, so it return the next return function
              setFetched(api.name);
            }}
          >
            {api.name}
          </button>
        ))}
      </div>
    );
  // TODO Remove the last return and send the image from the filteredData, and map them.
  //  make the const numbers of characters a props to only fetched necessary one
  return (
    <div>
      <button
        onClick={() => {
          // when precendent is clicked, delete the data fetched and return to the choices
          setFetched(null), setApiData([]), setFilteredData([]);
        }}
      >
        Précédent
      </button>
      {/* map through api list for better adaptability */}
      {ApiList.map(
        (api) =>
          api.name === fetched &&
          // map through the working link and display the working one
          filteredData?.map((item) => (
            <img
              // get the differents path from the object
              key={eval(api.key)}
              src={eval(api.path_to_image)}
              alt={eval(api.item_name)}
              style={{
                width: "200px",
                height: "300px",
                objectFit: "cover",
              }}
            />
          ))
      )}
    </div>
  );
}
/* eslint-enable */
export default FetchButtons;
