import dash
import dash_html_components as html
from dash.dependencies import Input, Output

import dash_cute_charts

app = dash.Dash(__name__)

app.layout = html.Div(
    [
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
