const sharp = require('sharp');

sharp('cinanime.png')
    .resize(80)
    .grayscale()
    .toFile('resized.png');