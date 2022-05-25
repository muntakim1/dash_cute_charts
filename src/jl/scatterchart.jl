# AUTO GENERATED FILE - DO NOT EDIT

export scatterchart

"""
    scatterchart(;kwargs...)

A ScatterChart component.
ScatterChart is an chartXkcd-react component.
It takes `labels`, and `dataset` as inputs.
displays a ScatterChart.
It also takes title,xLabel,yLabel,options as optional inputs.
user can pass chart.xkcd options except the legend positions
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `dataset` (Array; required): The dataset for ScatterChart.
- `options` (Array; optional): Options for the ScatterChart.
- `title` (String; optional): The Title for ScatterChart.
- `xLabel` (String; optional): The XLabel for ScatterChart.
- `yLabel` (String; optional): The YLabel for ScatterChart.
"""
function scatterchart(; kwargs...)
        available_props = Symbol[:id, :dataset, :options, :title, :xLabel, :yLabel]
        wild_props = Symbol[]
        return Component("scatterchart", "ScatterChart", "dash_cute_charts", available_props, wild_props; kwargs...)
end

