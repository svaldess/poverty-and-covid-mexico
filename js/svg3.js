//--------------------------------------------------/
//                    SVG3
//--------------------------------------------------/

// Code based on the work of Sophie Krüger avialable at https://bl.ocks.org/bytesbysophie/0311395c1e082f98e67efaf2c7f9555b

//************* set dimensions ***************/

var margin3 = {left:80, right:20, top: 50, bottom: 100},
    width3 = 800 - margin3.left - margin3.right,
    height3 = 500 - margin3.top - margin3.bottom;
var barWidth3 = 60;
var boxPlotColor = "#2c2d2e";
var medianLineColor = "#ffffff";
var axisColor = "#2c2d2e";

//************** setup svg  *****************/
var svg3 = d3.select("#svg3")
.append("svg")
    .attr("width", width3 + margin3.left + margin3.right)
    .attr("height", height3 + margin3.top + margin3.bottom)
.append("g")
    .attr("transform", "translate(" + (margin3.left - barWidth3) + "," + margin3.top + ")");

//***************** axes *******************/
var yAxisBox3 = svg3.append("g").attr("transform", "translate(40,0)");
var xAxisBox3 = svg3.append("g").attr("transform", "translate(40,0)");

//************* labels ***************/
var xLabel3 = svg3.append("text")
    .attr("y", height3 + 50)
    .attr("x", width3 / 2)
    .attr("font-size", "13px")
    .attr("text-anchor", "middle")
    .text("Level of deprivation of health services");

var yLabel3 = svg3.append("text")
    .attr("y", 0 )
    .attr("x", -150)
    .attr("font-size", "13px")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90) ")
    .text("Total deaths");

//***************** title *******************/
svg3.append("text")
  .attr("x", (width / 2))             
  .attr("y", 0 - (margin.top / 2))
  .attr("text-anchor", "middle")  
  .attr("font-weight",function(d,i) {return i*550+550;})
  .attr("font-family", function(d,i) {return i<5 ? "sans-serif" : "sans-serif"; })
  .style("font-size", "17px") 
  .style('fill', '222529')
  //.style("text-decoration", "bold")  
  .text("Cumulative Covid-19 deaths by states classified by deprivation of health services");

//*************** Read data *****************/
d3.json("data/deaths_bystate.json").then(groupCounts => {
    // Select all values into one Array for axis scaling (min/ max)
    // and sort group counts so quantile methods work
    var globalCounts = [];
    for (var key in groupCounts) {
        var groupCount = groupCounts[key]
        groupCounts[key] = groupCount.sort(sortNumber);
        groupCounts[key].forEach(element => {
            globalCounts.push(element);
        });
    }

    // Prepare the data for the box plots
    var plotData = [];

    for (var [key, groupCount] of Object.entries(groupCounts)) {
        var record = {};
        var localMin = d3.min(groupCount);
        var localMax = d3.max(groupCount);

        record["key"] = key;
        record["counts"] = groupCount;
        record["quartile"] = boxQuartiles(groupCount);
        record["whiskers"] = [localMax, localMin];

        plotData.push(record);
    } 
    
    // Create Tooltips
    var tip3 = d3.tip().attr('class', 'd3-tip').direction('e').offset([0,5])
        .html(function(d) {
            var content = "<span style='margin-left: 2.5px;color: #a2c6fc; text-transform: capitalize'><b>" + d.key + "</b></span><br>";
            content +=`
                <table style="margin-top: 2.5px;">
                        <tr><td>Max: </td><td style="text-align: right; color: #a2c6fc">` + d3.format(",.0f")(d.whiskers[0]) + `</td></tr>
                        <tr><td>Q3: </td><td style="text-align: right; color: #a2c6fc">` + d3.format(",.0f")(d.quartile[0]) + `</td></tr>
                        <tr><td>Median: </td><td style="text-align: right; color: #a2c6fc">` + d3.format(",.0f")(d.quartile[1]) + `</td></tr>
                        <tr><td>Q1: </td><td style="text-align: right; color: #a2c6fc">` + d3.format(",.0f")(d.quartile[2]) + `</td></tr>
                        <tr><td>Min: </td><td style="text-align: right; color: #a2c6fc">` + d3.format(",.0f")(d.whiskers[1]) + `</td></tr>
                </table>
                `;
            return content;
        });
    svg3.call(tip3);

    // Compute an ordinal xScale for the keys in plotData
    var xScale3 = d3.scalePoint()
    .domain(Object.keys(groupCounts))
    .rangeRound([0, width3])
    .padding([0.5]);

    // Compute a global y scale based on the global counts
    var min3 = d3.min(globalCounts);
    var max3 = d3.max(globalCounts);
    var yScale3 = d3.scaleLinear()
        .range([height3, 0])
        .domain([min3, max3])
        .nice();

    // Setup the group the box plot elements will render in
    var g = svg3.append("g")
    .attr("transform", "translate(20,0)");

    // Draw the box plot vertical lines
    var verticalLines = g.selectAll(".verticalLines")
    .data(plotData)
    .enter()
    .append("line")
    .attr("x1", d => { return xScale3(d.key) + barWidth3/2; })
    .attr("y1", d =>  { return yScale3(d.whiskers[0]); })
    .attr("x2", d =>  { return xScale3(d.key) + barWidth3/2; })
    .attr("y2", d => { return yScale3(d.whiskers[1]); })
    .attr("stroke", boxPlotColor)
    .attr("stroke-width", 1)
    .attr("stroke-dasharray", "5,5")
    .attr("fill", "none");

    // Draw the boxes of the box plot, filled in white and on top of vertical lines
    var rects = g.selectAll("rect")
    .data(plotData)
    .enter()
    .append("rect")
    .attr("width", barWidth3)
    .attr("height", d => { return yScale3(d.quartile[2]) - yScale3(d.quartile[0]); })
    .attr("x", d => { return xScale3(d.key); })
    .attr("y", d => { return yScale3(d.quartile[0]); })
    .attr("fill", '#4f92f7')
    .attr("stroke", boxPlotColor)
    .attr("stroke-width", 1)
    .on('mouseover', tip3.show)
    .on('mouseout', tip3.hide);

    // Config for whiskers and median
    var horizontalLineConfigs = [
    {   // Top whisker
        x1: d => { return xScale3(d.key) },
        y1: d => { return yScale3(d.whiskers[0]) },
        x2: d => { return xScale3(d.key) + barWidth3 },
        y2: d => { return yScale3(d.whiskers[0]) },
        color: boxPlotColor
    },
    {   // Median
        x1: d => { return xScale3(d.key) },
        y1: d => { return yScale3(d.quartile[1]) },
        x2: d => { return xScale3(d.key) + barWidth3 },
        y2: d => { return yScale3(d.quartile[1]) },
        color: medianLineColor
    },
    {   // Bottom whisker
        x1: d => { return xScale3(d.key) },
        y1: d => { return yScale3(d.whiskers[1]) },
        x2: d => { return xScale3(d.key) + barWidth3 },
        y2: d => { return yScale3(d.whiskers[1]) },
        color: boxPlotColor
    }
    ];
        
    // Draw the whiskers and median line
    for(var i=0; i < horizontalLineConfigs.length; i++) {
        var lineConfig = horizontalLineConfigs[i];
        var horizontalLine = g.selectAll(".whiskers")
            .data(plotData)
            .enter()
            .append("line")
            .attr("x1", lineConfig.x1)
            .attr("y1", lineConfig.y1)
            .attr("x2", lineConfig.x2)
            .attr("y2", lineConfig.y2)
            .attr("stroke", lineConfig.color)
            .attr("stroke-width", 1)
            .attr("fill", "none");
    }

    // Setup a scale on the left
    var yAxis3 = d3.axisLeft(yScale3).ticks(6,"s")
    yAxisBox3.append("g")
        .attr("class", "y axis")
        .call(yAxis3);

    // Setup a series axis on the bottom
    var xAxis3 = d3.axisBottom(xScale3);
    xAxisBox3.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height3 + ")")
        .call(xAxis3);
});

// Quartile definition
function boxQuartiles(d) {
    return [
        d3.quantile(d, .75),
        d3.quantile(d, .5),
        d3.quantile(d, .25),
    ];
}

// Perform a numeric sort on an array
function sortNumber(a,b) { return a - b; }