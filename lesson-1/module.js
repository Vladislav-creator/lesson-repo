//Дана строка Выведите только числа массивом из строки(не отдельно каждую цифру, а [28, 1977])
const str = "Vladislav Beketov was born on 28 February 1977";

const strArr=str.split(" ");
const newArr=[];
for (const strword of strArr) {


	if(Number.isNaN(Number.parseInt(strword))){
	continue;
	}

	newArr.push(strword)
}

console.log(newArr);

//Создать функцию, которая  принимает масив положительных чисел и строк и отфильтровывает в новый масив только числа, если число будет в масиве записано как строка оно тоже должно быть отфильтровано