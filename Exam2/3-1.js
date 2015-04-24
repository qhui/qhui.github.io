var data;
var gactive = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

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
      .text(function(column){return column; })
      .on("click", function(column){
        console.log(column);
        data = data.sort(function(a,b){
          return d3.descending(a.column, b.column);
        });
      });

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
         .style("background-color", function(){
           if(gactive[this.id] == 1){
             return "green";
           }
           else{
             return "white";
           };
         });
      })
      .on("click", function(){
        d3.selectAll("tr")
          .style("background-color","white");
        gactive = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        d3.select(this)
          .style("background-color", "green");
          gactive[this.id] = 1;
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
