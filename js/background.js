const images = [
    "수정됨_pexels-ave-calvar-martinez-3030459.jpg",
    "수정됨_pexels-reynaldo-brigworkz-brigantty-771883.jpg",
    "수정됨_pexels-taryn-elliott-6552204.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("div");
bgImage.id = "backgroundImg"
bgImage.src = `(img/${chosenImage})`;
document.body.appendChild(bgImage);

document.getElementById("backgroundImg").style.backgroundImage = `url(img/${chosenImage})`;

