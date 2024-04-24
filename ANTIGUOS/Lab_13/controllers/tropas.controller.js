const Tropa = require('../models/tropa.model');

exports.get_crear = (request, response, next) => {
    response.render('crear');
};

exports.post_crear = (request, response, next) => {
    console.log(request.body);
    const mi_tropa = new Tropa(
        request.body.clase, request.body.vida, request.body.ataque, 
        request.body.imagen
    );
    mi_tropa.save(); 
    response.redirect('/');
};

exports.get_root = (request, response, next) => {
    response.render('clases', {
        tropas: Tropa.fetchAll(),
    });
};