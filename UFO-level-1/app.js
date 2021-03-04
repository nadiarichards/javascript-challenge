// from data.js
var tableData = data;
var button = d3.select("#filter-btn");
var inputField = d3.select("#datetime");
var tbody = d3.select("tbody");
var date = tableData.map(ufo =>  ufo.datetime);
var city = tableData.map(ufo =>  ufo.city);
var state = tableData.map(ufo =>  ufo.state);
var country = tableData.map(ufo =>  ufo.country);
var shape = tableData.map(ufo =>  ufo.shape);
var duration = tableData.map(ufo =>  ufo.ddurationMinutes);
var comments = tableData.map(ufo =>  ufo.comments);

console.log(comments);


var ratings = filteredMovies.map(movies => movies.metascore);
reversedData = tabledata.map(object => object.greekSearchResults);
reversedData.map(object => object.greekSearchResults)

function init() {

    data.forEach((UFOreport) => {
        var row = tbody.append("tr");
        Object.entries(UFOreport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
}


// function unpack(rows, index) {
//     return rows.map(function(row) {
//       return row[index];
//     });
//   }


  
  // This function is triggered when the button is clicked
function handleClick() {
    console.log("A button was clicked!");

    // We can use d3 to see the object that dispatched the event
    console.log(d3.event.target);
}
  
  // We can use the `on` function in d3 to attach an event to the handler function
  button.on("click", handleClick);
  
  // You can also define the click handler inline
  button.on("click", function() {
    console.log("Hi, a button was clicked!");
    console.log(d3.event.target);
  });
}
  // Event handlers are just normal functions that can do anything you want
  button.on("click", function() {
    d3.select(".giphy-me").html("<img src='https://gph.to/2Krfn0w' alt='giphy'>");
  });
  
  // Input fields can trigger a change event when new text is entered.
  inputField.on("change", function() {
    var newText = d3.event.target.value;
    console.log(newText);
  });


function filterDate(date) {
    return ParseInt city.Increase_from_2016 > 15000;
}

// 1. Create a custom filtering function that returns
//  the cities with a population increase greater than 15,000.
var filteredDates=top15Cities.filter(filterPopulation);
// 2. Use filter() to pass the function as its argument

var cities = filteredCities.map(increase => increase.city);

function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    var stock = d3.select("#stockInput").node().value;
  console.log(stock);

  // clear the input value
  d3.select("#datetime").node().value = "";

  

// Check to make sure you filtered your cities correctly
// HINT: console.log() is your friend.

  // Build the plot with the new stock
  filterDate(date);
}




d3.json(url).then(function(data) {

    // @TODO: Grab Name, Stock, Start Date, and End Date from the response json object to build the plots
    var name = data.dataset.name;
    var stock = data.dataset.dataset_code;
    var startDate = data.dataset.start_date;
    var endDate = data.dataset.end_date;
    
    // @TODO: Unpack the dates, open, high, low, and close prices
    var dates = unpack(data.dataset.data, 0);
    var openingPrices = unpack(data.dataset.data, 1);
    var highPrices = unpack(data.dataset.data, 2);
    var lowPrices = unpack(data.dataset.data, 3);
    var closingPrices = unpack(data.dataset.data, 4);

    getMonthlyData();

// YOUR CODE HERE!
function buildTable(dates, openPrices, highPrices, lowPrices, closingPrices, volume) {
    var table = d3.select("#summary-table");
    var tbody = table.select("tbody");
    var trow;
    for (var i = 0; i < 12; i++) {
      trow = tbody.append("tr");
      trow.append("td").text(dates[i]);
      trow.append("td").text(openPrices[i]);
      trow.append("td").text(highPrices[i]);
      trow.append("td").text(lowPrices[i]);
      trow.append("td").text(closingPrices[i]);
      trow.append("td").text(volume[i]);
    }
  }


  var names = students.map(function(student) {
    return student.name;
  });
  
  var scores = students.map(function(student) {
    return student.score;
  });
  
  // Map vs forEach
  // Part A
  var forEachStages = theStagesOfJS.forEach(function(each, index) {
    // the return of forEach is ignored
    return `Stage ${index + 1}: ${each}`;
  });
  
  // undefined
  console.log(forEachStages);
  
  // unaltered
  console.log(theStagesOfJS);
  
  // Part B
  theStagesOfJS.forEach(function(each, index) {
    // The original array is mutated with forEach
    theStagesOfJS[index] = `Stage ${index + 1}: ${each}`;
  });
  
  // Note that the original array has been altered (mutated)
  console.log(theStagesOfJS);
  
  // Challenge Activity!
  var princesses = [
    { name: "Rapunzel", age: 18 },
    { name: "Mulan", age: 16 },
    { name: "Anna", age: 18 },
    { name: "Moana", age: 16 }
  ];
  
  // Log the name of each princess, follow by a colon, followed by their age
  // forEach: executes a provided function once for each array element
  princesses.forEach(function(princess) {
    console.log(`${princess.name}: ${princess.age}`);
  });
  
  // Create an array of just the names from the princesses array
  // map: creates a new array with the results of calling a provided function on every element in the calling array
  var names = princesses.map(function(princess) {
    return princess.name;
  });
  console.log("names: ", names);