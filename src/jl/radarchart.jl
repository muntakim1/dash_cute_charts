# AUTO GENERATED FILE - DO NOT EDIT

export radarchart

"""
    radarchart(;kwargs...)

A RadarChart component.
RadarChart is an chartXkcd-react component.
It takes `labels`, and `dataset` as inputs.
displays a RadarChart.
It also takes title,xLabel,yLabel,options as optional inputs.
user can pass chart.xkcd options except the legend positions
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `dataset` (Array; required): The dataset for RadarChart.
- `labels` (Array; required): A labels for RadarChart.
- `options` (Array; optional): Options for the RadarChart.
- `title` (String; optional): The Title for RadarChart.
- `xLabel` (String; optional): The XLabel for RadarChart.
- `yLabel` (String; optional): The YLabel for RadarChart.
"""
function radarchart(; kwargs...)
        available_props = Symbol[:id, :dataset, :labels, :options, :title, :xLabel, :yLabel]
        wild_props = Symbol[]
        return Component("radarchart", "RadarChart", "dash_cute_charts", available_props, wild_props; kwargs...)
end

