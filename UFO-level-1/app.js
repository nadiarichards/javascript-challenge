// from data.js
var tableData = data;


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