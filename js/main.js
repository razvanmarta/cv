var value = 90;
var value1 = 80;
var value2 = 75;

function createChart(valueLocal, data, id) {
  var myChart = new Chart(document.getElementById(id), {
    type: "doughnut",
    data: data,
    options: {
      elements: {
        center: {
          text: valueLocal
        }
      },
      responsive: true,
      legend: {
        display: false
      },
      cutoutPercentage: 80,
      tooltips: {
        filter: function (item, data) {
          var label = data.labels[item.index];
          if (label) return item;
        }
      }
    }
  });
}
Chart.pluginService.register({
  beforeDraw: function (chart) {
    var width = chart.chart.width,
      height = chart.chart.height,
      ctx = chart.chart.ctx;

    ctx.restore();
    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";

    var text = chart.config.options.elements.center.text + "%",
      textX = Math.round((width - ctx.measureText(text).width) / 2),
      textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  }
});

function textCenter(val) { }
var data = {
  labels: ["My val", ""],
  datasets: [
    {
      data: [value, 100 - value],
      backgroundColor: ["#0dc9c99c", "#AAAAAA"],
      hoverBackgroundColor: ["#0dc9c99c", "#AAAAAA"],
      hoverBorderColor: ["#0dc9c99c", "#ffffff"]
    }
  ]
};
// ..............................................................
var data2 = {
  labels: ["My val", ""],
  datasets: [
    {
      data: [value1, 100 - value1],
      backgroundColor: ["#0dc9c99c", "#AAAAAA"],
      hoverBackgroundColor: ["#0dc9c99c", "#AAAAAA"],
      hoverBorderColor: ["#0dc9c99c", "#ffffff"]
    }
  ]
};

// .........................................

var data3 = {
  labels: ["My val", ""],
  datasets: [
    {
      data: [value2, 100 - value2],
      backgroundColor: ["#0dc9c99c", "#AAAAAA"],
      hoverBackgroundColor: ["#0dc9c99c", "#AAAAAA"],
      hoverBorderColor: ["#0dc9c99c", "#ffffff"]
    }
  ]
};
createChart(value, data, "myChart");
createChart(value1, data2, "myChartTwo");
createChart(value2, data3, "myChartThree");
