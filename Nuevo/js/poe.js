const netflix = {votos: 0};

const boton_vota_netflix = document.getElementById("boton_vota_netflix");
boton_vota_netflix.onclick = () => {
    console.log("click");
}

const subir_votos_netflix = () => {
    netflix.votos++;
}

boton_vota_netflix.onclick = () => {
    console.log(netflix.votos);
    subir_votos_netflix();
    const span_votos=document.getElementById("votos_netflix");
    span_votos.innerHTML = netflix.votos;
}