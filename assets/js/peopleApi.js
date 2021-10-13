/* 1) Agregamos la URL API - El http que vamos a consumir*/
/* 2) Se agrega la segunda variable porque se va a ejecutar cuando se presione el botón del html (buscar)*/
/* 3) Vamos a hacer una función para obtener los datos de esa API */
/* 4) GetData es el nombre de la función que vamos a agregar */
/* 5) Al poner API dentro de la función, estamos poniendo un parámetro. Estamos agregando la URL dentro de la función
getData.
- Un parámetro recibe un valor - variables (solamente recibe variables)*/
/* 6) Const get.Data Obtener los resultados de la API
7) // El fetch ya lo estamos utilizando como un GET para traer esa información de la API
8) 
*/

const API = "https://jsonplaceholder.typicode.com/users";
const btnSearch = document.getElementById("btnSearch");

//Obtener los resultados de la API. Se agrega el parámetro en minúscula//
//API: Envía la URL. api: Recibe la URL (puedes ser otro nombre).
//Aquí ya empezamos a consumir API
const getData = (api) => {
  // El fetch ya lo estamos utilizando como un GET para traer esa información de la API. Es ese REQUEST.
  //Parámetro (api) está recibiendo la URL. Esa URL tiene el array con los 10 JSON. La URL trae JSONS. Extrae los Array y JSON.
  // Return: Retoma lo que me respondió la petición con la fetch api. Devuelve la información.
  // Pedir (get) trae lo de la URL y responde.
  // Request: El fetch está trayendo todos los datos de la API.
  //SEGUNDA EXPLICACIÓN:
  //El get es (fetch) que trae la información, es decir, es esa request (la petición).
  // El return se encarga de retomar lo que devuelve la promesa.
  return (
    fetch(api)
      // El objetivo: Es que el retorno venga con los datos que se quieren. 
      //Promesas: Permiten validar que los datos sean los que quiero, que no tengan error.
      // Then: Promete traernos lo que tenga sí o sí la API. El . es sacar objetos.
      //Response: La promesa responde algo (la response). => Significa nos va a responder lo siguiente. En este caso un objeto JSON.
      .then((response) => response.json())
      .then((json) => {
        //Guarda en la palabra json los 10 json que me trajo la api.
        // console.log(json);

        fillData(json); //Le envío los datos a (data) con el parámetro json (10json de la api) para que los use.
      })
      // Muestre el error que responde la API, en caso de que no sabemos porqué no llega la respuesta al then.
      .catch((error) =>{
          console.log("Error in the Api", error);
      })
  );
};

//fillData es para tomar los datos, las personas, es decir de ese array json (10 json) y dibujarlos en una card.
//Llenar datos, recibiendo los datos.

// Empieza a dibujar cards con la info de las personas
const fillData = (data) => {
    //Empezamos a crear código html dentro de js
    // "" = 
    let html = "";
    //ForEach es más rápido a la hora de recorrer ese array 
    // pp es people = Se guardarán todos los datos de persona desde 0,1,2,3, cada uno de los items que recorre el forEach. Para que haga el ciclo.
    //ForEach: Se usa cuando no importa el límite del array, recorre lo que haya. 
    // Lo ideal es que sean 2 letras como máximo. Entre más corto, mejor.
    // Del array, en una card
    // html += es igual a lo que tenga el html viejo + el nuevo. 
    // Empezamos a tomar estilos de bootstrap.
    data.forEach((pp) => {
      //Concatena los datos a la variable 
        html += '<div class="col">'; //Se recomienda comillas simples.
        html += '<div class="card h-100">';
        html += '<div class="card-body">';
        html += `<h5 class="card-title">${pp.name}</h5>`; // $Bastiks. De ese json vamos a sacar todos los item name. Así funciona el array y los va a colocar en el título. 
        html += `<p class="card-text"> ${pp.email}</p>`;
        html += '<div class="card-footer">';
        html += `<small class="text-muted"> ${pp.address.suite}</small>`;
        html += `<p class="card-text">Episodes: ${pp.phone}</p>`;
        html += `<p class="card-text"> <a  href="${pp.website}" target="_blank">Web personal</a></p>`;



        html += "</div>";
        html += "</div>";
        html += "</div>";
        html += "</div>";

        
    });
    //Id de html, div, le manda desde el css. 
    //Para insertar ese html en el id dataPeople.
    // inner: Escribiendo el texto. Estamos asignando que va a escribir lo que tenga la VAR HTML (Toda la card, dibujando los 10 json).
    
    document.getElementById("dataPeople").innerHTML = html;



};


// Invocamos la función//
btnSearch.onclick = function () {
  //Se ejecuta la API (URL)
  getData(API);
};
