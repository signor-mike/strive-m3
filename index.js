window.onload = function () {
  console.log("let's begin!");
  const artists = ["eminem", "metallica", "behemoth"];
  for (let i = 0; i < artists.length; i++) {
    fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artists[i]}`,
      // `https://deezerdevs-deezer.p.rapidapi.com/search?q=${artists[i]}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "90e5eb88efmsh1d09dc719864c23p1ff331jsn79bff24920dc",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const band = document.getElementById(`${artists[i]}`);
        const bandName = document.createElement("h2");
        bandName.innerText = `${artists[i]}`;
        band.appendChild(bandName);
        const row = document.createElement("div");
        row.classList.add("row", "mx-2");
        band.appendChild(row);
        for (let i = 0; i < data.data.length; i++) {
          let col = document.createElement("div");
          col.classList.add("col-12", "col-md-2");
          col.innerHTML = `
        <div class="card my-2">
          <img src="${data.data[i].album.cover_big}" class="card-img-top" alt="${data.data[i].album.title} album cover">
          <div class="card-body">
            <h5 class="card-title">${data.data[i].artist.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${data.data[i].album.title}</h6>
            <p class="card-text">${data.data[i].title}</p>
            <a href='${data.data[i].preview}' target='_blank' class="btn btn-primary">Preview</a>
          </div>
        </div>
        `;
          row.appendChild(col);
          console.log(data.data[i]);
        }
      })
      .catch((err) => console.error(err));
  }
};
