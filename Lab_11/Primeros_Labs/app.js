
const html_header = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Valorant</title>
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

const express = require('express');
const app = express();

//Middleware
app.use((request, response, next) => {
  console.log('Middleware!');
  next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
  response.status(404);
  let html = html_header;
  html += '<h2 class="title">Este personaje ya no existe... ñññññ</h2>';
  html += html_footer;
  response.send(html); //Manda la respuesta
});


/*
const server = http.createServer( (request, response) => {    
    console.log(request.url);

    if (request.url == "/") {

      response.setHeader('Content-Type', 'text/html');
      response.write(html_header);
      response.write(`
                      <h2 class="title">Hola Jugador de Valorant!</h2>
                      <div class="columns">`
      );

      let html_tropas = '';
      for (let tropa of tropas) {
          html_tropas += `
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
      response.write(html_tropas);
      response.write(`</div>
              <script>
              const jett = {nivel: 1, vida: 100, ataque: 30};
              const killjoy = {nivel: 1, vida: 100, ataque: 30};
              
              const boton_levelear_jett = document.getElementById("boton_levelear_jett");
              
              const subir_jett = () => {
                  jett.nivel++;
                  jett.vida += 0;
                  jett.ataque += 10;
              }
              
              boton_levelear_jett.onclick = () => {
                  subir_jett();
                  const span_nivel = document.getElementById("nivel_jett");
                  span_nivel.innerHTML = jett.nivel;
                  const span_ataque = document.getElementById("ataque_jett");
                  span_ataque.innerHTML = jett.ataque;
                  const span_vida = document.getElementById("vida_jett");
                  span_vida.innerHTML = jett.vida;
              }
              
              const boton_atacar_killjoy = document.getElementById("boton_atacar_killjoy");
              
              boton_atacar_killjoy.onclick = () => {
                  killjoy.vida -= jett.ataque;
                  
                  if (killjoy.vida <= 0) {
                      const imagen_killjoy = document.getElementById("imagen_killjoy");
                      imagen_killjoy.src = "https://pbs.twimg.com/media/FGqnaSAWYAM-P__.jpg";
                      const boton_levelear_killjoy = document.getElementById("boton_levelear_killjoy");
                      boton_levelear_killjoy.style.display = "none";
                      const boton_atacar_jett = document.getElementById("boton_atacar_jett");
                      boton_atacar_jett.style.display = "none";
                  }
              
                  const span_vida = document.getElementById("vida_killjoy");
                  span_vida.innerHTML = killjoy.vida;
              }
              
              const subir_killjoy = () => {
                  killjoy.nivel++;
                  killjoy.vida += 2;
                  killjoy.ataque += 4;
              }
              
              boton_levelear_killjoy.onclick = () => {
                  subir_killjoy();
                  const span_nivel = document.getElementById("nivel_killjoy");
                  span_nivel.innerHTML = killjoy.nivel;
                  const span_ataque = document.getElementById("ataque_killjoy");
                  span_ataque.innerHTML = killjoy.ataque;
                  const span_vida = document.getElementById("vida_killjoy");
                  span_vida.innerHTML = killjoy.vida;
              }
              
              const boton_atacar_jett = document.getElementById("boton_atacar_jett");
              
              boton_atacar_jett.onclick = () => {
                  jett.vida -= killjoy.ataque;
                  
                  if (jett.vida <= 0) {
                      const imagen_jett = document.getElementById("imagen_jett");
                      imagen_jett.src = "https://p.turbosquid.com/ts-thumb/Vw/S5IUL1/9XyEOpwn/barbarian/png/1548506480/1920x1080/fit_q99/213fe431655c56a984598422f62ed769f31ed4fa/barbarian.jpg";
                      const boton_levelear_jett = document.getElementById("boton_levelear_jett");
                      boton_levelear_jett.style.display = "none";
                      const boton_atacar_killjoy = document.getElementById("boton_atacar_killjoy");
                      boton_atacar_killjoy.style.display = "none";
                  }
              
                  const span_vida = document.getElementById("vida_jett");
                  span_vida.innerHTML = jett.vida;
              }
              </script>
      `);
      response.write(html_footer);
      response.end();
    } else if (request.url == "/crear" && request.method == "POST") {
      const datos = [];
      request.on('data', (dato) => {
          console.log(dato);
          datos.push(dato);
      });
      return request.on('end', () => {
          const datos_completos = Buffer.concat(datos).toString();
          console.log(datos_completos);
          const clase = datos_completos.split('&')[0].split('=')[1];
          console.log(clase);
          const vida = datos_completos.split('&')[1].split('=')[1];
          console.log(vida);
          const ataque = datos_completos.split('&')[2].split('=')[1];
          console.log(ataque);
          const imagen = datos_completos.split('&')[3].split('=')[1];
          console.log(imagen);
          tropas.push({
            clase: clase, 
            nivel: 1, 
            vida: vida, 
            ataque: ataque, 
            imagen: imagen,
          });
          filesystem.writeFileSync(response);
          return response.end();
      });
    }



});

*/
app.listen(3000);