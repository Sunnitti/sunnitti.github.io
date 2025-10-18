const width = 800, height = 400;
const svg = d3.select("#chart")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

svg.append("text")
  .attr("x", width/2)
  .attr("y", height/2)
  .attr("text-anchor", "middle")
  .attr("font-size", "24px")
  .text("Hello, Steam Visualization!");
