$(document).ready(function (){
  $.getJSON("https://hivelab.org/static/students.json", function (json){
    var l = json.length;
    var tr;
    var minGPA = 5;
    var maxGPA = 0;
    var minGREV = 180;
    var maxGREV = 0;
    var minGREQ = 180;
    var maxGREQ = 0;
    var minE = 10;
    var maxE = 0;
    var minREM = 100;
    var maxREM = 0;
    for(var i = 0; i<l; i++){
      if(json[i].GPA < minGPA){
        minGPA = json[i].GPA;
      }
      if(json[i].GPA > maxGPA){
        maxGPA = json[i].GPA;
      }
      if(json[i].GRE_V < minGREV){
        minGREV = json[i].GRE_V;
      }
      if(json[i].GRE_V > maxGREV){
        maxGREV = json[i].GRE_V;
      }
      if(json[i].GRE_Q < minGREQ){
        minGREQ = json[i].GRE_Q;
      }
      if(json[i].GRE_Q > maxGREQ){
        maxGREQ = json[i].GRE_Q;
      }
      if(json[i].Essay < minE){
        minE = json[i].Essay;
      }
      if(json[i].Essay > maxE){
        maxE = json[i].Essay;
      }
      if(json[i].Recom < minREM){
        minREM = json[i].Recom;
      }
      if(json[i].Recom > maxREM){
        maxREM = json[i].Recom;
      }
    }
    for(var i = 0; i< json.length; i++){
      tr = $('<tr/>');
      tr.append("<td>" + json[i].Name + "</td>");
      var opacityGPA = (json[i].GPA - minGPA)/(maxGPA-minGPA);
      tr.append('<td style="opacity:'+ opacityGPA+'">'+json[i].GPA + "</td>");
      var opacityGREV = (json[i].GRE_V - minGREV)/(maxGREV-minGREV);
      tr.append('<td style="opacity:'+ opacityGREV+'">'+json[i].GRE_V + "</td>");
      var opacityGREQ = (json[i].GRE_Q - minGREQ)/(maxGREQ-minGREQ);
      tr.append('<td style="opacity:'+ opacityGREQ+'">'+json[i].GRE_Q + "</td>");
      var opacityE = (json[i].Essay - minE)/(maxE-minE);
      tr.append('<td style="opacity:'+ opacityE+'">'+json[i].Essay + "</td>");
      var opacityREM = (json[i].Recom - minREM)/(maxREM-minREM);
      tr.append('<td style="opacity:'+ opacityREM+'">'+json[i].Recom + "</td>");
      $('#applicant').append(tr);
      //document.write('<td bgcolor="#'+clr[i]+clr[j]+clr[k]+'">');
      //tr.append('<td bgcolor="#'+"ff0000"+'">')
      //color = "ff";
      //tr.append('<td bgcolor="#'+color+"00"+"00"+'">');
      //tr.append('<td style="opacity:'+ opacity+'">'+json[i].GPA + "</td>");
    }
  })
})
