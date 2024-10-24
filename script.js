//arreglo

let array = ["dato1",1,Boolean];
console.log(array);
console.log("tamaño array: " + array.length);
array.push["5"];
console.log(array[2]);
console.log("nuevo tamaño: "+  array.length);
console.log(array[1]);


let tabla = [];
for(let i=1; i<11; i++){
    tabla.push('5 * ' + i + ' = ' + 5*i);
}

for(let i= 0; i<tabla.length; i++){
    if(i<=5){
    console.log(tabla[i]);
}
}

console.log("Fin del arreglo, valor de la posicion: "+ tabla[5]);
