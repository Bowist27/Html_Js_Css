let i = 0;

while (i < 3)  {
    if (i % 2 == 0) {
        console.log('Numero par', i);
    }
    i++;
}


// ejecuta la verificacion despues el do while
do {
    if (i % 2 == 0) {
        console.log('Numero par', i);
    }
    i++;
} while (i < 3);