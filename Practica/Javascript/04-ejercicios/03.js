/**
 * Indfice validar que no sea menor a 0 y 
 * que el elemento exista en el array
 */


function getbyIdx(arr, idx) {
    if (idx < 0 || arr.lenght <= idx) {
        return 'Elemento no existe';
    }

    return arr[idx];
}
let resultado = getbyIdx([1, 2], 1);
console.log(resultado);