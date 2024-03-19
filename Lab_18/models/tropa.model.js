const db = require('../util/database');

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
        return db.execute(
            `INSERT INTO tropa (clase, imagen, nivel, vida, ataque) 
            VALUES (?, ?, ?, ?, ?)`, 
            [this.clase, this.imagen, this.nivel, this.vida, this.ataque]);
    }
    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('Select * from tropa')
    }




    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }
    static fetchOne(id) {
        return db.execute('Select * from tropa WHERE id = ?', [id]);
    }

}