let myTodos = ['go to gym','record 20 vidoes today','buy a phone'];
myTodos.push('goto explore'); //add or insert the given .also insert last of arr
myTodos.unshift('meditation')// insert inex of array


myTodos.forEach(function(todo ,pos){
    console.log(`${pos +1}.{todo}`);//foreach loop
})
// let myTodos = [];
// myTodos.push('eat');
// myTodos.push('work');
// myTodos.push('code'); this an another method of code
// myTodos.push('pratice');
// myTodos.push('develop');
// console.log(myTodos);

for(i = 0; i < myTodos.length; i++){
    console.log(`${i}.${myTodos[i]}`);
};