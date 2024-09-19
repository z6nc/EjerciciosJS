/*
Requerimientos:
Crea un array tasks que almacenará las tareas como objetos.

Cada tarea será un objeto con las siguientes propiedades:
id: Un identificador único para cada tarea.
description: La descripción de la tarea.
completed: Un booleano que indica si la tarea está completada o no.
Funciones que debes implementar:

addTask(tasks, description): Agrega una nueva tarea al array tasks con una descripción proporcionada. El id debe ser único y generado automáticamente, y la tarea debe comenzar como no completada (completed: false).
removeTask(tasks, id): Elimina la tarea que coincida con el id proporcionado.
markAsCompleted(tasks, id): Marca como completada la tarea que coincida con el id proporcionado.
getTasks(tasks): Retorna todas las tareas.
getCompletedTasks(tasks): Retorna todas las tareas que estén completadas.
getPendingTasks(tasks): Retorna todas las tareas que no estén completadas.
Ejemplo de uso:

*/

// Array de tareas
let tasks =[];

// ADD TASK
function addTask(tasks, description) {
    const newTask = {
        id: tasks.length + 1, // Genera un id único.
        description: description,
        completed: false
    };
    tasks.push(newTask);
}

addTask(tasks, 'Aprender JavaScript');
addTask(tasks, 'Completar ejercicio técnico');
addTask(tasks, 'Revisar correo');


//  LOOK TASKS
function getTasks(tasks){
    return tasks;
}

// console.log(getTasks(tasks)); 



function markAsCompleted(tasks, id){
     const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = true;
    } else {
        console.log(`Tarea con id ${id} no encontrada.`);
    }
}
markAsCompleted(tasks, 2);

function getCompletedTasks(tasks) {
   return tasks.filter(task => task.completed);
      
  }
  

// console.log(getCompletedTasks(tasks)); 

function getPendingTasks(tasks) {
   return tasks.filter(task => task.completed === false );
      
  }
// console.log(getPendingTasks(tasks)); 

function removeTask(tasks, id){
      const indice = tasks.findIndex(tasks => task.id === id);
      tasks.splice(indice,1)
      return  tasks
}
removeTask(tasks, 3);
console.log(getTasks(tasks)); 
