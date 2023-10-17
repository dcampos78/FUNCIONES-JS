//**Iteración #4: Calcular el promedio**

//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numbers) {
    let avg = 0;
    for (let i = 0; i <numbers.length; i++){
            avg += numbers[i] / numbers.length;
           }
         return avg;
    }

    console.log(average(numbers));