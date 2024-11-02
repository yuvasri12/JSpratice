let name1 = 'yuva';
const name2 = 'somename';
// name1 = 'raaja'; we can thism let but not const right
var name3 = 'var';
// why var is old version of js ,but let & cons is new of js
// let & constant is global variable 
if (true){
    let yuva = "somevalue";
    console.log(yuva);
    console.log(name1);
}
console.log(name1);
console.log(yuva);
// var na global but let & cosnt should this statement print its called scope of variable.
if (true) {
    let yuva1 = 'variable2';
    console.log(yuva1);// we already yuva but it erase it and then again decalre in the certain statement

}
console.log('yuva');