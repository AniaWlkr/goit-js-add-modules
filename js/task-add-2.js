// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
const Calculator = function () {
    this.a;
    this.b;
    this.read = function () {
        this.a = prompt("please enter amount");
        this.b = prompt("please enter amount");
    }
    this.sum = function () {
        let sum = 0;
        sum = Number(this.a) + Number(this.b);
        return sum;
    }
    this.mult = function () {
        let sum = 0;
        sum = Number(this.a) * Number(this.b);
        return sum;
    }
};
// Number.prototype.foo = function (n) {
//     // return this ** n;
//     let sum = 1;
//     for (let i = 1; i <= n; i++) {
//         sum *= this;
//     }
//     console.log(sum);
//     return sum;
//     }
// const number = new Number(5);
Calculator.prototype.pow = function () {
return Number(this.a) ** Number(this.b);
// let sum = 1;
// for (let i = 1; i <= n; i++) {
//     sum *= this.a;
// }
// return sum;
}
// Calculator.prototype.pow = function (n) {
//     return Number(this.a).foo(n);
// }
// String.prototype.toUpper = function () {
//     return this.toUpperCase();
// }
// console.log(‘abrabra’.toUpper());
let calculator = new Calculator();
calculator.read();
// // alert( “Sum=” + calculator.sum() );
// // alert( “Mult=” + calculator.mult() );
alert("Pow=" + calculator.pow());