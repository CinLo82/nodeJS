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

function hablar(callbackHablar) {
    setTimeout(function() {
        console.log('bla bla bla bla....');
        callbackHablar()
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function () {
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback);
    }
}

// -- 

console.log('iniciando proceso...');
hola('carlos', function(nombre) {
    conversacion(nombre, 3, function(){
        console.log('terminando proceso'); 
    });
});



 /*
console.log('iniciando proceso...');
     hola('carlos', function() {
        hablar(function() {
            hablar(function() {
                hablar(function() {
                adios('carlos', function() {
                console.log('terminando proceso');   
                
                });    
            });    
        });
    });
});
*/

