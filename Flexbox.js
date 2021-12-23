// function tongHaiSo(a, b, c, d, e, f) {
//     // let c = arguments[0] + arguments[1];
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
//     console.log(arguments[3]);
//     console.log(arguments[4]);
//     console.log(arguments[5]);
// }

// // Tính tổng hai số 2, 3
// tongHaiSo(4, 3, 3, 4, 5, 6);

function a() {
    console.log('A');
}

let x = a(); // A
console.log(x); // undefined

function b() {
    console.log('B');
    return a;
}
let y = b(); // B
console.log(y); // return function a

function c() {
    console.log('C');
    return a();
}
let z = c(); // C A
console.log(z); // return undefined 