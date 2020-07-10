//--------------------------------------------------/
//                    SVG5
//--------------------------------------------------/

//***************** data *******************/ 
var dataA = [
  {state: "Michoacan", value: 22.8},{state: "Mexico City", value: 19.6},{state: "Veracruz", value: 19.4},{state: "Jalisco", value: 17.6},
  {state: "Quintana Roo", value: 17.6},{state: "Puebla", value: 17.4},{state: "Baja California", value: 17.3},{state: "Oaxaca", value: 15.9},
  {state: "State of Mexico", value: 15.5},{state: "Chiapas", value: 15.9},{state: "Morelos", value: 15.0},{state: "Nayarit", value: 15.0},
  {state: "Sonora", value: 14.7},{state: "Hidalgo", value: 14.4},{state: "Yucatan", value: 14.1},{state: "Durango", value: 14.1},{state: "Guanajuato", value: 13.4},
  {state: "Tabasco", value: 13.4},{state: "Guerrero", value: 13.3},{state: "Nuevo Leon", value: 13.3},{state: "Queretaro", value: 13.2},
  {state: "Coahuila", value: 12.8},{state: "Tamaulipas", value: 12.8},{state: "B.C. Sur", value: 12.5},{state: "Tlaxcala", value: 12.5},
  {state: "Chihuahua", value: 12.2},{state: "Sinaloa", value: 12.2},{state: "Aguascalientes", value: 12.1},{state: "Colima", value: 11.9},
  {state: "Zacatecas", value: 11.5},{state: "Campeche", value: 10.7},{state: "San Luis Potosi", value: 9.1},
]; //percentage in 2016

var dataB = [
  {state: "Michoacan", value: 21.2,change:"negative",valuechange:-7.0},{state: "Mexico City", value: 20.1,change:"positive", valuechange:2.6},{state: "Veracruz", value: 16.7,change:"negative",valuechange:-13.9},{state: "Jalisco", value: 19.4,change:"positive",valuechange:10.2},
  {state: "Quintana Roo", value: 15.6,change:"negative",valuechange:-11.4},{state: "Puebla", value: 20.8,change:"positive",valuechange:19.5},{state: "Baja California", value: 16.9,change:"negative",valuechange:-2.3},{state: "Oaxaca", value: 16.3,change:"positive",valuechange:-2.3},
  {state: "State of Mexico", value: 19.8,change:"positive",valuechange:27.7},{state: "Chiapas", value: 17.6,change:"positive",valuechange:17.3},{state: "Morelos", value: 16.8,change:"positive",valuechange:12.0},{state: "Nayarit", value: 13.7,change:"negative",valuechange:-8.7},
  {state: "Sonora", value: 12.6,change:"negative",valuechange:-14.3},{state: "Hidalgo", value: 14.4,change:"positive",valuechange:0.0},{state: "Yucatan", value: 14.4,change:"positive",valuechange:-2.1},{state: "Durango", value: 13.1,change:"negative",valuechange:-7.1},{state: "Guanajuato", value: 13.7,change:"positive",valuechange:2.2},
  {state: "Tabasco", value: 12.6,change:"negative",valuechange:-6.0},{state: "Guerrero", value: 12.6,change:"positive",valuechange:3.8},{state: "Nuevo Leon", value: 13.0,change:"negative", valuechange:-2.3},{state: "Queretaro", value: 11.8,change:"negative",valuechange:-2.3},
  {state: "Coahuila", value: 13.2,change:"positive",valuechange:3.1},{state: "Tamaulipas", value: 12.0,change:"negative",valuechange:-6.3},{state: "B.C. Sur", value: 10.7,change:"negative",valuechange:-14.4},{state: "Tlaxcala", value: 13.7,change:"positive",valuechange:9.6},
  {state: "Chihuahua", value: 11.3,change:"negative",valuechange:-7.4},{state: "Sinaloa", value: 13.2,change:"positive",valuechange:8.2},{state: "Aguascalientes", value: 13.2,change:"positive",valuechange:8.2},{state: "Colima", value: 10.8,change:"negative",valuechange:-9.2},
  {state: "Zacatecas", value: 11.7,change:"positive",valuechange:1.7},{state: "Campeche", value: 11.7,change:"positive",valuechange:9.3},{state: "San Luis Potosi", value: 9.0,change:"negative",valuechange:-1.1},   
]; // percentage in 2018
 
//************* set dimensions ***************/ 
var margin5 = {left: 100, right: 20, top: 50, bottom: 60 };
var width5 = 750 - margin5.left - margin5.right,
    height5 = 570 - margin5.top - margin5.bottom;

//************** setup svg  *****************/
var svg5 = d3.select("#svg5")
  .append("svg")
    .attr("width", width5 + margin5.left + margin5.right)
    .attr("height", height5 + margin5.top + margin5.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin5.left + "," + margin5.top + ")");

//***************** axes *******************/
// X axis
var xAxisGroup5 = svg5.append("g") 
  .attr("class", "x-axis")
  .attr("transform", "translate(0," + height5 + ")")

// Y axis
var yAxisGroup5 = svg5.append("g")
    .attr("class", "y-axis");

//***************** scales *******************/
// X axis
var x5 = d3.scaleLinear()
  .range([ 0, width5 ])
  .domain([0,24 ])
  .nice() 

// Y axis
var y5 = d3.scaleBand()
  .range([ 0, height5 ])
  .padding(0.2);

//***************** labels *******************/
//x label
var xLabel5 = svg5.append("text") 
    .attr("y", height5+45)
    .attr("x", width5/2)
    .attr("font-size", "13px")
    .attr("text-anchor", "middle")
    .text("Percentage");

//y label
var yLabel5 = svg5.append("text")
    .attr("y", -88)
    .attr("x", -220)
    .attr("font-size", "13px")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90) ")
    .text("States");

//***************** gridlines *******************/
// X gridlines
svg5.append("g")
  //.attr("transform", "translate(40,0)")	//for y gridlines	
  .attr("class", "grid")
  .attr("transform", "translate(0," + height5 + ")")
  .attr("fill", "#f3f3f3")
  .call(d3.axisBottom(x5)
      .tickSize(-height5)
      .tickFormat("")
  )
//***************** title *******************/
svg5.append("text")
  .attr("x", (width / 2))             
  .attr("y", 0 - (margin.top / 2))
  .attr("text-anchor", "middle")  
  .attr("font-weight",function(d,i) {return i*550+550;})
  .attr("font-family", function(d,i) {return i<5 ? "sans-serif" : "sans-serif"; })
  .style("font-size", "17px") 
  .style('fill', '222529')
  //.style("text-decoration", "bold")  
  .text("Population without access to health services in Mexico");

//***************** update function *******************/
function update5(data5) {

  // update axis
  //x5.domain([0, d3.max(data, function(d){ return d.value })])
  y5.domain(data5.map(function(d) { return d.state; }))

  //x axis
  var xAxis5 = d3.axisBottom(x5)
    .tickFormat(function(d){ return d + "%"});
  xAxisGroup5.call(xAxis5);

   //y axis
  var yAxis5 = d3.axisLeft(y5)
  yAxisGroup5.call(yAxis5);
  
  var rects = svg5.selectAll("rect")
    .data(data5)
  rects
    .enter()
    .append("rect")
    .merge(rects)
    .transition()
    .duration(1000)
      .attr("x", x5(0) )
      .attr("y", function(d) { return y5(d.state); })
      .attr("width", function(d) { return x5(d.value); })
      .attr("height", y5.bandwidth() )
      // setup color
      .attr("fill", function(d){
        if (d.change == "positive") {return  "#16296e"}
        else if (d.change == "negative") { return "#c5c6c9"} 
        else return "#87b7ff"

      })
      /*
      .attr("fill", function(d){
        if (d.class == "more than 20%") {
          return  "#16296e" // dark blue
        }
        else if (d.class == "more than 25%") {
          return   "#16296e" // dark blue
        }
        else if (d.class == "more than 30%") {
          return  "#db3b3b" // dark red
        }
        else if (d.class == "less") {
          return "#c5c6c9" // light gray
        }
        else return "#87b7ff" //light blue
    })
    */
}

//*********** initialize plot with dataA *************/
update5(dataA)


