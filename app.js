/*
1. Write a function that creates a closure and returns a function that can add
a specific number to any number passed to it. For example, if the closure is
created with 5, the returned function should add 5 to any number passed
to it.
*/
// function addNumber(num) {
//     return function(x) {
//       return x + num;
//     }
//   }
//   const addFive = addNumber(5);
//   const result = addFive(10);
//   console.log(result);

/*
2. Write a recursive function that searches an array for a specific value. The
function should return true if the value is found, and false if it is not. You
can assume that the array is not nested.
*/

// function searchArray(array, value) {
//     // Base case: array is empty
//     if (array.length === 0) {
//       return false;
//     }
//     // Check if first element of array matches value
//     if (array[0] === value) {
//       return true;
//     }
//     // Recursive case: search rest of array
//     return searchArray(array.slice(1), value);
//   }
//   const myArray = [1, 2, 3, 4, 5];
//   const searchValue = 4;
  
//   const result = searchArray(myArray, searchValue);
//   console.log(result); // Output: true

/*
3. Write a function that adds a new paragraph element to the bottom of an
HTML document. The function should take a string argument that will be
used as the text content of the new paragraph element.
*/
// function addNewParagraph(text) {
//     const newParagraph = document.createElement('p'); // Create a new <p> element
//     const paragraphText = document.createTextNode(text); // Create a text node with the passed text
//     newParagraph.appendChild(paragraphText); // Add the text node to the new <p> element
//     document.body.appendChild(newParagraph); // Add the new <p> element to the end of the <body> element
// }

// addNewParagraph('This is Muhamamd Ahmed');

/*
4. Write a function that adds a new list item to an unordered list in an HTML
document. The function should take a string argument that will be used as
the text content of the new list item.
*/

// function addNewListItem(text) {
//     const ulElement = document.querySelector('ul'); // Get the unordered list element
//     const newListItem = document.createElement('li'); // Create a new list item element
//     newListItem.textContent = text; // Set the text content of the new list item
//     ulElement.appendChild(newListItem); // Append the new list item to the unordered list element
//   }
  
  
//   addNewListItem('This is Muhammad Ahmed');
//   addNewListItem('Age 21');

/*
5. Write a function that changes the background color of an HTML element.
The function should take two arguments: the first argument is a reference
to the HTML element, and the second argument is a string representing
the new background color.
*/

// function changeBackgroundColor(element, color) {
//     element.style.backgroundColor = color;
//   }
//   const myElement = document.getElementById('my-element');
//   changeBackgroundColor(myElement, 'red');
    
/*
6. Write a function that saves an object to localStorage. The function should
take two arguments: the first argument is a string representing the key to
use for storing the object, and the second argument is the object to store.
*/
// function saveObjectToLocalStorage(key, object) {
//     localStorage.setItem(key, JSON.stringify(object));
//   }
//   const myObject = { name: 'Ahmed', age: 21, city: 'Karachi' };
//   saveObjectToLocalStorage('my-object', myObject);

/*
7. Write a function that retrieves an object from localStorage. The function
should take one argument, which is a string representing the key used to
store the object. The function should return the object.
*/
// function getObjectFromLocalStorage(key) {
//     const objectString = localStorage.getItem(key);
//     return JSON.parse(objectString);
//   }
//   const myObject = getObjectFromLocalStorage('my-object');
//   console.log(myObject);

/*
8. Write a function that takes an object and saves each property to
localStorage using the property name as the key and the property value as
the value. The function should also retrieve the object from localStorage
and return it as a new object.
*/
// function saveObjectPropertiesToLocalStorage(object) {
//     // Save each property to localStorage
//     for (const [key, value] of Object.entries(object)) {
//       localStorage.setItem(key, JSON.stringify(value));
//     }
    
//     // Retrieve the object from localStorage
//     const newObject = {};
//     for (const key in object) {
//       const value = JSON.parse(localStorage.getItem(key));
//       newObject[key] = value;
//     }
    
//     return newObject;
//   }
//   const myObject = { name: 'Ahmed', age: 21, city: 'Karachi' };
//   const newObject = saveObjectPropertiesToLocalStorage(myObject);
//   console.log(newObject);
    