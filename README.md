## 💡 Idea

![](https://img.shields.io/badge/-ReactJS-orange) ![](https://img.shields.io/badge/-PYTHON-green) ![](https://img.shields.io/badge/-DASH-red) ![](https://img.shields.io/github/issues/muntakim1/dash_cute_charts) [![GitHub license](https://img.shields.io/github/license/muntakim1/dash_cute_charts)](https://github.com/muntakim1/dash_cute_charts/blob/main/LICENSE) [![GitHub stars](https://img.shields.io/github/stars/muntakim1/dash_cute_charts)](https://github.com/muntakim1/dash_cute_charts/stargazers) [![GitHub forks](https://img.shields.io/github/forks/muntakim1/dash_cute_charts)](https://github.com/muntakim1/dash_cute_charts/network)

[chart.xkcd-react](https://www.npmjs.com/package/chart.xkcd-react) 📊 is an interesting visualization library written in React based on chart.xkcd, the chart style of [chart.xkcd-react](https://www.npmjs.com/package/chart.xkcd-react) is so beautiful that I love it at first sight. 😍😍

There is no doubt that Modern JavaScript has more advantages in interaction as well as visual effects. Besides that, as we all know, Python 🐍 is an expressive language and is loved by data science community. To build data sciecne products the community love to use [dash](https://dash.plotly.com/). I tried to combine both dashplotly with [chart.xkcd-react](https://www.npmjs.com/package/chart.xkcd-react) ended up building the [dash_cute_charts](https://github.com/muntakim1/dash_cute_charts) component for dash.

![image](/demo-assets/20190819131226.gif)

Get started with demo example:

1. `git clone https://github.com/muntakim1/dash_cute_charts.git`
2. Install Dash and its dependencies: https://dash.plotly.com/installation
3. Run `python usage.py`
4. Visit http://localhost:8050 in your web browser

## Usage 👨‍🏫

### Install

Install the dash-cute-charts from pypip using below command

`pip install dash-cute-charts `

### Usage with Dash

```python
import dash
import dash_html_components as html
from dash.dependencies import Input, Output

import dash_cute_charts

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        # Pie Chart
        dash_cute_charts.PieChart(
            id="pieChart",
            title="What Tim made of",
            dataset=[
                {
                    "data": [500, 200, 80, 90, 100],
                }
            ],
            labels=["a", "b", "e", "f", "g"],
            options=[
                {
                    "innerRadius": 0.5,
                }
            ],
        ),
        # Line Chart
        dash_cute_charts.LineChart(
            id="lineChart",
            title="Monthly income of an indie developer",
            xLabel="Month",
            yLabel="$ Dollors",
            labels=["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            dataset=[
                {
                    "label": "Plan",
                    "data": [30, 70, 200, 300, 500, 800, 1500, 2900, 5000, 8000],
                },
                {
                    "label": "Reality",
                    "data": [0, 1, 30, 70, 80, 100, 50, 80, 40, 150],
                },
            ],
        ),
        # BarChart
        dash_cute_charts.BarChart(
            id="barchart",
            title="github stars VS patron number",
            dataset=[
                {
                    "data": [100, 2],
                }
            ],
            labels=["github stars", "patrons"],
            options=[{"yTickCount": 2}],
        ),
    ]
)


if __name__ == "__main__":
    app.run_server(debug=True)
```

## Components 🧱

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

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

### Install dependencies

If you have selected install_dependencies during the prompt, you can skip this part.

1. Install npm packages
    ```
    $ npm install
    ```
2. Create a virtual env and activate.

    ```
    $ virtualenv venv
    $ . venv/bin/activate
    ```

    _Note: venv\Scripts\activate for windows_

3. Install python packages required to build components.
    ```
    $ pip install -r requirements.txt
    ```
4. Install the python packages for testing (optional)
    ```
    $ pip install -r tests/requirements.txt
    ```

-   Run code in a Python environment:
    1. Build your code
        ```
        $ npm run build
        ```
    2. Run and modify the `usage.py` sample dash app:
        ```
        $ python usage.py
        ```

## Maintainer 🤵

![](/demo-assets/rsz_profile.jpg)

Muntakimur Rahaman

IBM Certified Data Scientist

website: [www.muntakim.xyz](www.muntakim.xyz)

## Credits 🙏

[chart.xkcd-react](https://www.npmjs.com/package/chart.xkcd-react)
[chart.xkcd](https://github.com/timqian/chart.xkcd)

## 📃 License

MIT [©muntakim](https://github.com/muntakim1/)
