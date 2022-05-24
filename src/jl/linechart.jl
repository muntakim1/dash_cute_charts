# AUTO GENERATED FILE - DO NOT EDIT

export linechart

"""
    linechart(;kwargs...)

A LineChart component.
LineChart is an chartXkcd-react component.
It takes `labels`, and `dataset` as inputs.
displays a LineChart.
It also takes title,xLabel,yLabel,options as optional inputs.
user can pass chart.xkcd options except the legend positions
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `dataset` (Array; required): The dataset for LineChart.
- `labels` (Array; required): A labels for lineChart.
- `options` (Array; optional): Options for the LineChart.
- `title` (String; optional): The Title for LineChart.
- `xLabel` (String; optional): The XLabel for LineChart.
- `yLabel` (String; optional): The YLabel for LineChart.
"""
function linechart(; kwargs...)
        available_props = Symbol[:id, :dataset, :labels, :options, :title, :xLabel, :yLabel]
        wild_props = Symbol[]
        return Component("linechart", "LineChart", "dash_cute_charts", available_props, wild_props; kwargs...)
end

