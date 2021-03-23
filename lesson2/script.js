// var a = 1, b = 1, c, d;
// c = ++a; alert(c);
// //2 в префисной форме икремент возвращает значение операнда с добавленной к нему единицей; .*/
//
// d = b++; alert(d);           // 1 В постфиксной форме сначала произошло только возрат самого знаения b.
// // F потом выполнит инкрементирование
//
// c = (2+ ++a); alert(c);      // 5 (2 уже вывелось и теперь увеличилось на 1, то есть стало 3. 2 + 3 = 5),
// // а потом, а так как приоритет у унарных выше
// d = (2+ b++); alert(d);      // 4  (постфиксная форма = 1, выполняется инкремент( +1) + арифметическое сложение +2
// alert(a);                    // 3 (берет значение из вычисленного уравененис С ( строчка 7)
// alert(b);               // 3 ( изнчачальный b + икермент из строчки 5 и искремент из строчки 9
//
//2

// let a = 2;
// let x = 1 + (a *= 2); //4 + 1 = 5
// alert(x);
//

// //3
//let a = 5;
// let b = 2;
// if (a >= 0 && b >= 0) {
//    x = a - b;
//
// } else if (a < 0 && b < 0) {
//     x = a * b;
// }
// else { //(a >= 0 && b < 0 || a < 0 && b >= 0)//
//     x = a + b;
// }
//
// alert(x);
//
// //
// // let a= 5;
// // let b = -2;
// // let x = (a >= 0 && b >= 0) ? (a - b):
// //     (a < 0 && b < 0) ? (a * b):(a + b);
// // alert(x);
//
// //4


// function sum(a, b) {
//     return (a + b);
// }
// function subt(a, b) {
//     return (a - b);
// }
// function increase(a, b) {
//     return (a * b);
// }
//
// function div(a, b) {
//     return (a / b);
// }
//5
//function mathOperation(arg1, arg2, operation) {
    //     switch (operation) {
    //         case '+' :
    //             return sum(arg1, arg2);
    //             break;
    //         case '-' :
    //             return subt(arg1, arg2);
    //             break;
    //         case '*' :
    //             return increase(arg1, arg2);
    //             break;
    //         case '/' :
    //             return div(arg1, arg2);
    //             break;
    //     }
    