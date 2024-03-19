const express = require('express');

const router = express.Router();

const tropas = [
  {
    clase: "Jett", 
    nivel: 1, 
    vida: 100, 
    ataque: 30, 
    imagen: "https://th.bing.com/th/id/OIP.UDgKrcYTQNBsOuSPed43_AHaFj?rs=1&pid=ImgDetMain",
  },
  {
    clase: "Killjoy", 
    nivel: 1, 
    vida: 100, 
    ataque: 30, 
    imagen: "https://i.pinimg.com/originals/3b/5c/30/3b5c307c5f3b9bf12f89bf9b29f7eff0.jpg",
  }
];
  
router.get('/crear', (request, response, next) => {
  response.render('crear');
});
  
router.post('/crear', (request, response, next) => {
    console.log(request.body);
    tropas.push({
      clase: request.body.clase, 
      nivel: 1, 
      vida: request.body.vida, 
      ataque: request.body.ataque, 
      imagen: request.body.imagen,
    });
    response.redirect('/');
});
  
router.get('/', (request, response, next) => {
  response.render('clases', {
    tropas: tropas,
  });
});

module.exports = router;