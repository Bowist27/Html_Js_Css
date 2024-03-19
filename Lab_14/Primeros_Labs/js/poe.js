//Agente

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
}