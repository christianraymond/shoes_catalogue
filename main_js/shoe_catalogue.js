var brandOutputdiv = document.querySelector(".brandOutputdiv");
var sizeBrandOutput = document.querySelector(".sizeBrandOutput");
var brandQuantityOutput = document.querySelector(".quantitydiv");
var colorBrandOutput = document.querySelector(".colorBrandOutput");
var userButton = document.querySelector(".searchButton");

var shoeBrands = document.querySelector("#brandName");
var shoeColors = document.querySelector("#shoeColor");
var shoeSizes = document.querySelector("#shoeSize");

    

//The following line shows the process of compiling the script template created inside index.html.
//which i  gave an id named "myTemplate").

//assign the script template into a variable, then select it value using querySelect DOM method.
var sourceCode = document.getElementById("myTemplate").innerHTML;
var compileTemplate = Handlebars.compile(sourceCode);


var shoesData = [
       {name: "Nike", size: 7, price: 999, quantity: 34, color: "Black"},
       {name: "Nike", size: 4, price: 843, quantity: 73, color: "White"},
       {name: "Nike", size: 3, price: 733, quantity: 22, color: "Green"},
       {name: "Nike", size: 8, price: 839, quantity: 92, color: "Blue"},
       {name: "Nike", size: 5, price: 526, quantity: 234, color: "Yellow"},
       {name: "Nike", size: 2, price: 526, quantity: 83, color: "Maroon"},
       {name: "Nike", size: 10, price: 526, quantity: 52, color: "Purple"},
       {name: "Nike", size: 9, price: 526, quantity: 23, color: "Red"},
    
    

        {name: "Puma", size: 6, price: 833, quantity: 83, color: "White"},
        {name: "Puma", size: 4, price: 928, quantity: 24, color: "Black"},
        {name: "Puma", size: 7, price: 418, quantity: 93, color: "Yellow"},
        {name: "Puma", size: 11, price: 627, quantity: 92, color: "Red"},
        {name: "Puma", size: 5, price: 837, quantity: 23, color: "Green"},
        {name: "Puma", size: 12, price: 628, quantity: 92, color: "Blue"},
        {name: "Puma", size: 9, price: 142, quantity: 23, color: "Maroon"},
        {name: "Puma", size: 2, price: 928, quantity: 23, color: "Purple"},
      
      
         {name: "Timberland", size: 7, price: 733, quantity: 33, color: "Magenta"},
         {name: "Timberland", size: 6, price: 252, quantity: 94, color: "Brown"},
         {name: "Timberland", size: 8, price: 927, quantity: 93, color: "Cyan"},
         {name: "Timberland", size: 9, price: 252, quantity: 31, color: "Violet"},
         {name: "Timberland", size: 3, price: 537, quantity: 8, color: "Pink"},
         {name: "Timberland", size: 2, price: 373, quantity: 11, color: "Grey"},
         {name: "Timberland", size: 10, price: 829, quantity: 23, color: "Orange"},
         {name: "Timberland", size: 11, price: 923, quantity: 32, color: "Blue"}  
         
     ];



 userButton.addEventListener("click", function(){
        
        var value = compileTemplate({shoesData})
    
   brandOutputdiv.innerHTML = value;
   colorBrandOutput.innerHTML = value;
   sizeBrandOutput.innerHTML = value;
   brandQuantityOutput.innerHTML = value;     
    
    
});
