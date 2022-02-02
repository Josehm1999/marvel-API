const API = "https://gateway.marvel.com:443/v1/public/characters?ts=12345&apikey=f0a0274c917d85f0935474d1cffd9e3e&hash=3cd5588795ec68236f3220f982ef085f";

const getAPI = (api) =>{
    return fetch(api)
    .then ((response) => response.json())
    .then((json) => {
        fillData(json.data.results);
    })
    .catch((error) => {
        console.log("Error in the API :", error);
      });
};

const fillData = (data) => {
  let html = "";
  data.forEach((p) => {
    let image = p.thumbnail.path +"."+ p.thumbnail.extension;
    html += '<div class="col">';
    html += '<div class="card h-100">';
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${p.name}</h5>`;
    html += `<img src="${image}" class="card-img-top" alt="...">`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("characters").innerHTML = html;
};

getAPI(API);
