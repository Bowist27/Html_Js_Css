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
    response.setHeader('Set-Cookie', 'ultima_tropa=' + mi_tropa.clase + '; HttpOnly');
    response.redirect('/');
};

exports.get_root = (request, response, next) => {
    console.log(request.cookies);
    console.log(request.cookies.ultima_tropa);
    response.render('clases', {
        tropas: Tropa.fetchAll(),
        ultima_tropa: request.cookies.ultima_tropa || '',
    });
};