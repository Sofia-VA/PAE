const common = require('./common');

const dato = common.setMessage('');

module.exports = function() {
    // Retorna último dato guardado
    const dato = common.getMessage();
    console.log('El mensaje guardado es: ' , dato)
}