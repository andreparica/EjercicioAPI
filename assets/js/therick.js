const API = "https://rickandmortyapi.com/api/character";

const getData = (api) => {
    return fetch (api)
    .then((response) => response.json()) 
    .then((json) => {  
     fillData(json); 

    })

    .catch((error) => {
     console.log("Error:", error); 

    })

}

const fillData = (data) => { 
let html = ""; 
let limit = 20; 

// for (let i=0; i < limit; i++) { 

data.results.forEach(element => {
    // Estructura para FOR: console.log(data.results[i].image);
    console.log(element);
    
    html += '<div class="col">'; 
    html += '<div class="card h-100">';
    html += `<img src="${element.image}" class="card-img-top" alt="${element.name}">`
    html += '<div class="card-body">';
    html += `<small class="text-muted"> ${element.name}</small> <br>`;
    html += `<small class="text-muted"> ${element.gender}</small>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
    
});
    


document.getElementById("dataAlbum").innerHTML = html;

};

getData(API);