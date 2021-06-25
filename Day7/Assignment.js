/*
Q1.Write a JavaScript program to list the properties of a JavaScript object. 
Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
Sample Output: name,sclass,rollno
*/

var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log((Object.keys(student)).join(','));



/*
Q2.Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. 
Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
*/

var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
console.log(student.length);



/*
Q3.Write a JavaScript program to get the length of a JavaScript object.  
Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
*/

var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
console.log(Object.keys(student).length);



/*
Q4.Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. 
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 
*/

var library = [ 
    {author: 'Bill Gates', 
     title: 'The Road Ahead',                 
     readingStatus: true }, 
    
    {author: 'Steve Jobs', 
     title: 'Walter Isaacson',                 
     readingStatus: true }, 
    
    {author: 'Suzanne Collins', 
     title: 'Mockingjay: The Final Book of The Hunger Games', 
     readingStatus: false }
  ]; 
 
 for(let i = 0; i < library.length; i++){
   
   var book = library[i].title + " by " + library[i].author + ": ";
   if(library[i].readingStatus)
     console.log(book + "Already read");
   else
     console.log(book + "Still left to read");
   
 }

 /*

Q5.Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. 
Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. 
Try To Attempt : Difficult Level Increased 
*/

function cylinder(r, h){

  this.r = r;
  this.h = h;
}

cylinder.prototype.volume = function(){

  return Math.PI * this.h * this.r * this.r;
};

var cyl = new cylinder(2, 7);
console.log('volume:', cyl.volume().toFixed(4));

/*
Q6. Write a JavaScript program to sort an array of JavaScript objects.  
Sample Object : 
var library = [ 
  { title: 'The Road Ahead', 
    author: 'Bill Gates', 
    libraryID: 1254 }, 

    { title: 'Walter Isaacson', 
    author: 'Steve Jobs', 
    libraryID: 4264 }, 
    
    { title: 'Mockingjay: The Final Book of The Hunger Games', 
    author: 'Suzanne Collins', 
    libraryID: 3245 }
  ]; 
  Expected Output: 

 [[object Object]{ 
    author: "Walter Isaacson", 
    libraryID: 4264, 
    title: "Steve Jobs" 
 },[object Object] { 
      author: "Suzanne Collins", 
      libraryID: 3245, 
      title: "Mockingjay: The Final Book of The Hunger Games" 
 },[object Object] { 
   author: "The Road Ahead", 
   libraryID: 1254, 
   title: "Bill Gates" 
}]
*/

var library = [ 
  {
      title: 'Bill Gates',
      author: 'The Road Ahead',
      libraryID: 1254
  },
  {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      libraryID: 4264
  },
  {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      libraryID: 3245
  }];

var sort_by = function(field_name, reverse, initial){

  var key = initial ?
      function(x)
            {
              return initial(x[field_name]);
            } :
      function(x) 
            {
              return x[field_name];
            };

  reverse = !reverse ? 1 : -1;

  return function (x, y) {
      return x = key(x), y = key(y), reverse * ((x > y) - (y > x));
    } ;
};


var newobj = library.sort(sort_by('libraryID', true, parseInt));

console.log(newobj);







