'use strict'
//=======HW-1=======
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
// or
    console.log(quad(1, 0, -4));
