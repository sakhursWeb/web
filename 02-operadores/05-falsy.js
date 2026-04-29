// short-circuit

// falso
// false
// 0
// ''
// null
//undefined
// NaN 
let nombre = 'samir'
let username = nombre || 'anomino';
console.log(username);

function fn1() {
    console.log('soy funcion 1');
    return true
}
function fn2() {
    console.log('soy funcion 2');
    return true
}
let x = fn1() && fn2();
let a = 123;
console.log(a)
