// from data.js
var tableData = data;

var dateInput = d3.select("#datetime");
var outputufotable = d3.select("#ufo-table");
var button = d3.select("#filter-btn");
button.on("click", function () {


});

outputufotable.select("tbody")
    .selectAll("tr")
    .data(tableData)
    .enter()
    .append("tr")
    .html(function (d) {
        return `<td>${d.datetime}</td>
            <td>${d.city}</td>
            <td>${d.state}</td>
            <td>${d.country}</td>
            <td>${d.shape}</td>
            <td>${d.durationMinutes}</td>
            <td>${d.comments}</td>`;
    });


