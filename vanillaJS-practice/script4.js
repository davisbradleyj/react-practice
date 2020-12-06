function findBiggestFraction (a,b) {
console.log("The Function is running");
  let result;
  a > b ? result= ['firstFraction', a] : ['secondFraction', b]
  return result
}

let firstFraction = 3/4;
let secondFraction = 5/7;

let fracRes = findBiggestFraction(firstFraction,secondFraction);

console.log("FirstFraction result: ", firstFraction);
console.log("SecondFraction result: ", secondFraction);
console.log("Fraction " + fracRes[0] + " with a value of " + fracRes[1]+ " is the biggest!" )

// *************** Module 7 ***************

let biggest = function(a,b) {
  let result;
  a > b ? result = ["a :", a] : result = ["b :", b]
  return result;
}
console.log(biggest(7/9, 13/25));

// *************** Module 8 ***************

const NEWCONSTANT = 5;
console.log(NEWCONSTANT);
// NEWCONSTANT = 6; // will generate error, but you know that, a CONSTANT is a CONSTANT!

function logScope() {
  var localVar = 2;

  if (localVar) {
    let localVar = 'Different result';
    console.log('nested var: ', localVar);
  }

  console.log('logScope localVar: ', localVar);
} 

logScope();


// *************** Module 9 ***************

var course = new Object(); // new MUST be lowercase!

course.title = 'JS Essential Training';
course.instructor = 'MRH';
course.level = 1;
course.published = true;
course.views = 0;

var course = {
  title: 'JS Essential Training',
  instructor: 'MRH',
  level: 1,
  published: true,
  views: 0,
  updateViews: function() {
    return ++course.views;
  }
}

console.log(course.views);
course.updateViews();
console.log(course.views);

// *************** Module 10 ***************

function Course(title,instructor,level,published,views ) {
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;
  this.updateViews = function() {
    return ++this.views;
  };
}


let course1 = new Course('JS Essentials','MRH',1,true,0);
console.log(course1);
let course2 = new Course('Up and Running with ES6','EP',1,true,123456)
console.log(course2);

let courses = [
  new Course('JS Essentials','MRH',1,true,0),
  new Course('Up and Running with ES6','EP',1,true,123456),
];
console.log(courses);

// *************** Module 12 ***************

function doSomeMath() {
	var a = 5;
	var b = 4;
  
  function multiply () {
    let result = a*b
    return result;
  }

  return multiply;
}

var theResult = doSomeMath();

console.log("The result: ", theResult);

function giveEms(pixels) {
  let base = 16;

  function doMath() {
    return pixels/base;
  }

  return doMath;
}

let smallSize = giveEms(12);
let medSize = giveEms(18);
let largeSize = giveEms(24);
let xlSize = giveEms(32);

console.log('Small: ', smallSize() );
console.log('Med: ', medSize() );
console.log('Lg: ', largeSize() );
console.log('XL: ', xlSize() );