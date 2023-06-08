const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];




function main() {
  let listaOriginal = document.querySelectorAll('.lista li')
 let nuevaLista = document.querySelector('.lista')
  
  for (const element of listaOriginal) {
    element.remove()
  }
  for (const newElement of cosasQueAprendimos) {
    let li = document.createElement('li')
    li.textContent = newElement.tema
    li.classList.add(newElement.class || 'item')
    nuevaLista.appendChild(li)
  }
  
}

main();
