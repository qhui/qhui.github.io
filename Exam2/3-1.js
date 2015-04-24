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

  var i = -1;
  var rows = tbody.selectAll("tr")
      .data(data)
      .enter()
      .append("tr")
      .attr("id", function(d){
        i = i + 1;
        return i;
      })
      .on("mouseover", function(){
        d3.select(this)
          .style("background-color", "yellow");
      })
      .on("mouseout", function(){
        d3.select(this)
          .style("background-color", "white");
      })
      .on("click", function(){
        d3.select(this)
          .style("background-color", "green");
          d3.event.stopPropagation();
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
