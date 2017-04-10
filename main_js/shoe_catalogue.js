var shoeColors = document.querySelector("#color");
var shoeSizes = document.querySelector("#size");
var shoeBrands = document.querySelector("#brands");
var userButton = document.querySelector(".search button");
     
var myTemplate = document.querySelector(".myTemplate");

var myTemplateInstance = Handlebars.compile(myTemplate.innerHTML);

userButton = addEventListener('click', function(){ 

var enteredShoeColor = shoeColors.value;
var value = myTemplateInstance({name: "Christian"});
alert(value);
    
});