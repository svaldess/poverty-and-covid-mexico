//--------------------------------------------------/
//                    SVG1
//--------------------------------------------------/

//***************** data *******************/ 
var data1 = [
    {state: "Chiapas", value: 77.0},{state: "Guerrero", value: 68.4},{state: "Puebla", value: 64.6},{state: "Oaxaca", value: 61.8},
    {state: "Tlaxcala", value: 59.6},{state: "Michoacan", value: 55.5},{state: "Hidalgo", value: 55.2},{state: "Tabasco", value: 53.8},
    {state: "Veracruz", value: 51.2},{state: "San Luis Potosi", value: 50.9},{state: "Zacatecas", value: 50.1},{state: "Morelos", value: 48.8},
    {state: "Durango", value: 48.4},{state: "Yucatan", value: 47.0},{state: "Campeche", value: 45.9},{state: "Guanajuato", value: 44.1},
    {state: "State of Mexico", value: 43.6},{state: "Nayarit", value: 41.7},{state: "Aguascalientes", value: 37.6},{state: "Jalisco", value: 36.7},
    {state: "Queretaro", value: 35.2},{state: "Tamaulipas", value: 33.8},{state: "Quintana Roo", value: 33.7},{state: "Coahuila", value: 32.7},
    {state: "Sinaloa", value: 32.4},{state: "Chihuahua", value: 32.1},{state: "Mexico city", value: 27.6},{state: "Colima", value: 27.4},
    {state: "Sonora", value: 27.1},{state: "Baja California", value: 26.0},{state: "Baja California Sur", value: 21.4},{state: "Nuevo Leon", value: 21.4}
 ];
 
 var data2 = [
    {state: "Chiapas", value: 76.4,change:"negative"},{state: "Guerrero", value: 66.5,change:"negative"},{state: "Puebla", value: 58.9,change:"negative"},{state: "Oaxaca", value: 66.4,change:"positive"},
    {state: "Tlaxcala", value: 48.4,change:"negative"},{state: "Michoacan", value: 46.0,change:"negative"},{state: "Hidalgo", value: 43.8,change:"negative"},{state: "Tabasco", value: 53.6,change:"negative"},
    {state: "Veracruz", value: 61.8,change:"positive"},{state: "San Luis Potosi", value: 43.4,change:"negative"},{state: "Zacatecas", value: 46.8,change:"negative"},{state: "Morelos", value: 50.8,change:"positive"},
    {state: "Durango", value: 37.3,change:"negative"},{state: "Yucatan", value: 40.8,change:"negative"},{state: "Campeche", value: 46.2,change:"positive"},{state: "Guanajuato", value: 43.4,change:"negative"},
    {state: "State of Mexico", value: 42.7,change:"negative"},{state: "Nayarit", value: 34.8,change:"negative"},{state: "Aguascalientes", value: 26.2,change:"negative"},{state: "Jalisco", value: 28.4,change:"negative"},
    {state: "Queretaro", value: 27.6,change:"negative"},{state: "Tamaulipas",change:"positive", value: 35.1},{state: "Quintana Roo", value: 27.6,change:"negative"},{state: "Coahuila", value: 22.5,change:"negative"},
    {state: "Sinaloa", value: 30.9,change:"negative"},{state: "Chihuahua", value: 26.3,change:"negative"},{state: "Mexico city", value: 30.6,change:"positive"},{state: "Colima", value: 30.9,change:"positive"},
    {state: "Sonora", value: 28.2,change:"positive"},{state: "Baja California", value: 23.3,change:"negative"},{state: "Baja California Sur", value: 18.1,change:"negative"},{state: "Nuevo Leon", value: 14.5,change:"negative"}    
 ];

//************* set dimensions ***************/ 
var margin = {left: 80, right: 20, top: 40, bottom: 100 };
var width = 800 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

//************** setup svg  *****************/
var svg = d3.select("#svg1")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//***************** axes *******************/
// X axis
var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data1.map(function(d) { return d.state; }))
  .padding(0.2);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", function (d) { return "rotate(-30)"; });
//add label
svg.append("text")
  .attr("y", height+80)
  .attr("x", width/2)
  .attr("font-size", "15px")
  .attr("text-anchor", "middle")
  .text("States");

// Y axis
var y = d3.scaleLinear()
  .domain([0, 90])
  .range([ height, 0])

// y axis
var yAxis = d3.axisLeft(y)
    .tickFormat(function(d){ return +d +"%"})
svg.append("g")
    .call(yAxis); 
/*
svg.append("g")
  .attr("class", "myYaxis")
  .call(d3.axisLeft(y)) */
//add label
svg.append("text")
  .attr("y", -60)
  .attr("x", -(height/2))
  .attr("font-size", "15px")
  .attr("text-anchor", "middle")
  .attr("transform", "rotate(-90)")
  .text("Percentage of poverty");

//***************** title *******************/
svg.append("text")
  .attr("x", (width / 2))             
  .attr("y", 0 - (margin.top / 2))
  .attr("text-anchor", "middle")  
  .attr("font-weight",function(d,i) {return i*550+550;})
  .attr("font-family", function(d,i) {return i<5 ? "sans-serif" : "sans-serif"; })
  .style("font-size", "17px") 
  .style('fill', '222529')
  //.style("text-decoration", "bold")  
  .text("Percentage of poor population by state in Mexico");


//************* update function ***************/
function update(data) {

  var u = svg.selectAll("rect")
    .data(data)

  u
    .enter()
    .append("rect")
    .merge(u)
    .transition()
    .duration(1000)
      .attr("x", function(d) { return x(d.state); })
      .attr("y", function(d) { return y(d.value); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.value); })
      // change color according to value d.change
      .attr("fill", function(d){
        if (d.change == "positive") return "#16296e"
        else if (d.change== "negative") return "#c5c6c9"
        else return "#87b7ff";
    })
}

//*********** initialize plot with data1 *************/
update(data1)