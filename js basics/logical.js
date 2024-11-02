// &&  is comapare if both true na apply that. both side should be true
let islogged =  true;
let payment = true;
 if(islogged && payment) {
    console.log('watch videos');
 }
 // ||= or operatoris only any one side condtion is true
 let glogin = true;
 let fblogin = false;
 // any one has login na ok as have a acc right 
 if (glogin || fblogin) {
    console.log('you have been logined in...');
 }else{
    console.log('please login frst')
 }