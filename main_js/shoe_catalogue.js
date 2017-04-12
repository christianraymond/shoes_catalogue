var content = document.querySelector("#shoeDetails");

var shoeBrands = document.querySelector("#brandName");
var shoeColors = document.querySelector("#shoeColor");
var shoeSizes = document.querySelector("#shoeSize");
var userButton = document.querySelector(".searchButton");

     
//From here I think I need help, I am not sure how to make the search button listen whenever
//the user is done selecting items, I am getting an error saying, shoe_catalogue.js:48 Uncaught TypeError: Cannot read property 'innerHTML' of null, for my understanding, the id name i gave to the template after compiling it, does not seem to work, however I want a deep understanding on how to work with Handlebars and DOM. 

//The following line shows the process of compiling the script template created inside index.html.
//which i  gave an id named "myTemplate").

//assign the script template into a variable, then select it value using querySelect DOM method.
var myTemplate = document.getElementById("myTemplate").innerHTML;
var myTemplateInstance = Handlebars.compile(myTemplate);


var shoesData = [
       {name: "Nike", size: 7, price: 999, quantity: 34},
       {name: "Nike", size: 4, price: 843, quantity: 73},
       {name: "Nike", size: 3, price: 733, quantity: 22},
       {name: "Nike", size: 8, price: 839, quantity: 92},
       {name: "Nike", size: 5, price: 526, quantity: 234},
       {name: "Nike", size: 2, price: 526, quantity: 83},
       {name: "Nike", size: 10, price: 526, quantity: 52},
       {name: "Nike", size: 9, price: 526, quantity: 23},
    
    

        {name: "Puma", size: 6, price: 833, quantity: 83},
        {name: "Puma", size: 4, price: 928, quantity: 24},
        {name: "Puma", size: 7, price: 418, quantity: 93},
        {name: "Puma", size: 11, price: 627, quantity: 92},
        {name: "Puma", size: 5, price: 837, quantity: 23},
        {name: "Puma", size: 12, price: 628, quantity: 923},
        {name: "Puma", size: 9, price: 142, quantity: 23},
        {name: "Puma", size: 2, price: 928, quantity: 23},

      
      
         {name: "Timberland", size: 7, price: 733, quantity: 33},
         {name: "Timberland", size: 6, price: 252, quantity: 94},
         {name: "Timberland", size: 8, price: 927, quantity: 93},
         {name: "Timberland", size: 9, price: 252, quantity: 31},
         {name: "Timberland", size: 3, price: 537, quantity: 8},
         {name: "Timberland", size: 2, price: 373, quantity: 11},
         {name: "Timberland", size: 10, price: 829, quantity: 23},
         {name: "Timberland", size: 11, price: 923, quantity: 32}  
         
     ];



 userButton.addEventListener("click", function(){
        
        var value = myTemplateInstance({shoesData : shoesData})
    
   content.innerHTML = value;
    
    
});
