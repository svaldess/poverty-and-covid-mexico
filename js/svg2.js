//--------------------------------------------------/
//                    SVG2
//--------------------------------------------------/

//************* set dimensions ***************/
 var margin2 = {left:80, right:20, top: 40, bottom: 100};

 var height2 = 500 - margin2.top - margin2.bottom,
    width2 = 800 -  margin2.left - margin2.right;

//************* setup svg ***************/
 var svg2 = d3.select("#svg2")
    .append("svg")
      .attr("width", width2 + margin2.left + margin2.right)
      .attr("height", height2 + margin2.top + margin2.bottom)
    .append("g")
      .attr("transform","translate(" + margin2.left + "," + margin2.top + ")");

//************* tooltips ***************/ 
var tip = d3.tip().attr("class", "d3-tip")
  .html(function(d){
      text = "<strong>State:</strong> <span style='color:#a2c6fc'>" +d.State + "</span><br>";
      text += "<strong>Municipality:</strong> <span style='color:#a2c6fc'>" +d.Municipality + "</span><br>";
      text += "<strong>Population poor by income:</strong> <span style='color:#a2c6fc' >" +d.percentage_below_line + "%" + "</span><br>";
      text += "<strong>Covid cases:</strong> <span style='color:#a2c6fc'>" +d3.format(",.0f")(d.covid_total) + "</span><br>";
      text += "<strong>Total dead:</strong> <span style='color:#a2c6fc'>" +d3.format(",.0f")(d.covid_dead_total) + "</span><br>";
      return text;
      });
svg2.call(tip);

//************* scales ***************/ 
var x2 = d3.scaleLinear() //covid cases
    //.base(10)
    .domain([0, 100])
    .range([0, width2]);

var y2 = d3.scaleLinear() //dead cases
    .domain([0, 10000])
    .range([height2, 0]);

var area2 = d3.scaleLinear() //population
    .domain([0, 2000000])
    //.range([5*Math.PI, 300*Math.PI]); 
    .range([ 4, 1000]);

//************* labels ***************/
var valueColor2 = d3.scaleOrdinal() 
  .domain("More than 75%", "More than 50%", "More than 25%","Less than 25%")
  .range([ "#16296e","#58738d","#4f92f7","#99c2ff"]);

//************* labels ***************/
var xLabel2 = svg2.append("text")
    .attr("y", height2 + 50)
    .attr("x", width2 / 2)
    .attr("font-size", "15px")
    .attr("text-anchor", "middle")
    .text("Percentage of the population");

var yLabel2 = svg2.append("text")
    .attr("y", -50)
    .attr("x", -170)
    .attr("font-size", "15px")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90) ")
    .text("Total Covid-19 confirmed cases");

//***************** axes *******************/
// x axis
var xAxis2 = d3.axisBottom(x2)
    //.tickValues([400, 4000, 40000])
    //.tickFormat(d3.format("$"));
    .tickFormat(function(d){ return +d +"%"})
svg2.append("g")
    .attr("transform", "translate(0, " + height2 + ")")
    .call(xAxis2); 

// y axis
var yAxis2 = d3.axisLeft(y2)
    .tickFormat(function(d){ return +d })
svg2.append("g")
    .call(yAxis2);

//************* add a legend ***************/
var belowwellness = ["More than 75%", "More than 50%", "More than 25%","Less than 25%"]

var legend2 = svg2.append("g")
    .attr("transform", "translate(" + (width2 - 10) + ", " + (height2 - 300) + ")");

  belowwellness.forEach(function(belowwellness, i){
    var legendRow2 = legend2.append("g")
        .attr("transform", "translate(0, " + (i * 20) + ")")

    legendRow2.append("rect")
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", valueColor2(belowwellness))
      //.attr("class", function(i) { return (i) ? "bubbles" + belowwellness : null; }) 

    legendRow2.append("text")
      .attr("x", -10)
      .attr("y", 10)
      .attr("text-anchor", "end")
      //.style("text-transform", "capitalize")
      .attr("font-size", "12px")
      .text(belowwellness);
        
});
//Add title to legend
legend2.append("text")
.attr("x", -200)
.attr("y", -15)
.attr("font-size", "12px")
.text("Population vulnerable due to income:")


//*********** size population legend **************/
var z2 = d3.scaleSqrt()
.domain([200000, 1800000000 ])
.range([ 2, 30]);

var valuesToShow = [20000000, 200000000, 1500000000]
var xCircle2 = 390
var xLabel2 = 440
svg2
  .selectAll("legend")
  .data(valuesToShow)
  .enter()
  .append("circle")
    .attr("cx", 620)
    .attr("cy", function(d){ return height2 - 100 - z2(d) } )
    .attr("r", function(d){ return z2(d) })
    .style("fill", "none")
    .attr("stroke", "black")

 // Add legend: segments
 svg2
 .selectAll("legend")
 .data(valuesToShow)
 .enter()
 .append("line")
   .attr('x1', 625 )
   .attr('x2', 660)
   .attr('y1', function(d){ return height2 - 100 - z2(d) } )
   .attr('y2', function(d){ return height2 - 100 - z2(d) } )
   .attr('stroke', 'black')
   .style('stroke-dasharray', ('2,2'))

 // Add legend big circle
svg2
.append('text')
.attr('x', 690)
.attr("y", 235)
.attr("font-size", "10px")
.attr("text-anchor", "middle")
.text("1.8 million")
// add legend medium circle
svg2
.append('text')
.attr('x', 690)
.attr("y", 249)
.attr("font-size", "10px")
.attr("text-anchor", "middle")
.text("150 thousand")
// add legend small circle
svg2
.append('text')
.attr('x', 690)
.attr("y", 260)
.attr("font-size", "10px")
.attr("text-anchor", "middle")
.text("5 thousand")

/* 
svg2
 .selectAll("legend")
 .data(valuesToShow)
 .enter()
 .append("text")
   .attr('x', 686)
   .attr('y', function(d){ return height2 - 100 - z2(d) } )
   .text( function(d){ return d/1000000000 } )
   .style("font-size", 10)
   .attr('alignment-baseline', 'middle')
*/

// Legend title
svg2.append("text")
.attr('x', 650)
.attr("y", 195)
.attr("font-size", "12px")
.attr("text-anchor", "middle")
.text("Size of population:")
    
//interactive 

// What to do when one group is hovered
//var highlight = function(d){
  // reduce opacity of all groups
  //d3.selectAll(".bubbles").style("opacity", .05)
  // expect the one that is hovered
  //d3.selectAll("."+d).style("opacity", 1)
//}

// And when it is not hovered anymore
//var noHighlight = function(d){
  //d3.selectAll(".bubbles").style("opacity", 1)
//}

//***************** title *******************/
svg2.append("text")
  .attr("x", (width / 2))             
  .attr("y", 0 - (margin.top / 2))
  .attr("text-anchor", "middle")  
  .attr("font-weight",function(d,i) {return i*550+550;})
  .attr("font-family", function(d,i) {return i<5 ? "sans-serif" : "sans-serif"; })
  .style("font-size", "16px") 
  .style('fill', '222529')
  //.style("text-decoration", "bold")  
  .text("Cumulative cases of Covid-19 in municipalities by income vulnerability and size of population");


//************* Read the data ***************/

d3.csv("data/data_bubbles_chart.csv").then(function(data2){
    //console.log(data);
    data2.forEach(function(d){
        d.covid_total = +d.covid_total;
        d.covid_dead_total = +d.covid_dead_total;
        d.population = +d.population;
        d.percentage_below_line = +d.percentage_below_line;
    });

    var circles = svg2.selectAll("circle")
        .data(data2, function(d){ return d.Municipality; })
    circles.enter()
      .append("circle")
        .attr("fill", function(d){ return valueColor2(d.below_wellness_class) })
        .attr("stroke-width", ".6px")
        .attr("stroke", "white")
        .attr("opacity", .8)
        .on("mouseover", tip.show)
        .on("mouseout", tip.hide)
        .attr("class", function(d) { return (d) ? "bubbles" + d.below_wellness_class : null; })
        // create interactive bubbles when hover
        //.on("mouseover", function(d) { 
        //  svg2.selectAll("." + this.getAttribute('class')).style("opacity", 1)  
        //})
        //.on("mouseout", function(d) {  svg2.selectAll("."+ this.getAttribute('class')).style("opacity",.5) })
        .merge(circles)
          .attr("cx", function(d){ return x2(d.percentage_below_line)} )
          .attr("cy", function(d){ return y2(d.covid_total)} )
          .attr("r", function(d){ return Math.sqrt(area2(d.population)) }); 
      
  });


    


