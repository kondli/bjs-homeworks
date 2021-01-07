"use strict"

function getResult(a,b,c) {
    
    let x= [];
    let d = Math.pow(b, 2) - 4 * a * c;
    
    if (d === 0) {
        x = [(-b / 2 * a)];
    } else if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / 2;
        let x2 = (-b - Math.sqrt(d)) / 2;
        x = [x1, x2];
    }
 
    return x;
}



function getAverageMark(marks) {  
  if (marks.length > 0) {
    marks =  marks.splice(0, 5); 
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
       sum += marks[i]
      } 
      return sum / marks.length;
    } 
    return 0; 
}


function askDrink(names,dateOfBirthday){
  let age = new Date().getFullYear() - dateOfBirthday.getFullYear()
  let result;
    if (age > 18) {
      result = `Не желаете ли олд-фэшн, ${names}?`;
    } else {
      result = `Сожалею, ${names}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    }
  return result;
}









