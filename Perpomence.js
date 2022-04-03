/*==================Chapter One================*/

let stirng1 = 'This is a';
let stirng2 = 'Test';
let stirng = stirng1+stirng2;
console.log(stirng);

let oldValue = 'Apple';
 oldValue +=' this is a fuirt';
 //console.log(oldValue)

//Concatenating a String and Another Data Type

let numValue = 23.45;
let total = numValue + ' And the total is';
//console.log(total);

let boolvalue = 3.0;
let strngValue = 'The Value is' + boolvalue;
console.log(strngValue)

//1.3  Conditionally Comparing Strings

//let strName = prompt('What is your name?','');
// if(strName.toUpperCase() == 'JOYNUL'){
// 	console.log('this is your name! Good for you');
// }else{
// 	console.log('this is not your name')
// };

let strOne = 'One';
let strTow = 'Tow';
if(strOne != strTow){
	console.log(true)
}else{
	console.log(false)
};

let strObj = new String('hello world');
let objTrial = 'Shelley';
if(strObj !== objTrial){
	console.log('sucess because data type of ppen');
}else{
	console.log('this is not sucess')
}

let sOne = 'Cat';
let sTow = 'cat';
if(sOne <= sTow){
	console.log(true);
}else{
	console.log(false)
}

let fruit = 'apple';
let furite = 'graps';
let is = furite.localeCompare(fruit);
console.log(is);


//1.4  Finding a Substring in a String

let testValue = 'This is the Cookbooks test string';
let subsValue = 'Cookbook';
let iValue = testValue.indexOf(subsValue);
console.log(iValue);

if(iValue !== -1){
	console.log('sucess');
}else{
	console.log('false');
}

let tsString = 'This apple is my apple';
//let itValue = tsString.indexOf("apple",10);
let itValue = tsString.lastIndexOf("apple");
console.log(itValue);

//Extracting a Substring from a String
var sentence = "This is one sentence.This is a sentence with a list of items: cherries, oranges, apples, bananas,One,Tow,Three";
let strat = sentence.indexOf(':');
let end = sentence.indexOf('.',strat+1)
let list = sentence.substring(strat +1);
console.log(list.split(','));

let strs = 'javaScript Substring';
let substr = strs.substring(5,10);
//let substr = strs.substring(10);
console.log(substr);

let email = 'ithousejoy@gmail.com';
let domain = email.substring(email.indexOf('@')+1);
console.log(domain)

//Checking for an Existing, Nonempty String

//1.7  Breaking a Keyword String into Separate Keywords

// let keyword = prompt('Enter Type your Name!','');
// let arrylist = keyword.split(',');
// let resultSort = '';
// for(let i = 0; i < arrylist.length;i++){
// 	resultSort += 'Name:' + ' ' +arrylist[i] + '</br>'
// };
// let blk = document.getElementById('mother').innerHTML = resultSort;

// Processing Individual Lines of a textarea
 // let somrat = '';
 // let finalFunction = (ek) =>{
 // 	somrat = ek.value;
 // 	document.getElementById('theText').innerHTML = somrat;
 // }

let somRat = '';
let finalFunction = (ebok)=>{
	somRat = ebok.value;
	document.getElementById('theWorld').innerHTML = somRat;
}