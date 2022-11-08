console.log(Number("10"), typeof Number("10")); // явное
//1
console.log(+"50"); //неявное к Number
console.log(Number("50"), typeof (Number("50"))); //явное
//2
console.log(Number("100")); //явное
//3
console.log("" + 1); //Неявное к String
console.log(String(1), typeof(String(1))); //преобразовал к явному
//4
console.log(String(1)); //явное
//5
console.log(Boolean(0));//явное
//6
console.log(+"001"); //неявное к Number
console.log(Number("001"), typeof (Number("001"))); //преобразовал к явному
//7
console.log(1 + ""); //неявное к string
console.log(String(1), typeof (String(1))); //преобразовал к явному
//8
console.log(Boolean(1)); //явное
//9
console.log(String(001)); //явное
//10
console.log(Number("Hello World"));