let user = {
    id: 1,
    name: 'Pepe',
    age: 25,
};

for (let propiedad in user) {
    console.log(propiedad, user[propiedad]);
}