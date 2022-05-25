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

<strong>style</strong>(Array)(Optional): Pass jsx styles as a array ` style=[{"width":"100px"}]`

### Barchart 📊

<strong>id</strong> (String)(Required): Id to identify in dash callbacks.

<strong>title</strong>(String)(Optional): Title for the chart.

<strong>xLabel</strong>(String)(Optional): X axis label.

<strong>yLabel</strong>(String)(Optional): Y axis label.

<strong>labels</strong>(Array)(Required): Array of labels (Strings / Numbers, Example:`['A','B']`

<strong>dataset</strong>(Array)(Required): Array of Python Dictionary.
Example:` {"data": [30, 70,] },`

<strong>options</strong>(Array)(Optional): Pass [chart.xkcd-react](https://www.npmjs.com/package/chart.xkcd-react) options as object array `options=[{"yTickCount": 2}],`

<strong>style</strong>(Array)(Optional): Pass jsx styles as a array ` style=[{"width":"100px"}]`

### PieChart 🧿

<strong>id</strong> (String)(Required): Id to identify in dash callbacks.

<strong>title</strong>(String)(Optional): Title for the chart.

<strong>xLabel</strong>(String)(Optional): X axis label.

<strong>yLabel</strong>(String)(Optional): Y axis label.

<strong>labels</strong>(Array)(Required): Array of labels (Strings / Numbers,Example: `["a", "b", "e", "f", "g"]`

<strong>dataset</strong>(Array)(Required): Array of Python Dictionary, Example:`{"data": [500, 200, 80, 90, 100]},`

<strong>options</strong>(Array)(Optional): Pass [chart.xkcd-react](https://www.npmjs.com/package/chart.xkcd-react) options as object array ` options=[{ "innerRadius": 0.5,}],`

<strong>style</strong>(Array)(Optional): Pass jsx styles as a array ` style=[{"width":"100px"}]`

### RadarChart 🧿

<strong>id</strong> (String)(Required): Id to identify in dash callbacks.

<strong>title</strong>(String)(Optional): Title for the chart.

<strong>xLabel</strong>(String)(Optional): X axis label.

<strong>yLabel</strong>(String)(Optional): Y axis label.

<strong>labels</strong>(Array)(Required): Array of labels (Strings / Numbers,Example: `["a", "b", "e", "f", "g"]`

<strong>dataset</strong>(Array)(Required): Array of Python Dictionary, Example:`{"data": [500, 200, 80, 90, 100]},`

<strong>options</strong>(Array)(Optional): Pass [chart.xkcd-react](https://www.npmjs.com/package/chart.xkcd-react) options as object array ` options=[{ "innerRadius": 0.5,}],`

<strong>style</strong>(Array)(Optional): Pass jsx styles as a array ` style=[{"width":"100px"}]`

### ScatterChart 🧿

<strong>id</strong> (String)(Required): Id to identify in dash callbacks.

<strong>title</strong>(String)(Optional): Title for the chart.

<strong>xLabel</strong>(String)(Optional): X axis label.

<strong>yLabel</strong>(String)(Optional): Y axis label.

<strong>labels</strong>(Array)(Required): Array of labels (Strings / Numbers,Example: `["a", "b", "e", "f", "g"]`

<strong>dataset</strong>(Array)(Required): Array of Python Dictionary, Example:`{"data": [500, 200, 80, 90, 100]},`

<strong>options</strong>(Array)(Optional): Pass [chart.xkcd-react](https://www.npmjs.com/package/chart.xkcd-react) options as object array ` options=[{ "innerRadius": 0.5,"showline":true}],`

<strong>style</strong>(Array)(Optional): Pass jsx styles as a array ` style=[{"width":"100px"}]`

### StackedBarChart 🧿

<strong>id</strong> (String)(Required): Id to identify in dash callbacks.

<strong>title</strong>(String)(Optional): Title for the chart.

<strong>xLabel</strong>(String)(Optional): X axis label.

<strong>yLabel</strong>(String)(Optional): Y axis label.

<strong>labels</strong>(Array)(Required): Array of labels (Strings / Numbers,Example: `["a", "b", "e", "f", "g"]`

<strong>dataset</strong>(Array)(Required): Array of Python Dictionary, Example:`{"data": [500, 200, 80, 90, 100]},`

<strong>options</strong>(Array)(Optional): Pass [chart.xkcd-react](https://www.npmjs.com/package/chart.xkcd-react) options as object array ` options=[{ "innerRadius": 0.5}],`

<strong>style</strong>(Array)(Optional): Pass jsx styles as a array ` style=[{"width":"100px"}]`
