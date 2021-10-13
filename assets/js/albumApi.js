const API = "https://jsonplaceholder.typicode.com/photos";

//Obteniendo los resultados de la API, es decir, la URL.
const getData = (api) => {
    //Retorna del resultado de la API. El FETCH se encarga de consumir la API, parámetro (api) que tiene la URL.
    return fetch (api)
    .then((response) => response.json()) 
    .then((json) => { //Guarda esos json en esta palabra (json), donde hay 5.000 fotos.
     fillData(json); //Se envían esas 5000 fotos a la función fillData para dibujarlos en el HTML.

    })
    //Sirve por si hay algo mal en general, expulsa el error en JS
    .catch((error) => {
     console.log("Error:", error); //En caso de que exista un error. 

    })

}

const fillData = (data) => { //Data es el mismo json. Solo que aquí se reciben esas 5000 fotos.
let html = ""; //Cración de la variable HTML. Las "" está concatenando todo lo que le pongamos al HTML.
let limit = 20; //Creamos un límite de 20 fotos porque si podemos 50000 fotos colapsa la vida.

// i que es 0 y va aumentando, sea menor a 20.
for (let i=0; i < limit; i++) { //Utilizamos este for normal porque tiene límite (son pocos). 
    // Cuando no tiene límite se usa el foreach.

    html += '<div class="col">'; //Se recomienda comillas simples.
    html += '<div class="card h-100">';
    html += `<img src="${data [i].url}" class="card-img-top" alt="${data [i].title}">`
    // Estamos diciendo en esta línea que empiece a recorrer la posición, es decir, 0,1,2,3,4... de los json.
    //Ponemos el array [i] para que empiece a recorrer. 
   //Va pasando por cada objeto. Debemos indicarle qué propiedad va a tomar (en este caso la URL de la foto = .url de data).
   //Ponemos .title que lo va a tomar del data.
    html += '<div class="card-body">';
    html += `<small class="text-muted"> ${data[i].title}</small>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";

}

document.getElementById("dataAlbum").innerHTML = html; //Se toma el div donde se colocarán las 20 card y se le coloca el html.

};



// Se invoca la función automaáticamente, ya que no tenemos el botón.
// Se le está enviando la variable API.
getData(API);