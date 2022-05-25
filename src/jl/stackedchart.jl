# AUTO GENERATED FILE - DO NOT EDIT

export stackedchart

"""
    stackedchart(;kwargs...)

A StackedChart component.
StackedBarChart is an chartXkcd-react component.
It takes `labels`, and `dataset` as inputs.
displays a StackedBarChart.
It also takes title,xLabel,yLabel,options as optional inputs.
user can pass chart.xkcd options except the legend positions
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `dataset` (Array; required): The dataset for StackedBarChart.
- `labels` (Array; required): A labels for StackedBarChart.
- `options` (Array; optional): Options for the StackedBarChart.
- `title` (String; optional): The Title for StackedBarChart.
- `xLabel` (String; optional): The XLabel for StackedBarChart.
- `yLabel` (String; optional): The YLabel for StackedBarChart.
"""
function stackedchart(; kwargs...)
        available_props = Symbol[:id, :dataset, :labels, :options, :title, :xLabel, :yLabel]
        wild_props = Symbol[]
        return Component("stackedchart", "StackedChart", "dash_cute_charts", available_props, wild_props; kwargs...)
end

