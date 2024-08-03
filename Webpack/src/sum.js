const sum = async (a, b) => a + b;
export default sum;

const buton = document.createElement("buton");
buton.innerHTML = "fetch image";
buton.onclick = () => {
  import("./image-viewer").then((module) => console.log(module));
};
document.body?.appendChild(buton);
