//personaje de TV
let nombre = "Pepe";
let anime = "DBZ";
let edad = "19";

//Objeto literal
    //par llave-valor
let personaje = {
    nombre: "Pepe",
    anime: "DBZ",
    edad: "19",
};

console.log(personaje);

//Acceder a propiedades de un objeto
console.log(personaje.nombre);
console.log(personaje['anime']);

//Modificar
personaje.edad = 13;
personaje['edad'] = 15;

//Borrar

delete personaje.anime;

console.log(personaje);