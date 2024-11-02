// arr = nariya var podlam
// obj la multiple visyam panamudiyu
let myObject ={
    title: 'html,css,js',
    authour: 'yuvasri',
    courseDescription: 'here comes course description',
    price: '10000rs',
    language: 'native'// see obj na evlo vena store panl with a structure 

}
console.log(`my course title is ${Object.authour}!!! its price ${myObject.price}`);
// . dot potu func pana method soluvanga
printPrice: function() {
    console.log('hi this from printprice');
},
log: function (data){
    console.log(data);
},
changePrice: function (newPrice ) {
//price = newPrice;// not defined shows o/p
console.log(this);
},
changePrice: function(newPrice){
    this.price = newPrice;
}
console.log('my course title is$ {myobject.title}its price is ${myObject.price} ');
myObject.price = '2000rs'
myObject.changePrice('500rs');
