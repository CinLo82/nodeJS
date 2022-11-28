function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola' + nombre);
        miCallback(nombre);
    }, 1500);
} 

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('adios' + nombre );
        otroCallback()
    }, 1000);
}

console.log('iniciando proceso...');
     hola('carlos', function() {
        adios('carlos', function() {
         console.log('terminando proceso'); 
        })
});

//hola('carlos', function() {});
//adios('carlos', function() {});