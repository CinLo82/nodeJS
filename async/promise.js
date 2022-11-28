function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Hola' + nombre);
            resolve(nombre);
        }, 1500);
    });   
} 

function adios(nombre) {
    return new Promise((resolve, reject) => {
         setTimeout(function() {
        console.log('adios' + nombre );
        resolve()
        }, 1000);
    })
   
}

function hablar(nombre) {
    return new Promise ((resolve, reject) => {
        setTimeout(function() {
        console.log('bla bla bla bla...');
       // resolve(nombre)
       reject('Hay un error');
        }, 1000);
    })
    
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

// ---
console.log('iniciando el proceso');
hola('carlos')  
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('terminando el proceso');
    })
    .catch(error => {
        console.error('Ha habido un error:');
        console.error(error);
    })