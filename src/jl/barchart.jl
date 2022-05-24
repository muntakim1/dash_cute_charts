# AUTO GENERATED FILE - DO NOT EDIT

export barchart

"""
    barchart(;kwargs...)

A BarChart component.
BarChart is an chartXkcd-react component.
It takes `labels`, and `dataset` as inputs.
displays a BarChart.
It also takes title,xLabel,yLabel,options as optional inputs.
user can pass chart.xkcd options except the legend positions
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `dataset` (Array; required): The dataset for BarChart.
- `labels` (Array; required): A labels for BarChart.
- `options` (Array; optional): Options for the BarChart.
- `title` (String; optional): The Title for BarChart.
- `xLabel` (String; optional): The XLabel for BarChart.
- `yLabel` (String; optional): The YLabel for BarChart.
"""
function barchart(; kwargs...)
        available_props = Symbol[:id, :dataset, :labels, :options, :title, :xLabel, :yLabel]
        wild_props = Symbol[]
        return Component("barchart", "BarChart", "dash_cute_charts", available_props, wild_props; kwargs...)
end

