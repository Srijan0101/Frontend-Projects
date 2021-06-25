/* 
Q1.Write a JavaScript function to check whether an `input` is an array or not
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
True
*/

function is_array(a){
    return Array.isArray(a);
}
  
console.log(is_array('w3resource'));
console.log(is_array([1,2,4,0]));



/*
Q2.Write a JavaScript function to clone an array
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]
*/

function array_Clone(arr){

    const clone = arr.slice(0);
    return clone;
}

console.log(array_Clone([1,2,4,0]));
console.log(array_Clone([1,2,[4,0]]));



/*
Q3.Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]
*/

function first(arr, n=1){
    if(n<0)return [];
    return arr.slice(0,n);
}
  
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));



/* 
Q4.Write a simple JavaScript program to join all elements of the following array into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
*/

function join_them(arr, symb){

    return arr.join(symb);
}

myColor = ["Red","Green","White","Black"];
console.log(join_them(myColor, '+'));
console.log(join_them(myColor, ','));



/*
Q5.Write a JavaScript program to find the most frequent item of an array
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times ) 
*/

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var c = 1;
var c1 = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 c1++;
                if (c<c1)
                {
                  c=c1; 
                  item = arr1[i];
                }
        }
        c1=0;
}
console.log(item+" ( " +c +" times ) ") ;