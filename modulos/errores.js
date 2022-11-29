function otraFuncion() {
    serompe();
}


function serompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(function () {
        try{
           return 3 + z; 
        } catch (err) {
            console.error('Error en mi funcion asincrona');
             cb(err);
        }
    })
}

 try {
   //otraFuncion(); 
   seRompeAsincrona(function() {
    console.log('hay error');
   })
 }catch(err) {
    console.error('valla algo se rompio..');
    console.error(err.message);
 }

 console.log('esto de aqui esta al final');