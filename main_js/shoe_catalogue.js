//create varible to target elements from indexHtmlFile, using DOM.

var brandName = document.querySelector(".brandName");
var brandColor = document.querySelector(".brandColor");
var brandSize = document.querySelector(".sizeBrand");
var brandPrice = document.querySelector(".brandPrice");
var brandStock = document.querySelector(".brandStock");


var dropDownDisplay = document.querySelector(".dropDownDisplay");
var dropDownForColor = document.querySelector(".dropDownForColor");
var dropDownForSize = document.querySelector('.dropDownForSize')
var searchButton = document.querySelector(".searchButton");

var displayTable = document.querySelector('.displayTable');

//assign variable to track the script className.
var dropDownTemplate = document.querySelector(".dropDownTemplate");
var compiledDropDownTemplate = Handlebars.compile(dropDownTemplate.innerHTML);

var tableTemplate = document.querySelector(".table");
var compiledTableTemplate = Handlebars.compile(tableTemplate.innerHTML);


var shoesData = [
       {name: "Nike", size: 7, price: 999, stock: 34, color: "Black"},
       {name: "Nike", size: 4, price: 843, stock: 73, color: "White"},
       {name: "Nike", size: 3, price: 733, stock: 22, color: "Green"},
       {name: "Nike", size: 8, price: 839, stock: 92, color: "Blue"},
       {name: "Nike", size: 5, price: 526, stock: 234, color: "Yellow"},
       {name: "Nike", size: 2, price: 526, stock: 83, color: "Maroon"},
       {name: "Nike", size: 10, price: 526, stock: 52, color: "Purple"},
       {name: "Nike", size: 9, price: 526, stock: 23, color: "Red"},
    
        {name: "Puma", size: 6, price: 833, stock: 83, color: "White"},
        {name: "Puma", size: 4, price: 928, stock: 24, color: "Black"},
        {name: "Puma", size: 7, price: 418, stock: 93, color: "Yellow"},
        {name: "Puma", size: 11, price: 627, stock: 92, color: "Red"},
        {name: "Puma", size: 5, price: 837, stock: 23, color: "Green"},
        {name: "Puma", size: 12, price: 628, stock: 92, color: "Blue"},
        {name: "Puma", size: 9, price: 142, stock: 23, color: "Maroon"},
        {name: "Puma", size: 2, price: 928, stock: 23, color: "Purple"},
      
         {name: "Timberland", size: 7, price: 733, stock: 33, color: "Magenta"},
         {name: "Timberland", size: 6, price: 252, stock: 94, color: "Brown"},
         {name: "Timberland", size: 8, price: 927, stock: 93, color: "Cyan"},
         {name: "Timberland", size: 9, price: 252, stock: 31, color: "Violet"},
         {name: "Timberland", size: 3, price: 537, stock: 8, color: "Pink"},
         {name: "Timberland", size: 2, price: 373, stock: 11, color: "Grey"},
         {name: "Timberland", size: 10, price: 829, stock: 23, color: "Orange"},
         {name: "Timberland", size: 11, price: 923, stock: 32, color: "Blue"}  
         
     ];

searchButton.addEventListener("click", function(){
    
    function searchBrand(input){
    return input.name == dropDownDisplay.value 
    
}
   var brandName = shoesData.filter(searchBrand);
    
   function searchColor(input){
    return input.color == dropDownForColor.value 
}
    
    var colorName = brandName.filter(searchColor);
      
    var tableDisplay = compiledTableTemplate({
    colorName   
})
     
displayTable.innerHTML = tableDisplay

    
    document.querySelector('.dropDownDisplay').innerHTML = compiledDropDownTemplate({
    name: shoesData,   
})
    document.querySelector(".dropDownForColor").innerHTML = compiledDropDownTemplate({
     color: shoesData,
    })
    
    document.querySelector('.dropDownForSize').innerHTML = compiledDropDownTemplate({
    size: shoesData
    })
})

