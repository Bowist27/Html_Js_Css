const express = require('express');
const router = express.Router();
const html_header = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Clash of clans</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    </head>
    <body>
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="/">
                <img src="https://1000logos.net/wp-content/uploads/2022/09/Valorant-Emblem.png" width="112" height="28">
              </a>
          
              <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          
            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                <a class="navbar-item" href="/">
                  Home
                </a>
          
                <a class="navbar-item" href="/crear">
                  Crear
                </a>
          
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                    More
                  </a>
          
                  <div class="navbar-dropdown">
                    <a class="navbar-item">
                      About
                    </a>
                    <a class="navbar-item">
                      Jobs
                    </a>
                    <a class="navbar-item">
                      Contact
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item">
                      Report an issue
                    </a>
                  </div>
                </div>
              </div>
          
              <div class="navbar-end">
                <div class="navbar-item">
                  <div class="buttons">
                    <a class="button is-primary">
                      <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        <section class="section">
            <div class="container">
`;
const html_footer = `
    </div>
    </section>
    <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
    </footer>
  </body>
</html>
`;

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
    let html = html_header;
    html += `
        <h2 class="title">Hola jugador de Valorant!</h2>
        <div class="columns">`;
    
    for (let tropa of tropas) {
      html += `
        <div class="column">
          <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img id="imagen_jett" src="${tropa.imagen}" alt="Imagen de ${tropa.clase}">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="${tropa.imagen}" alt="Imagen de ${tropa.clase}">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">${tropa.clase}</p>
                    <p class="subtitle is-6">@${tropa.clase} Lvl: <span id="nivel_jett">${tropa.nivel}</span></p>
                  </div>
                </div>
            
                <div class="content">
                  Vida: <span id="vida_jett">${tropa.vida}</span> <br>
                  Ataque: <span id="ataque_jett">${tropa.ataque}</span> <br> <br>
                  <button id="boton_atacar_killjoy" class="button is-danger">Atacar killjoy</button> <br> <br>
                  <button id="boton_levelear_jett" class="button is-success">Subir de nivel</button>
                </div>
              </div>
            </div>
        </div>
      `;
    }
    html += html_footer;
    response.send(html);
});

module.exports = router;