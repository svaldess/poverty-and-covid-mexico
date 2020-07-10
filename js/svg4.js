//--------------------------------------------------/
//                    SVG4
//--------------------------------------------------/

//************* set dimensions ***************/
var margin4 = {left:80, right:20, top: 50, bottom: 100 };
var width4 = 800 - margin4.left - margin4.right,
    height4 = 500 - margin4.top - margin4.bottom;

    innerRadius = 90,
    outerRadius = Math.min(width4, height4) / 2;   // the outerRadius goes from the middle of the SVG area to the border

//************* setup svg ***************/
var svg4 = d3.select("#svg4")
  .append("svg")
    .attr("width", width4 + margin4.left + margin4.right)
    .attr("height", height4 + margin4.top + margin4.bottom)
  .append("g")
    .attr("transform", "translate(" + (width4 / 2 + margin4.left) + "," + (height4 / 2 + margin4.top) + ")");

d3.csv("data/poverty_countries.csv").then(function(data4){
    data4.forEach(function(d){
        d.Value = +d.Value;
    });

//************* tooltips ***************/ 
var tip4 = d3.tip().attr("class", "d3-tip")
  .html(function(d){
      text = "<strong>Poor population: </strong> <span style='color:#a2c6fc'>" +d.Value + "%" + "</span><br>";
      return text;
      });
svg4.call(tip4);

//************* scales ***************/
  var x4 = d3.scaleBand()
      .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. 
      //.align(0)                  
      .domain(data4.map(function(d) { return d.Country; })); 
  var y4 = d3.scaleLinear()
      .range([innerRadius, outerRadius])  
      .domain([6, 80]); 
      
  // Add the bars
  svg4.append("g")
    .selectAll("path")
    .data(data4)
    .enter()
    .append("path")
      .on("mouseover", tip4.show)
      .on("mouseout", tip4.hide)
      .attr("fill", function(d){
        if (d.Country == "Mexico") return "#16296e"
        else return "#87b7ff";
    })
      .attr("d", d3.arc()     
          .innerRadius(innerRadius)
          .outerRadius(function(d) { return y4(d.Value); })
          .startAngle(function(d) { return x4(d.Country); })
          .endAngle(function(d) { return x4(d.Country) + x4.bandwidth(); })
          .padAngle(0.01)
          .padRadius(innerRadius))

  // Add the labels
  svg4.append("g")
      .selectAll("g")
      .data(data4)
      .enter()
      .append("g")
        .attr("text-anchor", function(d) { return (x4(d.Country) + x4.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "end" : "start"; })
        .attr("transform", function(d) { return "rotate(" + ((x4(d.Country) + x4.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (y4(d.Value)+10) + ",0)"; })
      .append("text")
        .text(function(d){return(d.Country)})
        .attr("transform", function(d) { return (x4(d.Country) + x4.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "rotate(180)" : "rotate(0)"; })
        .style("font-size", "11px")
        .attr("alignment-baseline", "middle")

});