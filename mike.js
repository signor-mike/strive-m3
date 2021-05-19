// I couldn't get an array of 9 pictures from those dodgy API that you provided to us.

primaryArray = [];
secondaryArray = [];

fetch("https://picsum.photos/v2/list?page=1&limit=9", {
  method: "GET",
})
  .then((response) => response.json())
  .then((primaryImages) => {
    for (let i = 0; i < primaryImages.length; i++) {
      primaryArray.push(primaryImages[i]);
    }
    // console.log(primaryArray);
  })
  .catch((err) => console.log(err));

fetch("https://picsum.photos/v2/list?page=2&limit=9", {
  method: "GET",
})
  .then((response) => response.json())
  .then((secondaryImages) => {
    for (let i = 0; i < secondaryImages.length; i++) {
      secondaryArray.push(secondaryImages[i]);
    }
    // console.log(secondaryArray);
  })
  .catch((err) => console.log(err));

const primaryImages = document.getElementById("primary-images");
const secondaryImages = document.getElementById("secondary-images");

const svg = document.querySelectorAll(".card svg:first-of-type");
const card = document.querySelectorAll(".card");
// console.log(svg);
// console.log(card);

primaryImages.onclick = function () {
  for (let i = 0; i < svg.length; i++) {
    svg[i].remove();
    let img = document.createElement("img");
    img.src = primaryArray[i].download_url;
    img.classList.add("fluid", "card-img-top");
    card[i].appendChild(img);
  }
  //   console.log(primaryArray);
  //   console.log(secondaryArray);
};
