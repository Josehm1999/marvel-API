const URLAPI =
  "https://gateway.marvel.com/v1/public/creators?ts=1234&apikey=66d8867aa625aaf1d6c014d689ce7f7a&hash=37eaed289ef8407adcd1a85d4961e99f";

const getMarvel = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((json) => {
      getCharacters(json.data.results);
    })
    .catch((error) => console.log("Error in the api marvel:", error));
};

const getCharacters = (data) => {
  let html = ``;
  data.forEach((j) => {
    let image = j.thumbnail.path + "." + j.thumbnail.extension;
    let comics = j.comics.items;
    html += '<div class="col">';
    html += '<div class="card h-100">';
    html += `<img src="${image}" class="card-img-top" alt="...">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">First name: ${j.firstName}</h5>`;
    html += `<h6 class="card-title">Full name: ${j.fullName}</h6>`;
    html += `<p class="card-text">Amount comics: ${j.comics.available}</p>`;
    html += `${comics.forEach((c) => {
      `<p class="card-text">${c.name}</p>`;
    })}`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("characters").innerHTML = html;
};

getMarvel(URLAPI);
