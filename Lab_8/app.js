filesystem = require("fs");

//Funcion Arreglo de numeros, devuelve el promedio
const arreglo_1 = [1, 2, 3, 4, 5];
let num_prom = 0;

const promedio = (arreglo_1, num_prom) => {
    for (let item of arreglo_1){
        num_prom += item;
    }
    num_prom = num_prom / arreglo_1.length;
    console.log(num_prom);
}

promedio(arreglo_1,num_prom);

const EscribirArchivo = (Titulo,Texto) =>{
    filesystem.writeFileSync(Titulo,Texto);
}

// Una función que reciba un string y escriba el string en un archivo de texto.
const textoEscribir = "Hola Mundo";
EscribirArchivo (textoEscribir,"archivo.txt")

class MinStack {
    constructor() {
        this.arr = [];
        this.minArr = [];
    }

    push(val) {
        this.arr.push(val);
        if (this.minArr.length === 0) {
            this.minArr.push(val);
        } else {
            const minVal = Math.min(val, this.getMin());
            this.minArr.push(minVal);
        }
    }

    pop() {
        this.arr.pop();
        this.minArr.pop();
    }

    top() {
        return this.arr[this.arr.length - 1];
    }

    getMin() {
        return this.minArr[this.minArr.length - 1];
    }
}

// Ejemplo de uso:
const minStack = new MinStack();
minStack.push(3);
minStack.push(5);
minStack.push(2);
console.log("Minimum value:", minStack.getMin()); // Output: 2
minStack.pop();
console.log("Top value:", minStack.top()); // Output: 5
console.log("Minimum value:", minStack.getMin()); // Output: 3

const http = require ("http");
const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write(`<!DOCTYPE html>
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
        <script src="js/poe.js"></script>
    </body>
</html>
    `)
    response.end();
});

server.listen(3000);