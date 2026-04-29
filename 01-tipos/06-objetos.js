// personaje de anime
let nombre = "eren";
let anime = "ataquen a los titanes";
let edad = 20;

let personaje = {
    nombre: "eren",
    anime: "ataquen a los titanes",
    edad: 20,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 13

let llave = 'edad';
personaje[llave] = 20

delete personaje.anime; 

console.log(personaje);