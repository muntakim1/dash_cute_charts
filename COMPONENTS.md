# Component Documentation.

### LineChart 📈

<strong>id</strong> (String)(Required): Id to identify in dash callbacks.

<strong>title</strong>(String)(Optional): Title for the chart.

<strong>xLabel</strong>(String)(Optional): X axis label.

<strong>yLabel</strong>(String)(Optional): Y axis label.

<strong>labels</strong>(Array)(Required): Array of labels (Strings / Numbers)
Example:`python [30, 70, 200, 300, 500, 800, 1500, 2900, 5000, 8000]`

<strong>dataset</strong>(Array)(Required): Array of Python Dictionary.
Example:`[{"label": "Plan", "data": [30, 70, 200, 300, 500, 800, 1500, 2900, 5000, 8000], },{ "label": "Reality", "data": [0, 1, 30, 70, 80, 100, 50, 80, 40, 150], },] `

<strong>options</strong>(Array)(Optional): Pass [chart.xkcd-react](https://www.npmjs.com/package/chart.xkcd-react) options as object array
` options=[{"yTickCount": 2}],`

### Barchart 📊

<strong>id</strong> (String)(Required): Id to identify in dash callbacks.

<strong>title</strong>(String)(Optional): Title for the chart.

<strong>xLabel</strong>(String)(Optional): X axis label.

<strong>yLabel</strong>(String)(Optional): Y axis label.

<strong>labels</strong>(Array)(Required): Array of labels (Strings / Numbers, Example:`['A','B']`

<strong>dataset</strong>(Array)(Required): Array of Python Dictionary.
Example:` {"data": [30, 70,] },`

<strong>options</strong>(Array)(Optional): Pass [chart.xkcd-react](https://www.npmjs.com/package/chart.xkcd-react) options as object array `options=[{"yTickCount": 2}],`

### PieChart 🧿

<strong>id</strong> (String)(Required): Id to identify in dash callbacks.

<strong>title</strong>(String)(Optional): Title for the chart.

<strong>xLabel</strong>(String)(Optional): X axis label.

<strong>yLabel</strong>(String)(Optional): Y axis label.

<strong>labels</strong>(Array)(Required): Array of labels (Strings / Numbers,Example: `["a", "b", "e", "f", "g"]`

<strong>dataset</strong>(Array)(Required): Array of Python Dictionary, Example:`{"data": [500, 200, 80, 90, 100]},`

<strong>options</strong>(Array)(Optional): Pass [chart.xkcd-react](https://www.npmjs.com/package/chart.xkcd-react) options as object array ` options=[{ "innerRadius": 0.5,}],`

### RadarChart 🧿

<strong>id</strong> (String)(Required): Id to identify in dash callbacks.

<strong>title</strong>(String)(Optional): Title for the chart.

<strong>xLabel</strong>(String)(Optional): X axis label.

<strong>yLabel</strong>(String)(Optional): Y axis label.

<strong>labels</strong>(Array)(Required): Array of labels (Strings / Numbers,Example: `["a", "b", "e", "f", "g"]`

<strong>dataset</strong>(Array)(Required): Array of Python Dictionary, Example:`{"data": [500, 200, 80, 90, 100]},`

<strong>options</strong>(Array)(Optional): Pass [chart.xkcd-react](https://www.npmjs.com/package/chart.xkcd-react) options as object array ` options=[{ "innerRadius": 0.5,}],`

### ScatterChart 🧿

<strong>id</strong> (String)(Required): Id to identify in dash callbacks.

<strong>title</strong>(String)(Optional): Title for the chart.

<strong>xLabel</strong>(String)(Optional): X axis label.

<strong>yLabel</strong>(String)(Optional): Y axis label.

<strong>dataset</strong>(Array)(Required): Array of Python Dictionary, Example:`{"label":"Pickachu", "data": [ {"x": 3, "y": 10}, {"x": 4, "y": 122}, {"x": 10, "y": 100}, {"x": 1, "y": 2}, {"x": 2, "y": 4}, ],},`

<strong>options</strong>(Array)(Optional): Pass [chart.xkcd-react](https://www.npmjs.com/package/chart.xkcd-react) options as object array ` options=[{ "innerRadius": 0.5,"showline":true}],`

### StackedBarChart 🧿

<strong>id</strong> (String)(Required): Id to identify in dash callbacks.

<strong>title</strong>(String)(Optional): Title for the chart.

<strong>xLabel</strong>(String)(Optional): X axis label.

<strong>yLabel</strong>(String)(Optional): Y axis label.

<strong>labels</strong>(Array)(Required): Array of labels (Strings / Numbers,Example: `["a", "b", "e", "f", "g"]`

<strong>dataset</strong>(Array)(Required): Array of Python Dictionary, Example:`{"data": [500, 200, 80, 90, 100]},`

<strong>options</strong>(Array)(Optional): Pass [chart.xkcd-react](https://www.npmjs.com/package/chart.xkcd-react) options as object array ` options=[{ "innerRadius": 0.5}],`
