const { Link } = require("react-scroll");

let one = 'one';
let two = 'two';
let heros =['ornman','loveman','moodman','myman'];
    // foreach iterate the func () this ( put a function), acutually foreachnis  function but we put naother function in foreach as iterate
    heros.forEach(function sayHello(){// entha ilatha peru callback func like the sayhello words place
        console.log(`hi`);//oru oru  element kum oru function run panum
    });// but callback function ethuku nambha reutnr call pana thana athu ethuku name lam vestu soli verum () ipdi bracket la vechu foreach la call panlam solranga
    // name ilama  oru func patha thats a calback 
    heros.forEach(function(hero, position){
        console.log(`${position+1}.${hero}`);
    });
    let days = ['mon','tue','wed','thurs','fri','sat']
    days.forEach(function(day,position){
        console.log(`${position+1}.${day}`);
// day or hero is vaar name + position kuda mention antha var given name ok
    });