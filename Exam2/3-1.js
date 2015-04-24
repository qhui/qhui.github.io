var data;
d3.json("exam2.json", function(json) {
  data = json;
  var columns = Object.keys(data[0]);
  var table = d3.select("body").append("table");
  var thead = table.append("thead");
  var tbody = table.append("tbody");

  thead.append("tr")
      .selectAll("th")
      .data(columns)
      .enter()
      .append("th")
      .text(function(column){return column; });

  var rows = tbody.selectAll("tr")
      .data(data)
      .enter()
      .append("tr")
      .attr("id", function(d){
        return d;
      });

  var cells = rows.selectAll("td")
      .data(function(row) {
          return columns.map(function(column) {
          return {column: column, value: row[column]};
          });
      })
      .enter()
      .append("td")
      .html(function(d){
          return d.value;
      });
});
