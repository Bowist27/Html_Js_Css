// bit: 0 o 1
// Byte: 8 bits
// Byte: 00000000 -> 0
// Byte: 00000001 -> 1
// Byte: 00000010 -> 2
// Byte: 00000011 -> 3
// Byte: 00000100 -> 4
// Byte: 00000101 -> 5
// Byte: 00000110 -> 6

// Escribir numeros con forma matematica de decimal a matematica

// Decimal: 0,1 2 3 4 5 6 7 8 9 10

console.log(1 | 3); // 00000011
console.log(1 | 4); // 00000101

//Ambos bits deben ser 1 para que lo marque como 1
console.log(1 & 3); // 00000011
console.log(1 &  4); // 00000101


//&