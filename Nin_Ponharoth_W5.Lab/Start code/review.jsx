//create object 
export const review = [
    {
        name: "Ronan Ogor", // feel free to replace the name value
        rating: 5, // feel free to replace the rating value
        comment: "This is the best course ever! I learned so much and had a great time doing it.", // feel free to replace the comment value
    } ,
    {
        name: "Ronan Ogor", // feel free to replace the name value
        rating: 5, // feel free to replace the rating value
        comment: "This is the best course ever! I learned so much and had a great time doing it.", // feel free to replace the comment value
    }
];  
export let obj1 = {
    name: "Ronan Ogor", // feel free to replace the name value
    rating: 5, // feel free to replace the rating value
    comment: "This is the best course ever! I learned so much and had a great time doing it.", // feel free to replace the comment value
};

//what we normal use in jsx is map, fliter, reduce, find, etc.
//in jsx it's ok to mix data type, we can use array of object, object, array, string, number, boolean, etc.

//to store in local storage we need to convert the object to string using JSON.stringify() method and to get the data from local storage we need to convert the string back to object using JSON.parse() method.

//to store in local storage
localStorage.setItem("review", JSON.stringify(review));
localStorage.setItem("obj1", JSON.stringify(obj1));

//to get the data from local storage
const reviewFromLocalStorage = JSON.parse(localStorage.getItem("review"));
const obj1FromLocalStorage = JSON.parse(localStorage.getItem("obj1"));



