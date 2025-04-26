// Array.prototype.flat(depth)

// розгладжує масив до вказаної глибени по замовчуванню глибина 1

const numberArray = [3, [8, 2, 3], 8, 2, 3, [9, 4, 10, 2, [8, 2, [3], 1]], 6];

const newNumberArray = numberArray.flat(3); 

console.log(newNumberArray);