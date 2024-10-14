// Selecciona el div con id "root"
const rootDiv = document.getElementById("root");
const h2text = document.createElement("h2");
h2text.textContent = "MANIPULANDO EL DOM";
rootDiv.appendChild(h2text);

//Crea un nuevo elemento a (enlace)
const link = document.createElement("a");
link.href = "https://keybr.com"; 
link.textContent = "Google";
link.target = "_blank";


// lista de compras
const buyList = [
    "books",
    "bread",
    "eraser",
    "earphones",
    "collection-cards",
    "hdmi",
    "vga",
    "motherboard",
    "university-books",
  ];
  const ulElement = document.createElement("ul");

  buyList.forEach(item => {
    const liElement = document.createElement("li");
    liElement.textContent = item; 
    ulElement.appendChild(liElement);
  });
  rootDiv.appendChild(ulElement);