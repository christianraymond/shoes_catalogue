//create varible to target elements from indexHtmlFile, using DOM.


var addButton = document.querySelector(".addStocks");

var brandDrop = document.querySelector(".brand");
var colorDrop = document.querySelector(".color");
var sizeDrop = document.querySelector('.size');

var searchButton = document.querySelector(".searchButton");

var displayTable = document.querySelector('.displayTable');

//assign variable to track the script className.
var dropDownTemplate = document.querySelector(".dropDownTemplate");
var compiledDropDownTemplate = Handlebars.compile(dropDownTemplate.innerHTML);

var tableTemplate = document.querySelector(".table");
var compiledTableTemplate = Handlebars.compile(tableTemplate.innerHTML);

var shoesData = [{
    name: "Nike",
    size: 7,
    price: 999,
    stock: 34,
    color: "Black"
  },
  {
    name: "Nike",
    size: 4,
    price: 843,
    stock: 73,
    color: "White"
  },
  {
    name: "Nike",
    size: 3,
    price: 733,
    stock: 22,
    color: "Green"
  },
  {
    name: "Nike",
    size: 8,
    price: 839,
    stock: 92,
    color: "Blue"
  },
  {
    name: "Nike",
    size: 5,
    price: 526,
    stock: 234,
    color: "Yellow"
  },
  {
    name: "Nike",
    size: 2,
    price: 526,
    stock: 83,
    color: "Maroon"
  },
  {
    name: "Nike",
    size: 10,
    price: 526,
    stock: 52,
    color: "Purple"
  },
  {
    name: "Nike",
    size: 9,
    price: 526,
    stock: 23,
    color: "Red"
  },

  {
    name: "Puma",
    size: 6,
    price: 833,
    stock: 83,
    color: "White"
  },
  {
    name: "Puma",
    size: 4,
    price: 928,
    stock: 24,
    color: "Black"
  },
  {
    name: "Puma",
    size: 7,
    price: 418,
    stock: 93,
    color: "Yellow"
  },
  {
    name: "Puma",
    size: 11,
    price: 627,
    stock: 92,
    color: "Red"
  },
  {
    name: "Puma",
    size: 5,
    price: 837,
    stock: 23,
    color: "Green"
  },
  {
    name: "Puma",
    size: 12,
    price: 628,
    stock: 92,
    color: "Blue"
  },
  {
    name: "Puma",
    size: 9,
    price: 142,
    stock: 23,
    color: "Maroon"
  },
  {
    name: "Puma",
    size: 2,
    price: 928,
    stock: 23,
    color: "Purple"
  },

  {
    name: "Timberland",
    size: 7,
    price: 733,
    stock: 33,
    color: "Magenta"
  },
  {
    name: "Timberland",
    size: 6,
    price: 252,
    stock: 94,
    color: "Brown"
  },
  {
    name: "Timberland",
    size: 8,
    price: 927,
    stock: 93,
    color: "Cyan"
  },
  {
    name: "Timberland",
    size: 9,
    price: 252,
    stock: 31,
    color: "Violet"
  },
  {
    name: "Timberland",
    size: 3,
    price: 537,
    stock: 8,
    color: "Pink"
  },
  {
    name: "Timberland",
    size: 2,
    price: 373,
    stock: 11,
    color: "Grey"
  },
  {
    name: "Timberland",
    size: 10,
    price: 829,
    stock: 23,
    color: "Orange"
  },
  {
    name: "Timberland",
    size: 11,
    price: 923,
    stock: 32,
    color: "Blue"
  }

];

function uniqueBrandInfo() {
  'use strict';

  var uniqueBrand = [];
  var mapBrand = {};

  for (var x = 0; x < shoesData.length; x++) {
    var brandName = shoesData[x];

    if (mapBrand[brandName.name] === undefined) {
      mapBrand[brandName.name] = brandName.name;
      uniqueBrand.push({
        name : brandName.name
      });
    }
  }
  return uniqueBrand;
}

function uniqueBrandColorInfo() {
  var uniqueColor = [];
  var mapColor = {};

  for (var i = 0; i < shoesData.length; i++) {
    var brandColor = shoesData[i];
    if (mapColor[brandColor.color] === undefined) {
      mapColor[brandColor.color] = brandColor.color;
      uniqueColor.push({
        color : brandColor.color
      });
    }
  }

  return uniqueColor.sort(function(c1, c2){
    if (c1.color < c2.color){
      return -1
    }
    if (c1.color > c2.color){
      return 1
    }
    return 0;
  });
}

function uniqueSizeBrand() {
  var uniqueSize = [];
  var mapSize = {};

  for (var y = 0; y < shoesData.length; y++) {
    var brandSize = shoesData[y];
    if (mapSize[brandSize.size] === undefined) {
      mapSize[brandSize.size] = brandSize.size;
      uniqueSize.push({
        size : brandSize.size
      });
    }
  }
  return uniqueSize.sort(function(s1, s2){
    return s1.size - s2.size;
  });
}

function search() {
  var brandFilter = document.querySelector(".brand");
  var colorFilter = document.querySelector(".color");
  var sizeFilter = document.querySelector('.size');

  function searchBrand(input) {
    return brandFilter.value == input.name;
  }

  function searchColor(input) {
    return colorFilter.value == input.color;
  }

  function searchSize(input) {
    return sizeFilter.value == input.seze;
  }

  if (brandFilter.value !== "") {
    var stock = shoesData.filter(searchBrand);
  }
  else if (colorFilter.value !== "") {
    if (brandFilter.value !== "") {
      var stock = stock.filter(searchColor && searchBrand);
    } else {
      var stock = shoesData.filter(searchColor);
    }
  }
  else if (sizeFilter.value !== "") {
    if (brandFilter.value !== "" || colorFilter !== "") {
      var stock = stock.filter(searchSize);
    }
  } else {
    // ???
    var stock = shoesData.filter(searchSize);
  }

  // ???
  // ---
}



  //uniqueBrandColorInfo();

  //uniqueSizeBrand();




  //var stockAvailable = document.querySelector(".dropDownTemplate");
  //var compiledDropDownTemplate = Handlebars.compile(stockAvailable.innerHTML);

  //
  // var searched = compiledDropDownTemplate({
  //   name : uniqueSizeBrand(),
  //   color : uniqueBrandColorInfo(),
  //   size : uniqueSizeBrand()
  // });
  //
  // var displayTable = document.querySelector('.selectField').innerHTML = searched;
  //
  // if (searched === undefined) {
  //   document.querySelector(displayTable).innerHTML = "Please Select something!";
  // }



var stockAvailable = document.querySelector(".dropDownTemplate");
var compiledDropDownTemplate = Handlebars.compile(stockAvailable.innerHTML);

function showDropdown(){
  var dropdownHTML = compiledDropDownTemplate({
    name : uniqueBrandInfo(),
    color : uniqueBrandColorInfo(),
    size : uniqueSizeBrand()
  });

  var displayTable = document.querySelector('.selectField').innerHTML = dropdownHTML;
}

 showDropdown();
