
google.charts.load('current', {'packages':['corechart','geochart']});
google.charts.setOnLoadCallback(drawBarChart);

function getRandomArbitrary(min, max) {
return Math.random() * (max - min) + min;
}
var countries = ["France","Indonesia","Vietnam","India","China","Portugal","Argentina","Morocco"];
function drawBarChart() {
      var myArray = new Array(8);
      for (var i = 0; i < myArray.length; i++) {
            // Fill array with random numbers
            myArray[i] = getRandomArbitrary(0, 10);
      }
      var max = -1;
      var min = 10;
      // calculate min and max of array
      for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] > max){
                  max = i;
            }
            if (myArray[i] < min){
                  min = i;
            }
      }
      // Create the data table.
      var data = google.visualization.arrayToDataTable([
      ['Country', 'Density', { role: 'style' }],
      [countries[0], myArray[0], 'blue'],            
      [countries[1], myArray[1], 'blue'],            
      [countries[2], myArray[2], 'blue'],
      [countries[3], myArray[3], 'blue' ],
      [countries[4], myArray[4], 'blue' ],
      [countries[5], myArray[5], 'blue' ],
      [countries[6], myArray[6], 'blue'],
      [countries[7], myArray[7], 'blue' ],
      ]);

      // Set chart options
      var options = {'title':'Country polution in µg/m3',
      'width':400,
      'height':400,
      legend: 'none'};

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
      chart.draw(data, options);
}
function drawGeoChart() {
      // Create the data table.
      var myArray = new Array(8);
      for (var i = 0; i < myArray.length; i++) {
            // Fill array with random numbers
            myArray[i] = getRandomArbitrary(0, 10);
      }
      var max = -1;
      var min = 10;
      // calculate min and max of array
      for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] > max){
                  max = i;
            }
            if (myArray[i] < min){
                  min = i;
            }
      }
      // Create the data table.
      var data = google.visualization.arrayToDataTable([
      ['Country', 'Polution level'],
      [countries[0], myArray[0]],            
      [countries[1], myArray[1]],            
      [countries[2], myArray[2]],
      [countries[3], myArray[3]],
      [countries[4], myArray[4]],
      [countries[5], myArray[5]],
      [countries[6], myArray[6]],
      [countries[7], myArray[7]],
      ]);

      // Set chart options
      var options = {'title':'Country polution in µg/m3',
      'width':900,
      'height':400,
      colorAxis: {colors: ['green', 'red']}
      };

      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
      chart.draw(data, options);
}
