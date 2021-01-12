"use strict"

function getSolutions(a, b, c) {
    let D = Math.pow(b, 2) - 4 * a * c;
    let x1;
    let x2;
    if (D < 0) {
        return {
            D,
            roots: [],
        }
    } else if (D === 0) {
        x1 = [(-b / (2 * a))];
        return {
            D,
            roots: [x1],
        }
    } else {
        x1 = (-b + Math.sqrt(D)) / 2;
        x2 = (-b - Math.sqrt(D)) / 2;
        return {
            D,
            roots: [x1, x2],
        }
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions( a, b, c );
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log("Уравнение не имеет вещественных корней");
    } else if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
        } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`); 
    }      
}




showSolutionsMessage(2, 4, 2);

function getAverageScore(data) {
    let  average = [];
    for(let prop in data) {
        data[prop] = getAverageMark(data[prop]); 
        average.unshift(data[prop]); 
    }
    data.average = getAverageMark(average);
    return data;
}

 function getAverageMark(marks) {  
     let sum = 0;
    for (let i = 0; i < marks.length; i++){
        sum += marks[i];
    }
    if (marks.length === 0) {
        return 0;
    }
    return sum/marks.length;
  }
  
getAverageScore ({
    algebra: [],
    geometry: [],
    russian: [],
    physics: [],
    music: [],
    english: [],
    poetry: [],
    chemistry: [],
    french: []
}) 




console.log(getPersonData({
    aaa: 0,
    bbb: 1,
}));

function getPersonData(secretData) {
    const trueData = {
        firstName: getDecodedValue(secretData.aaa),
        lastName: getDecodedValue(secretData.bbb),
    }
   return trueData;
}

function getDecodedValue(secret) {
    
    if (secret === 0){
        return "Родриго";
    }  
    return "Эмильо";
    
}



