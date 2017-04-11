var content = document.getElementById("#shoeDetails");
var shoeBrands = document.querySelector("#brandName");
var shoeColors = document.querySelector("#shoeColor");
var shoeSizes = document.querySelector("#shoeSize");
var userButton = document.querySelector(".search button");
     
//From here I think I need help, I am not sure how make the search button listen whenever
//the user is done selecting items, I am getting an error saying, shoe_catalogue.js:48 Uncaught TypeError: Cannot read property 'innerHTML' of null, for my understanding, the id name i gave to the template after compiling it, does not seem to work, however I want a deep understanding on how to work with Handlebars and DOM. 

var shoesData = [
       {name: "Nike", size: 7, price: 999},
       {name: "Nike", size: 4, price: 843},
       {name: "Nike", size: 3, price: 733},
       {name: "Nike", size: 8, price: 839},
       {name: "Nike", size: 5, price: 526},
       {name: "Nike", size: 2, price: 526},
       {name: "Nike", size: 10, price: 526},
       {name: "Nike", size: 9, price: 526}
    ];

    [
        {name: "Puma", size: 6, price: 833},
        {name: "Puma", size: 4, price: 928},
        {name: "Puma", size: 7, price: 418},
        {name: "Puma", size: 11, price: 627},
        {name: "Puma", size: 5, price: 837},
        {name: "Puma", size: 12, price: 628},
        {name: "Puma", size: 9, price: 142},
        {name: "Puma", size: 2, price: 928}
    ];
      
     [  
         {name: "Timberland", size: 7, price: 733},
         {name: "Timberland", size: 6, price: 252},
         {name: "Timberland", size: 8, price: 927},
         {name: "Timberland", size: 9, price: 252},
         {name: "Timberland", size: 3, price: 537},
         {name: "Timberland", size: 2, price: 373},
         {name: "Timberland", size: 10, price: 829},
         {name: "Timberland", size: 11, price: 923}  
         
     ];

    
    
  var template = Handlebars.compile(document.getElementById("myTemplate").innerHTML);
  var content = template.innerHTML(shoesData);
    