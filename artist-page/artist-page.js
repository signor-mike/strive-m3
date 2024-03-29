// for artist page, this link given by strive: https://striveschool-api.herokuapp.com/api/deezer/artist/412
// we want albums by artist
// pathway is:-


window.onload = function () {
  let appendAlbums = document.getElementById("append-albums");
  let theTitle = document.getElementById("the-title");

  let albums = [
    {
      pic: "./images/queen-album-cover-1.jpg",
      title: "Queen II",
      subtitle: "Queen",
    },
    {
      pic: "./images/queen-album-cover-2.jpg",
      title: "Bohemian Rhapsody",
      subtitle: "Queen",
    },
    {
      pic: "./images/queen-album-cover-3.jpg",
      title: "Hot Space",
      subtitle: "Queen",
    },
    {
      pic: "./images/queen-album-cover-4.jpg",
      title: "Another Bohemian Rhapsody",
      subtitle: "Queen",
    },
    {
      pic: "./images/queen-album-cover-5.jpg",
      title: "The Miracle",
      subtitle: "Queen",
    },
    {
      pic: "./images/queen-album-cover-6.jpg",
      title: "News of the world",
      subtitle: "Queen",
    },
    {
      pic: "./images/queen-album-cover-7.jpg",
      title: "Queen Works",
      subtitle: "Queen",
    },
    {
      pic: "./images/queen-album-cover-8.jpg",
      title: "Jazz",
      subtitle: "Queen",
    },
    {
      pic: "./images/queen-album-cover-9.jpg",
      title: "A kind of magic",
      subtitle: "Queen",
    },
    {
      pic: "./images/queen-album-cover-10.jpg",
      title: "Killer queen",
      subtitle: "Queen",
    },
    {
      pic: "./images/queen-album-cover-11.jpg",
      title: "Dunno what album is it",
      subtitle: "Queen",
    },
    {
      pic: "./images/queen-album-cover-12.jpg",
      title: "Greatest hits",
      subtitle: "Queen",
    },
  ];
  let artists = [
    {
      band: "Aerosmith",
      img: "./images/artists/aerosmith.jpg",
      url: "https://en.wikipedia.org/wiki/Aerosmith",
    },
    {
      band: "Alice Cooper",
      img: "./images/artists/alice-cooper.jpg",
      url: "https://en.wikipedia.org/wiki/Alice_Cooper_(band)",
    },
    {
      band: "Blue Öyster Cult",
      img: "./images/artists/blue-oyster-cult.jpg",
      url: "https://en.wikipedia.org/wiki/Blue_%C3%96yster_Cult",
    },
    {
      band: "Cheap Trick",
      img: "./images/artists/cheap-trick.jpg",
      url: "https://en.wikipedia.org/wiki/Cheap_Trick",
    },
    {
      band: "Electric Light Orchestra",
      img: "./images/artists/electric-light-orchestra.jpg",
      url: "https://en.wikipedia.org/wiki/Electric_Light_Orchestra",
    },
    {
      band: "KISS",
      img: "./images/artists/kiss.jpg",
      url: "https://en.wikipedia.org/wiki/Kiss_(band)",
    },
  ];
  let queen = [
    {
      img: "./images/artists/queen.jpg",
      title: "Queen",
      subtitle: "1970–present",
      description: `
      Queen are a British rock band formed in London in 1970. 
      Their classic line-up was Freddie Mercury (lead vocals, piano), 
      Brian May (guitar, vocals), Roger Taylor (drums, vocals) and John Deacon (bass). 
      Their earliest works were influenced by progressive rock, hard rock and heavy metal, 
      but the band gradually ventured into more conventional and radio-friendly works by 
      incorporating further styles, such as arena rock and pop rock. 
      `,
    },
  ];
  let gridClasses = ["col-12", "col-sm-6", "col-md-4", "col-lg-2", "px-1"];
  // default view
  for (let i = 0; i < albums.length; i++) {
    let div = document.createElement("div");
    div.classList.add(...gridClasses);
    div.classList.add("overview");
    div.innerHTML = `
      <img
                src="./images/queen-album-cover-${i + 1}.jpg"
                alt=""
                class="fluid w-100"
              />
              <div class="text-center mb-4 mt-1" style="line-height: 0.1rem">
                <h6 class="text-white">${albums[i].title}</h6>
                <span class="text-muted pt-n2" style="font-size: 0.7rem">${
                  albums[i].subtitle
                }</span>
              </div>
      `;
    appendAlbums.appendChild(div);
    document.getElementById("overview").classList.add("active-border");
  }

  // onclick on overview clearing inner html and appening children
  document.getElementById("overview").onclick = function () {
    appendAlbums.innerHTML = "";
    for (let i = 0; i < albums.length; i++) {
      let div = document.createElement("div");
      div.classList.add(...gridClasses);
      div.classList.add("overview", "fadeIn");
      div.innerHTML = `
        <img
                  src="./images/queen-album-cover-${i + 1}.jpg"
                  alt=""
                  class="fluid w-100"
                />
                <div class="text-center mb-4 mt-1" style="line-height: 0.1rem">
                  <h6 class="text-white">${albums[i].title}</h6>
                  <span class="text-muted pt-n2" style="font-size: 0.7rem">${
                    albums[i].subtitle
                  }</span>
                </div>
        `;
      appendAlbums.appendChild(div);
    }
    theTitle.innerText = "Albums";
    document.getElementById("overview").classList.add("active-border");
    document
      .getElementById("related-artists")
      .classList.remove("active-border");
    document.getElementById("about").classList.remove("active-border");
  };

  // onclick on related artists clearing inner html and appening children
  document.getElementById("related-artists").onclick = function () {
    appendAlbums.innerHTML = "";
    for (let i = 0; i < artists.length; i++) {
      let div = document.createElement("div");
      div.classList.add(...gridClasses);
      div.classList.add("related-artists", "fadeIn");
      div.innerHTML = `
        <img
                  src="${artists[i].img}"
                  alt=""
                  class="fluid w-100 h-50"
                />
                <div class="text-center mb-4 mt-1" style="line-height: 0.1rem">
                  <h6 class="text-white">${artists[i].band}</h6>
                  <span class="text-muted pt-n2" style="font-size: 0.7rem">
                  <a href=${artists[i].url}>Learn more</a>
                  </span>
                </div>
        `;
      appendAlbums.appendChild(div);
    }
    theTitle.innerText = "Related Artists";
    document.getElementById("overview").classList.remove("active-border");
    document.getElementById("related-artists").classList.add("active-border");
    document.getElementById("about").classList.remove("active-border");
  };

  // onclick on about clearing inner html and appening children
  document.getElementById("about").onclick = function () {
    appendAlbums.innerHTML = "";
    for (let i = 0; i < queen.length; i++) {
      let div = document.createElement("div");
      div.classList.add("col-12", "d-flex", "about", "fadeIn");
      div.innerHTML = `
      <div class='row mb-5'>
      
        <div class='col-6'>
          <img src="${queen[i].img}"
            alt=""
            class="img-fluid" />              
        </div>
      
              <div class="text-center mb-4 col-6">
                <h6 class="text-white">${queen[i].title}</h6>
                <span class="text-muted" style="font-size: 0.7rem">
                ${queen[i].subtitle}
                </span>
                <p class='text-white'>${queen[i].description}</p>
              </div>
        </div>
      `;
      appendAlbums.appendChild(div);
    }
    theTitle.innerText = "About";
    document.getElementById("overview").classList.remove("active-border");
    document
      .getElementById("related-artists")
      .classList.remove("active-border");
    document.getElementById("about").classList.add("active-border");
  };
};
