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
      .append("tr");

  var cells = rows.selectAll("td")
      .data(data)
      .enter()
      .append("td")
      .html(function(d){
        var value = [];
        value = value.push(d.ItemNo, d.A, d.B, d.C, d.D, d.E, d.F, d.G);
        console.log(d.ItemNo);
        console.log(d.A);
        console.log(d.B);
        //console.log(value);
        return d;
      });
});
