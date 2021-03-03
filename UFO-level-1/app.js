// from data.js
var tableData = data;

function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
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