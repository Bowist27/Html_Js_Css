const Tropa = require('../models/tropa.model');

exports.get_crear = (request, response, next) => {
    response.render('crear', {
        username: request.session.username || '',
    });
};

exports.post_crear = (request, response, next) => {
    console.log(request.body);
    const mi_tropa = new Tropa(
        request.body.clase, request.body.vida, request.body.ataque, 
        request.body.imagen
    );
    mi_tropa.save()
        .then(([rows, fieldData]) => {
            response.setHeader('Set-Cookie', 'ultima_tropa=' + mi_tropa.clase + '; HttpOnly');
            response.redirect('/tropas');
        }).catch((error) => {
            console.log(error);
        });
};

exports.get_root = (request, response, next) => {
    console.log(request.cookies);
    console.log(request.cookies.ultima_tropa);
    Tropa.fetch(request.params.tropa_id).then(([rows, fieldData]) => {
        //console.log(fieldData);
        response.render('clases', {
            tropas: rows,
            ultima_tropa: request.cookies.ultima_tropa || '',
            username: request.session.username || '',
            });
        })
        .catch((error) => {
            console.log(error)
    });

};