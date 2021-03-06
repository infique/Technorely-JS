'use strict'
/*=======HW-1=======
Написать функцию, с использованием новых фич ES6. 
Функция на вход принимает массив из трех ЦЕЛЫХ чисел (например [1, 0, -4]), 
которые являются коэффициентами квадратного уравнения.
Далее преобразует массив в квадратное уравнение и выводит его в консоль.
Для  [1, 0, 4] это будет x^2 - 4 = 0

Далее нужно решить это уравнение школьным способом через дискриминант и вывести корни уравнения в консоль в формате 
x1 = ...
x2 = ...
Учтите, что уравнение может иметь 2, 1 или 0 корней. 

Пример вывода в консоль функции, вызванной с параметром [1, 0, -4]:
уравнение: x^2 - 4 = 0
Дискриминант: 16
Корни: 
x1 = 2
x2 = -2
*/
const arr = [1,0,-4];
const quad = (a, b, c) => {
    if(a == 0) return false;
    const d = b**2 - 4*a*c;
    if (d > 0){
        const x1 = (-b + Math.sqrt(d))/(2*a);
        const x2 = (-b - Math.sqrt(d))/(2*a);
        return `Уравнение: ${a}x**2 + ${b}x - ${c} = 0 
                Дискриминант равен: ${d}
                Корней уровнения 2: ${x1} и ${x2}`;
    }else if (d == 0){
        x1 = (-b)/(2*a);
        return `Уравнение: ${a}x**2 + ${b}x - ${c} = 0 
                Дискриминант равен: ${d}
                Корней уровнения 1: ${x1}`;
    }else if (d < 0)
        return `Уравнение: ${a}x**2 + ${b}x - ${c} = 0 
                Дискриминант равен: ${d}
                Корней уровнения нет`;
}
console.log(quad(arr[0],arr[1],arr[2]));
//or
console.log(quad(1, 0, -4));