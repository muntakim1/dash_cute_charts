# AUTO GENERATED FILE - DO NOT EDIT

export piechart

"""
    piechart(;kwargs...)

A PieChart component.
PieChart is an chartXkcd-react component.
It takes `labels`, and `dataset` as inputs.
displays a PieChart.
It also takes title,xLabel,yLabel,options as optional inputs.
user can pass chart.xkcd options except the legend positions
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `dataset` (Array; required): The dataset for PieChart.
- `labels` (Array; required): A labels for PieChart.
- `options` (Array; optional): Options for the PieChart.
- `title` (String; optional): The Title for PieChart.
- `xLabel` (String; optional): The XLabel for PieChart.
- `yLabel` (String; optional): The YLabel for PieChart.
"""
function piechart(; kwargs...)
        available_props = Symbol[:id, :dataset, :labels, :options, :title, :xLabel, :yLabel]
        wild_props = Symbol[]
        return Component("piechart", "PieChart", "dash_cute_charts", available_props, wild_props; kwargs...)
end

