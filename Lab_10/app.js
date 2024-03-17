//fs es el módulo que contiene las funciones para 
//manipular el sistema de archivos
const filesystem = require('fs');

//Se escribe el segundo parámetro en el archivo del primer parámetro
filesystem.writeFileSync('hola.txt', 'Hola mundo desde node');

const te_hackie = () => {
    console.log("jojo te hackié");
}

//setTimeout ejecuta la función recibida como primer parámetro 
//cuando hayan transcurrido los milisegundos del segunto parámetro
setTimeout(te_hackie, 7000);

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

//Imprime el arreglo de manera ordenada
for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
} 

console.log("¿En dónde se ejecuta esta línea?");


const http = require('http');

const server = http.createServer( (request, response) => {    
    console.log(request.url);

    if (request.url == "/") {

      response.setHeader('Content-Type', 'text/html');
      response.write(`
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
                    <a class="navbar-item" href="https://bulma.io">
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
                      <a class="navbar-item">
                        Home
                      </a>
                
                      <a class="navbar-item">
                        Documentation
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
                      <h2 class="title">Bienvenido Valorant Player!</h2>
      
                      <div class="columns">
                          <div class="column">
                              <div class="card">
                                  <div class="card-image">
                                    <figure class="image is-4by3">
                                    <img id="imagen_jett" src="https://th.bing.com/th/id/OIP.UDgKrcYTQNBsOuSPed43_AHaFj?rs=1&pid=ImgDetMain" alt="Imagen de Jett">
                                    </figure>
                                  </div>
                                  <div class="card-content">
                                    <div class="media">
                                      <div class="media-left">
                                        <figure class="image is-48x48">
                                          <img src="https://th.bing.com/th/id/OIP.eX94rt2wWbGpQw-f63qIHAHaCd?rs=1&pid=ImgDetMain" alt="Placeholder image">
                                        </figure>
                                      </div>
                                      <div class="media-content">
                                        <p class="title is-4">Jett</p>
                                        <p class="subtitle is-6">Vandal Lvl: <span id="arma_jett">1</span></p>
                                      </div>
                                    </div>
                                
                                    <div class="content">
                                      Vida: <span id="vida_jett">100</span> <br>
                                      Ataque: <span id="ataque_jett">30</span> <br> <br>
                                      <button id="boton_atacar_killjoy" class="button is-danger">Atacar killjoy</button> <br> <br>
                                      <button id="boton_levelear_jett" class="button is-success">Subir de arma</button>
                                    </div>
                                  </div>
                                </div>
                          </div>
                          <div class="column">
                              <div class="card">
                                  <div class="card-image">
                                    <figure class="image is-4by3">
                                      <img id="imagen_killjoy" src="https://i.pinimg.com/originals/3b/5c/30/3b5c307c5f3b9bf12f89bf9b29f7eff0.jpg" alt="Imagen de killjoy">
                                    </figure>
                                  </div>
                                  <div class="card-content">
                                    <div class="media">
                                      <div class="media-left">
                                        <figure class="image is-48x48">
                                          <img src="https://th.bing.com/th/id/OIP.eX94rt2wWbGpQw-f63qIHAHaCd?rs=1&pid=ImgDetMain"" alt="Placeholder image">
                                        </figure>
                                      </div>
                                      <div class="media-content">
                                        <p class="title is-4">Killjoy</p>
                                        <p class="subtitle is-6">Vandal Lvl: <span id="arma_killjoy">1</span></p>
                                      </div>
                                    </div>
                                
                                    <div class="content">
                                      Vida: <span id="vida_killjoy">100</span> <br>
                                      Ataque: <span id="ataque_killjoy">30</span> <br> <br>
                                      <button id="boton_atacar_jett" class="button is-danger">Atacar Jett</button> <br> <br>
                                      <button id="boton_levelear_killjoy" class="button is-success">Subir de arma</button>
                                    </div>
                                  </div>
                                </div>
                          </div>
                          <div class="column">
                              <div class="card">
                                  <div class="card-image">
                                    <figure class="image is-4by3">
                                      <img id = "imagen_sage" src="https://images5.alphacoders.com/114/1149430.jpg" alt="Imagen de Sage">
                                    </figure>
                                  </div>
                                  <div class="card-content">
                                    <div class="media">
                                      <div class="media-left">
                                        <figure class="image is-48x48">
                                          <img src="https://th.bing.com/th/id/R.aa02c461939269f3b67266a28e97c790?rik=kJxQUJ6rrF1qTg&pid=ImgRaw&r=0" alt="Placeholder image">
                                        </figure>
                                      </div>
                                      <div class="media-content">
                                        <p class="title is-4">Sage</p>
                                        <p class="subtitle is-6">Spectre</p>
                                      </div>
                                    </div>
                                
                                    <div class="content">
                                      Vida: <span id="vida_sage">100</span> <br>
                                      Ataque: <span id="ataque_sage">20</span> <br> <br>
                                    </div>
                                  </div>
                                </div>
                          </div>
                          <div class="column">
                              <div class="card">
                                  <div class="card-image">
                                    <figure class="image is-4by3">
                                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                                    </figure>
                                  </div>
                                  <div class="card-content">
                                    <div class="media">
                                      <div class="media-left">
                                        <figure class="image is-48x48">
                                          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                        </figure>
                                      </div>
                                      <div class="media-content">
                                        <p class="title is-4">John Smith</p>
                                        <p class="subtitle is-6">@johnsmith</p>
                                      </div>
                                    </div>
                                
                                    <div class="content">
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                      <a href="#">#css</a> <a href="#">#responsive</a>
                                      <br>
                                      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                    </div>
                                  </div>
                                </div>
                          </div>
      
                      </div>
                      <div class="columns">
      
                          <div class="column">
                              <div class="card">
                                  <div class="card-image">
                                    <figure class="image is-4by3">
                                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                                    </figure>
                                  </div>
                                  <div class="card-content">
                                    <div class="media">
                                      <div class="media-left">
                                        <figure class="image is-48x48">
                                          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                        </figure>
                                      </div>
                                      <div class="media-content">
                                        <p class="title is-4">John Smith</p>
                                        <p class="subtitle is-6">@johnsmith</p>
                                      </div>
                                    </div>
                                
                                    <div class="content">
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                      <a href="#">#css</a> <a href="#">#responsive</a>
                                      <br>
                                      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                    </div>
                                  </div>
                                </div>
                          </div>
      
                          <div class="column">
                              <div class="card">
                                  <div class="card-image">
                                    <figure class="image is-4by3">
                                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                                    </figure>
                                  </div>
                                  <div class="card-content">
                                    <div class="media">
                                      <div class="media-left">
                                        <figure class="image is-48x48">
                                          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                        </figure>
                                      </div>
                                      <div class="media-content">
                                        <p class="title is-4">John Smith</p>
                                        <p class="subtitle is-6">@johnsmith</p>
                                      </div>
                                    </div>
                                
                                    <div class="content">
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                      <a href="#">#css</a> <a href="#">#responsive</a>
                                      <br>
                                      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                    </div>
                                  </div>
                                </div>
                          </div>
      
                        </div>
      
      
                      <table>
                          <tbody>
                              <tr><td class="verde">20</td><td>4</td></tr>
                              <tr><td class="verde">100</td><td>2</td></tr>
                          </tbody>
                          <thead>
                              <tr><th>Bárbaros</th><th id="pekkas">Pekkas</th></tr>
                          </thead>
                          <tfoot>
                              <tr><td colspan="2">Tabla de ejércitos</td></tr>
                          </tfoot>
                      </table>
                      
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
              <script>
              const jett = {arma: 1, vida: 100, ataque: 30};
              const killjoy = {arma: 1, vida: 100, ataque: 30};

              const boton_levelear_jett = document.getElementById("boton_levelear_jett");

              const subir_jett = () => {
                  jett.arma++;
                  jett.vida += 0;
                  jett.ataque += 10;
              }

              boton_levelear_jett.onclick = () => {
                  subir_jett();
                  const span_arma = document.getElementById("arma_jett");
                  span_arma.innerHTML = jett.arma;
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
                      imagen_killjoy.src = "https://i.etsystatic.com/32017027/r/il/b3827b/3603414309/il_570xN.3603414309_mjdw.jpg";
                      const boton_levelear_killjoy = document.getElementById("boton_levelear_killjoy");
                      boton_levelear_killjoy.style.display = "none";
                      const boton_atacar_jett = document.getElementById("boton_atacar_jett");
                      boton_atacar_jett.style.display = "none";
                  }

                  const span_vida = document.getElementById("vida_killjoy");
                  span_vida.innerHTML = killjoy.vida;
              }

              const subir_killjoy = () => {
                  killjoy.arma++;
                  killjoy.vida += 0;
                  killjoy.ataque += 10;
              }

              boton_levelear_killjoy.onclick = () => {
                  subir_killjoy();
                  const span_arma = document.getElementById("arma_killjoy");
                  span_arma.innerHTML = killjoy.arma;
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
                      imagen_jett.src = "https://www.alertageekchile.cl/wp-content/uploads/2022/04/revive-me-jett.png";
                      const boton_levelear_jett = document.getElementById("boton_levelear_jett");
                      boton_levelear_jett.style.display = "none";
                      const boton_atacar_killjoy = document.getElementById("boton_atacar_killjoy");
                      boton_atacar_killjoy.style.display = "none";
                  }

                  const span_vida = document.getElementById("vida_jett");
                  span_vida.innerHTML = jett.vida;
              </script>
          </body>
      </html>
      `);
      response.end();
      
    } else {

      response.statusCode = 404;
      response.end();
    }



});


    /*
    const datos = [];

    request.on('data', (dato) => {
        console.log(dato);
        datos.push(dato);
    });

    return request.on('end', () => {
        const datos_completos = Buffer.concat(datos).toString();
        console.log(datos_completos);
        const nuevo_dato = datos_completos.split('=')[1];
        return response.end();
    });
    */


server.listen(3000);
