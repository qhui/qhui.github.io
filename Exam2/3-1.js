var data;
var gactive = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

d3.json("exam2.json", function(json) {
  data = json;
  var updateData;
  var columns = Object.keys(data[0]);
  var table = d3.select("body").append("table");
  var thead = table.append("thead");
  var tbody = table.append("tbody");

/*----------------Create the table head------------------------*/
  var sort_by = function(field, reverse, primer){

   var key = primer ?
       function(x) {return primer(x[field])} :
       function(x) {return x[field]};

   reverse = !reverse ? 1 : -1;

   return function (a, b) {
       return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
     }
   };

  thead.append("tr")
      .selectAll("th")
      .data(columns)
      .enter()
      .append("th")
      .text(function(column){return column; })
      .on("click", function(column){
        console.log(column);
        data.sort(sort_by(column, true, parseInt));
        d3.select("td")
          remove();
        updateData();
      });

  updateData = function(){
    /*------------------Create the table rows------------------------*/
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

    /*------------------Create the table cells------------------------*/
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

        };

    });
