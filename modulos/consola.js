/* var tabla = [
    {
        a: 1,
        b: 'Z'
    },
    {
        a: 2,
        b: 'otra'
    }
]

console.table(tabla);


console.group('Conmversacion:');
console.log('Hola');
console.group('Bla');
console.log('Blablablabla');
console.log('Blablablabla');
console.log('Blablablabla');
console.groupEnd('Bla');
console.log('Adios');
console.groupEnd('conver');

console.log('otra cosa de otra funcion');
*/

function funcion1() {
    console.group('funcion 1');
    console.log('esto es de la funcion 1');
    console.log('esto tambien');
    console.log('esto tambien');
    funcion2(); 
    console.log('hemos vuelto a la 1');
    console.groupEnd('funcion 1');
}

function funcion2() {
    console.group('funcion 2');
    console.log('ahora estamos en la funcion 2');
    console.groupEnd('funcion 2');
    
}

console.log('Empezamos');
funcion1();

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
