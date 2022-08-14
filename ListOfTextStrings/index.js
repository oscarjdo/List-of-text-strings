let textoAIdentar = [];

let contenedor = document.querySelector(".container");
let fragmento = document.createDocumentFragment();
let parrafo = document.createElement("P");
parrafo.classList.add("array");
fragmento.appendChild(parrafo);
contenedor.appendChild(fragmento);

while (1 < 2){
    let textoEscrito = prompt(`Escribe aquí algun exto`);
    if (textoEscrito !== null){
        textoAIdentar.push(textoEscrito);
        console.log(`Ejecutando codigo "while"`);
    } else if (!textoAIdentar.length){
        parrafo.innerHTML = `No hay nada que plasmar en la pantalla`;
        break;
    } else {
        textoAIdentar.sort();
        parrafo.innerHTML = `Textos ordenados e identados:<br><br><br> ${textoAIdentar.join(" - ")}`;
        // document.write(`Textos ordenados e identadados:<br><br> ${textoAIdentar.join(" - ")}`);
        console.log(`Codigo "while finiquitado"`);
        break;
    }
}

// var resultado = "";

// do {
//     var cadena = prompt("Introduce una cadena");
//     if (resultado == "") {
//         resultado = resultado + cadena;
//     } else {
//         resultado = resultado + "-" + cadena;
//     }
// } while (confirm("Desea seguir?"));