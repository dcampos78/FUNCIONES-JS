//**Iteración #4: Calcular el promedio**

//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberslist) {
    let avg = 0;
    for (let i = 0; i <numberslist.length; i++){
            avg += numberslist[i] / numberslist.length;
           }
         return avg;
    }

    console.log(average(numbers));