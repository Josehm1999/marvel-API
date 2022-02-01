const ts = "1234";
const apikey = "af20daecb5717e58c513901bfcfeaf58";
const hash = "74ef6ce1182bcc6a6489a16f22ddb6a2";

const API = `https://gateway.marvel.com:443/v1/public/comics?ts=${ts}&apikey=${apikey}&hash=${hash}`;

const getAPI = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((characters) => {
      console.log(characters.data.results);
      fillData(characters.data.results);
    })
    .catch((error) => {
      console.log("Error with the API");
    });
};

const fillData = (data) => {
  let html = "";
  data.forEach((character) => {
    html += '<div class="col">';
    html += '<div class="card h-100 text-white bg-dark mb-3">';
    html += `<img src="${character.thumbnail.path}.${character.thumbnail.extension}" class="card-img-top" alt="...">`;
    html += '<div class="card-body ">';
    html += `<h5 class="card-title text-capitalize">${character.title}</h5>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });

  document.getElementById("characters").innerHTML = html;
};
getAPI(API);
