function suma(a, b) {
    console.log(arguments);// para que agarre todos los valores 
    return a + b;
}

let resultado = suma(5, 6, 1, 2, 3)
console.log(resultado);
console.log(typeof suma);