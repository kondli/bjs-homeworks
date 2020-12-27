 /*
	Кратко о работе с функциями:
	1) Значения в скобках - это аргументы, которые мы получаем в момент вызова функции. Их и надо присваивать требуемым в заданиях переменным.
	2) После ключевого слова return вместо комментария необходимо написать переменную либо выражение с ответом.
	3) console.log() прописывать не обязательно, т.к. команда return уже означает вывод результата работы функции.
 */
let algebra;
let geography;
let physics;

function averageMark(a, g, p) {
	
    let result =(a + g + p)/3;
	return result;
}

averageMark(algebra, geography, physics);

let myName;
function sayHello(userName) {
	 let greeting = `Привет, мир! Меня зовут ${userName}`;
	return greeting;
}

sayHello(myName);


let x = 2;
let y = 22;
let z = 0;
function calculateFormula() {
    
	let result = x * y + 5 * z + x - 1;
    return result;
}

calculateFormula();
