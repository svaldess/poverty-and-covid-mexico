//--------------------------------------------------/
//                    SVG6
//--------------------------------------------------/

// Code based on some elements of Robert Petterson (available at: https://bl.ocks.org/LemoNode/5a64865728c6059ed89388b5f83d6b67)

//************* data ***************/ 
dataX = [
  {week: "week 1 - January",covid_very_high: 0,covid_high: 0,covid_moderate: 0,covid_low: 0},
  {week: "w2",covid_very_high: 0,covid_high: 0,covid_moderate: 0,covid_low: 0},
  {week: "w3",covid_very_high: 0,covid_high: 0,covid_moderate: 1,covid_low: 1},
  {week: "w4",covid_very_high: 0,covid_high: 0,covid_moderate: 0,covid_low: 0},
  {week: "w5",covid_very_high: 0,covid_high: 0,covid_moderate: 1,covid_low: 1},
  {week: "week 6 - February",covid_very_high: 0,covid_high: 0,covid_moderate: 0,covid_low: 1},
  {week: "w7",covid_very_high: 0,covid_high: 0,covid_moderate: 0,covid_low: 0},
  {week: "w8",covid_very_high: 0,covid_high: 0,covid_moderate: 1,covid_low: 0},
  {week: "w9",covid_very_high: 0,covid_high: 0,covid_moderate: 0,covid_low: 1},
  {week: "w10",covid_very_high: 0,covid_high: 0,covid_moderate: 6,covid_low: 0},
  {week: "week 11 - March",covid_very_high: 0,covid_high: 1,covid_moderate: 6,covid_low: 3},
  {week: "w12",covid_very_high: 1,covid_high: 6,covid_moderate: 123,covid_low: 80},
  {week: "w13",covid_very_high: 2,covid_high: 32,covid_moderate: 348,covid_low: 196},
  {week: "w14",covid_very_high: 6,covid_high: 74,covid_moderate: 766,covid_low: 273},
  {week: "w15",covid_very_high: 4,covid_high: 37,covid_moderate: 399,covid_low: 355},
  {week: "w16",covid_very_high: 13,covid_high: 105,covid_moderate: 925,covid_low: 780},
  {week: "week 17 - April",covid_very_high: 33,covid_high: 309,covid_moderate: 2115,covid_low: 146},
  {week: "w18",covid_very_high: 57,covid_high: 691,covid_moderate: 3959,covid_low: 1155},
  {week: "w19",covid_very_high: 114,covid_high: 1185,covid_moderate: 5822,covid_low: 1563},
  {week: "w20",covid_very_high: 94,covid_high: 942,covid_moderate: 4394,covid_low: 1384},
  {week: "w21",covid_very_high: 73,covid_high: 555,covid_moderate: 2497,covid_low: 691},
  {week: "week 22 - May",covid_very_high: 204,covid_high: 1828,covid_moderate: 9167,covid_low: 2703},
  {week: "w23",covid_very_high: 281,covid_high: 2805,covid_moderate: 11847,covid_low: 3380},
  {week: "w24",covid_very_high: 363,covid_high: 3632,covid_moderate: 14355,covid_low: 3746},
  {week: "w25",covid_very_high: 409,covid_high: 4301,covid_moderate: 16413,covid_low: 4102},
  {week: "w26",covid_very_high: 568,covid_high: 4828,covid_moderate: 18564,covid_low: 4427},
  {week: "w27 - June",covid_very_high: 597,covid_high: 5856,covid_moderate: 20194,covid_low: 5113},
  {week: "w28",covid_very_high: 614,covid_high: 5935,covid_moderate: 21327,covid_low: 5113},
  {week: "w29",covid_very_high: 511,covid_high: 4307,covid_moderate: 15928,covid_low: 4613},
  {week: "w30",covid_very_high: 27,covid_high: 189,covid_moderate: 666,covid_low: 347},
]

dataY = [
  {week: "week 1 - January",covid_very_high: 0,covid_high: 0,covid_moderate: 1,covid_low: 0},
  {week: "w2",covid_very_high: 1,covid_high: 0,covid_moderate: 3,covid_low: 0},
  {week: "w3",covid_very_high: 0,covid_high: 0,covid_moderate: 1,covid_low: 0},
  {week: "w4",covid_very_high: 0,covid_high: 0,covid_moderate: 1,covid_low: 0},
  {week: "w5",covid_very_high: 0,covid_high: 0,covid_moderate: 0,covid_low: 0},
  {week: "week 6 - February",covid_very_high: 0,covid_high: 0,covid_moderate: 2,covid_low: 0},
  {week: "w7",covid_very_high: 0,covid_high: 0,covid_moderate: 4,covid_low: 0},
  {week: "w8",covid_very_high: 0,covid_high: 1,covid_moderate: 4,covid_low: 0},
  {week: "w9",covid_very_high: 0,covid_high: 1,covid_moderate: 2,covid_low: 1},
  {week: "w10",covid_very_high: 0,covid_high: 0,covid_moderate: 0,covid_low: 0},
  {week: "week 11 - March",covid_very_high: 0,covid_high: 0,covid_moderate: 7,covid_low: 2},
  {week: "w12",covid_very_high: 0,covid_high: 2,covid_moderate: 8,covid_low: 5},
  {week: "w13",covid_very_high: 0,covid_high: 10,covid_moderate: 54,covid_low: 16},
  {week: "w14",covid_very_high: 6,covid_high: 42,covid_moderate: 265,covid_low: 82},
  {week: "w15",covid_very_high: 4,covid_high: 18,covid_moderate: 121,covid_low: 31},
  {week: "w16",covid_very_high: 7,covid_high: 76,covid_moderate: 353,covid_low: 116},
  {week: "week 17 - April",covid_very_high: 19,covid_high: 149,covid_moderate: 709,covid_low: 236},
  {week: "w18",covid_very_high: 33,covid_high: 263,covid_moderate: 1130,covid_low: 328},
  {week: "w19",covid_very_high: 54,covid_high: 446,covid_moderate: 1559,covid_low: 401},
  {week: "w20",covid_very_high: 37,covid_high: 288,covid_moderate: 1091,covid_low: 228},
  {week: "w21",covid_very_high: 29,covid_high: 202,covid_moderate: 804,covid_low: 182},
  {week: "week 22 - May",covid_very_high: 72,covid_high: 549,covid_moderate: 2207,covid_low: 513},
  {week: "w23",covid_very_high: 79,covid_high: 756,covid_moderate: 2654,covid_low: 617},
  {week: "w24",covid_very_high: 96,covid_high: 818,covid_moderate: 2524,covid_low: 615},
  {week: "w25",covid_very_high: 78,covid_high: 808,covid_moderate: 2771,covid_low: 594},
  {week: "w26",covid_very_high: 112,covid_high: 872,covid_moderate: 2844,covid_low: 589},
  {week: "w27 - June",covid_very_high: 93,covid_high: 815,covid_moderate: 2561,covid_low: 568},
  {week: "w28",covid_very_high: 71,covid_high: 568,covid_moderate: 1956,covid_low: 403},
  {week: "w29",covid_very_high: 39,covid_high: 258,covid_moderate: 920,covid_low: 209},
  {week: "w30",covid_very_high: 3,covid_high: 18,covid_moderate: 38,covid_low: 4},
]

//************* set dimensions ***************/ 
var margin6 = {left: 80, right: 20, top: 60, bottom: 100 };
var width6 = 800 - margin6.left - margin6.right,
    height6 = 500 - margin6.top - margin6.bottom;

//*************** setup svg *****************/
var svg6 = d3.select("#svg6")
  .append("svg")
    .attr("width", width6 + margin6.left + margin6.right)
    .attr("height", height6 + margin6.top + margin6.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin6.left + "," + margin6.top + ")");

//***************** title *******************/
svg6.append("text")
  .attr("x", (width6 / 2))             
  .attr("y", 0 - (margin6.top / 2))
  .attr("text-anchor", "middle")  
  .attr("font-weight",function(d,i) {return i*550+550;})
  .attr("font-family", function(d,i) {return i<5 ? "sans-serif" : "sans-serif"; })
  .style("font-size", "17px") 
  .style('fill', '222529')
  .text("Weekly Covid-19 confirmed cases and deaths in regions by level of poverty");

//************* Axes ******+*********/ 
// X Axis
var x6 = d3.scaleBand()
    .range([0, width6])
    .padding([0.2])

var xAxis6 = svg6.append("g")
    .attr("transform", "translate(0," + height6 + ")")
    .attr("class", "x-axis")

// Y axis
var y6 = d3.scaleLinear()
  .range([ height6, 0 ]);

// yAxis
var yAxis6 = svg6.append("g")
  //.attr("transform", "translate(0," + margin6.left + "," + margin6.top + ")")
  .attr("transform", "translate(0," + 0 + ")")
  .attr("class", "y-axis")

//*********** Update function *************/
function update6(data6) {
  // List of subgroups 
  var subgroups = ["covid_very_high","covid_high","covid_moderate","covid_low"]

  // List of groups 
  var groups = d3.map(data6, function(d){return(d.week)}).keys()

  data6.forEach(function(d) {
    d.total = d3.sum(subgroups, k => +d[k])
    return d
  })

  //************* X Axis ***************/
  x6.domain(groups)

   // add transition
   svg6.selectAll(".x-axis")
    .transition()
    .duration(1000)
    .call(d3.axisBottom(x6).tickSizeOuter(0))
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", function (d) { return "rotate(-30)"; });
    
  //add label
  svg6.append("text")
    .attr("y", height6+80)
    .attr("x", width6/2)
    .attr("font-size", "15px")
    .attr("text-anchor", "middle")
    .text("Date (number of week)");

  //************* Y Axis ***************/
  // add domain
  y6.domain([0, d3.max(data6, d => d3.sum(subgroups, k => +d[k]))]).nice();
  
  // add transition
  svg6.selectAll(".y-axis")
    .transition()
    .duration(1000)
    .call(d3.axisLeft(y6));
  
  //add label
  svg6.append("text")
    .attr("y", -60)
    .attr("x", -(height6/2))
    .attr("font-size", "15px")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .text("Total cases");

  //***************** color *******************/
  var color6 = d3.scaleOrdinal()
    .domain(subgroups)
    .range([ "#16296e","#58738d","#4f92f7","#99c2ff"])

//*************** add a legend *****************/
  var classification = ["Very high", "High", "Moderate", "Low"]

  var legend6 = svg6.append("g")
      .attr("transform", "translate(" + (width6 - 670) + ", " + (height6 - 330) + ")");

      classification.forEach(function(classification, i){
      var legendRow6 = legend6.append("g")
          .attr("transform", "translate(0, " + (i * 20) + ")")

      legendRow6.append("rect")
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill", color6(classification))
        //.attr("class", function(i) { return (i) ? "bubbles" + belowwellness : null; }) 

      legendRow6.append("text")
        .attr("x", +20)
        .attr("y", 10)
        .attr("font-size", "12px")
        .attr("text-anchor", "start")
        .style("text-transform", "capitalize")
        .text(classification);  
  });

  //************** stack data *****************/
  var stackedData = d3.stack()
    .keys(subgroups)
    (data6)
  
  //************** create bars *****************/
  var group = svg6//.append("g")
    .selectAll("g.layer")
    // Enter in the stack data = loop key per key = group per group
    .data(stackedData)
  
    group.exit().remove()
  
    group.enter()
    .append("g")
    .classed("layer", true)
    .attr("fill", function(d) { return color6(d.key); })
    
    var bars = svg6.selectAll("g.layer").selectAll("rect")
      // enter a second time = loop subgroup per subgroup to add all rectangles
      .data(function(d) { return d; })
    
    bars.exit().remove()

    bars
      .enter()
      .append("rect")
        .attr("width",x6.bandwidth())
        .merge(bars)
      .transition()
      .duration(1000)
        .attr("x", function(d) { return x6(d.data.week); })
        .attr("y", function(d) { return y6(d[1]); })
        .attr("height", function(d) { return y6(d[0]) - y6(d[1]); })

}
         
update6(dataX)