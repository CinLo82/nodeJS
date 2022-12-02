
const fs = require('fs');
const stream = require('steam');
const util = require('util');

let data = ''

let readableStream = fs.createReadStream(__dirname + '/input.txt')

readableStream.setEncoding('UTF8');
/*
readableStream.on('data', function (chunk) {
    console.log(chunk.toString());
})

readableStream.on('end', function() {
    console.log(data);
})

// --buffer de escrituras--

process.stdout.write('hola')
process.stdout.write('que')
process.stdout.write('tal')
*/


const Transform = stream.Transform

function Upper() {
    Transform.call(this)
}

util.inherits(Upper, Transform)

Upper.prototype._transform = function (chunk, codif, cb) {
    chunkUpper = chunk.toString().toUpperCase()

    this.push(chunkUpper)
    cb()
}

let upper = new Upper()

readableStream
    .pipe(upper)
    .pipe(process.stdout)