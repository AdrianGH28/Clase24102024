//arreglo
/*
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

*/

//elminar elementos

/*
let array = ["dato1","dato2","dato3"];
array.push("dato4");
console.log(array[3]);

//eliminar
array.splice(2,2);
console.log(array);
*/
let tareas = [];

function agregarTarea(){
    let tarea = document.getElementById("tarea").value;
    if(tarea === ""){
        alert("Necesitas agregar una tarea.");
    }else{
        tareas.push(tarea);
        mostrarTareas();
        document.getElementById("tarea").value="";
    }
}

function mostrarTareas(){
    let listaTareas = document.getElementById("ListaTareas");
    listaTareas.innerHTML = "";

    for ( let i = 0; i<tareas.length; i++){
        li.innerHTML = tareas[i] + `<button onclick="eliminarTareas(${i})">Eliminar</button>`;
        listaTareas.appendChild(li);
    }
}

function eliminarTareas(indice){
    tareas.splice(indice, 1);
    mostrarTareas();
}