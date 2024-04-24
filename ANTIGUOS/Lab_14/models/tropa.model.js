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

module.exports = class Tropa {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_clase, mi_vida, mi_ataque, mi_imagen) {
        this.clase = mi_clase;
        this.nivel = 1;
        this.vida = mi_vida;
        this.ataque = mi_ataque;
        this.imagen = mi_imagen;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        tropas.push({
            clase: this.clase,
            nivel: this.nivel,
            vida: this.vida,
            ataque: this.ataque,
            imagen: this.imagen,
        }); //Es lo mismo que tropas.push(this);
    }
    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return tropas;
    }
}