"use strict"

function getResult(a,b,c) {
    
    let x;
    let d = Math.pow(b, 2) - 4 * a * c;
    if (d < 0) {
        x = []; 
    } else if (d === 0) {
        x = [(-b / 2 * a)];
    } else {
        let x1 = (-b + Math.sqrt(d)) / 2;
        let x2 = (-b - Math.sqrt(d)) / 2;
        x = [x1, x2];
    }
 
    return x;
}

getResult(a,b,c);


function getAverageMark(marks) {  
  let averageMark;
  if (marks.length === 0) { 
    averageMark = 0;
  } else  {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
       sum += marks[i];
       averageMark = sum / marks.length;
       if (marks.length > 5) {
        marks =  marks.splice(0, 5);
        console.log('Оценок больше 5');
      } 
    } 
  }
    return averageMark; 
} 
getAverageMark(marks);




function askDrink(names,dateOfBirthday){
  let yearOfBirthday = dateOfBirthday.getFullYear();
  let year = new Date().getFullYear();
  let age = year - yearOfBirthday;
  let result;
    if (age > 18) {
   
    result = `Не желаете ли олд-фэшн, ${names}?`;

    } else {
      result = `Сожалею, ${names}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    }
  return result;
}
askDrink(names,dateOfBirthday);








