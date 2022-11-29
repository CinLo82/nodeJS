process.on('beforeExit', () => {
    console.log('el proceso va a terminar');
});

process.on('exit', () => {
    console.log('Ále, el proceso acabo');
});

process.on('uncaughtException', (err, origen) => {
    console.error('vaya se nos ha olvidado capturar un error');
    console.error(err);
});



functionQueNoExiste();
