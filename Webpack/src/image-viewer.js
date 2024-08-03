import big from "../assets/1000.png";
import small from "../assets/200.png";

const smallImage = document.createElement("img");
smallImage.src = small;
document.body?.appendChild(smallImage);

const image = document.createElement("img");
image.src = big;
document.body?.appendChild(image);
