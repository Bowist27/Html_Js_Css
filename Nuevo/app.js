
const html_header = `
<!DOCTYPE html>
<html>
        <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Cuevana</title>
                <link rel="shortcut icon" href="../images/fav_icon.png" type="image/x-icon">
                <!-- Bulma Version 1-->
                <link rel="stylesheet" href="https://unpkg.com/bulma@1.0.0/css/bulma.min.css" />
                <script defer src="https://use.fontawesome.com/releases/v5.0.10/js/all.js"></script>
        </head>

        <body>
            <nav class="navbar is-dark">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src="https://i.pinimg.com/736x/d8/88/6b/d8886bf3bae093401910d62ff6938e7a--cinema-online.jpg" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
                    </a>
                    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div id="navbarExampleTransparentExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item" href="https://bulma.io/">
                            Peliculas
                        </a>
                        <a class="navbar-item" href="https://bulma.io/">
                            Series
                        </a>
                        <a class="navbar-item" href="https://bulma.io/">
                            Vota
                        </a>
                        <a class="navbar-item" href="https://bulma.io/">
                            Agregar 
                        </a>
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link" href="/documentation/overview/start/">
                                More
                            </a>
                            <div class="navbar-dropdown is-boxed">
                                <a class="navbar-item" href="/documentation/overview/start/">
                                    FAQ
                                </a>
                                <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                                    Social Media
                                </a>
                                <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                                    Resources
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
    `;


const html_footer = `
    <footer class="footer">
        <div class="container">
            <div class="content has-text-centered">
                <p>
                    <a href="">
                        <i class="fab fa-facebook-square fa-2x"></i>
                    </a>
                    <a href="">
                        <i class="fab fa-twitter-square fa-2x"></i>
                    </a>
                    <a href="">
                        <i class="fab fa-instagram fa-2x"></i>
                    </a>
                    <a href="">
                        <i class="fab fa-snapchat fa-2x"></i>
                    </a>
                </p>
                <p>
                    <a href="https://bulma.io">
                        <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
                    </a>
                </p>
            </div>
        </div>
    </footer>
    <script src="js/poe.js"></script>
</body>
</html>
`;

const plataformas = [
    {
        nombre: "Netflix ",
        imagen: "https://th.bing.com/th/id/OIP.olf7URQhTf1dmf564nc1_QHaD4?w=1500&h=785&rs=1&pid=ImgDetMain",
        votos: 0;
        link: "https://www.netflix.com/mx-en/",
    },
    {
        nombre: "Amazon Prime Video",
        imagen: "https://th.bing.com/th/id/OIP.frhcgzKI2Bm-Qr4Wcc4YowHaEW?rs=1&pid=ImgDetMain",
        votos: 0;
        link: "https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_cpb_mx_dc_s_b_mkw_Fa7A4Bdc-dc?mrntrk=pcrid_77515746168256_slid__pgrid_1345802253479726_pgeo_144400_x__adext__ptid_kwd-84112650178895:loc-119",
    },
    {
        nombre: "HBO MAX",
        imagen: "https://th.bing.com/th/id/OIP.hSHdrZaZhTlVGaot5Z0mygHaF7?rs=1&pid=ImgDetMain",
        votos: 0;
        link: "https://www.max.com/mx/es",
    }
];

const express = require('express');
const app = express();

app.listen(3000);